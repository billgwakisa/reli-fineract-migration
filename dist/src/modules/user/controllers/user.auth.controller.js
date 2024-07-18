"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const app_status_code_constant_1 = require("../../../app/constants/app.status-code.constant");
const api_key_decorator_1 = require("../../../common/api-key/decorators/api-key.decorator");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const auth_social_decorator_1 = require("../../../common/auth/decorators/auth.social.decorator");
const auth_jwt_refresh_payload_dto_1 = require("../../../common/auth/dtos/jwt/auth.jwt.refresh-payload.dto");
const auth_social_apple_payload_dto_1 = require("../../../common/auth/dtos/social/auth.social.apple-payload.dto");
const auth_social_google_payload_dto_1 = require("../../../common/auth/dtos/social/auth.social.google-payload.dto");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const aws_s3_service_1 = require("../../../common/aws/services/aws.s3.service");
const database_decorator_1 = require("../../../common/database/decorators/database.decorator");
const file_enum_constant_1 = require("../../../common/file/constants/file.enum.constant");
const file_decorator_1 = require("../../../common/file/decorators/file.decorator");
const file_required_pipe_1 = require("../../../common/file/pipes/file.required.pipe");
const file_type_pipe_1 = require("../../../common/file/pipes/file.type.pipe");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const country_status_code_constant_1 = require("../../country/constants/country.status-code.constant");
const country_service_1 = require("../../country/services/country.service");
const user_enum_constant_1 = require("../constants/user.enum.constant");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_decorator_1 = require("../decorators/user.decorator");
const user_auth_doc_1 = require("../docs/user.auth.doc");
const user_change_password_request_dto_1 = require("../dtos/request/user.change-password.request.dto");
const user_login_request_dto_1 = require("../dtos/request/user.login.request.dto");
const user_update_profile_request_dto_1 = require("../dtos/request/user.update-profile.request.dto");
const user_login_history_service_1 = require("../services/user-login-history.service");
const user_password_history_service_1 = require("../services/user-password-history.service");
const user_service_1 = require("../services/user.service");
let UserAuthController = class UserAuthController {
    constructor(databaseConnection, userService, awsS3Service, authService, userPasswordHistoryService, countryService, userLoginHistoryService) {
        this.databaseConnection = databaseConnection;
        this.userService = userService;
        this.awsS3Service = awsS3Service;
        this.authService = authService;
        this.userPasswordHistoryService = userPasswordHistoryService;
        this.countryService = countryService;
        this.userLoginHistoryService = userLoginHistoryService;
    }
    async loginWithCredential({ email, password }, request) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        const passwordAttempt = await this.authService.getPasswordAttempt();
        const passwordMaxAttempt = await this.authService.getPasswordMaxAttempt();
        if (passwordAttempt && user.passwordAttempt >= passwordMaxAttempt) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.PASSWORD_ATTEMPT_MAX_ERROR,
                message: 'user.error.passwordAttemptMax',
            });
        }
        const validate = await this.authService.validateUser(password, user.password);
        if (!validate) {
            await this.userService.increasePasswordAttempt(user);
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.PASSWORD_NOT_MATCH_ERROR,
                message: 'user.error.passwordNotMatch',
            });
        }
        else if (user.blocked) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_BLOCKED_ERROR,
                message: 'user.error.blocked',
            });
        }
        else if (user.status === user_enum_constant_1.ENUM_USER_STATUS.DELETED) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_DELETED_ERROR,
                message: 'user.error.deleted',
            });
        }
        else if (user.status === user_enum_constant_1.ENUM_USER_STATUS.INACTIVE) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_INACTIVE_ERROR,
                message: 'user.error.inactive',
            });
        }
        const userWithRole = await this.userService.join(user);
        if (!userWithRole.role.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_ROLE_INACTIVE_ERROR,
                message: 'user.error.roleInactive',
            });
        }
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            await this.userService.resetPasswordAttempt(user, { session });
            const checkPasswordExpired = await this.authService.checkPasswordExpired(user.passwordExpired);
            if (checkPasswordExpired) {
                throw new common_1.ForbiddenException({
                    statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.PASSWORD_EXPIRED_ERROR,
                    message: 'user.error.passwordExpired',
                });
            }
            await this.userLoginHistoryService.create(request, {
                user: user._id,
            }, { session });
            await session.commitTransaction();
            await session.endSession();
        }
        catch (err) {
            await session.abortTransaction();
            await session.endSession();
            throw err;
        }
        const roleType = userWithRole.role.type;
        const tokenType = await this.authService.getTokenType();
        const expiresInAccessToken = await this.authService.getAccessTokenExpirationTime();
        const payloadAccessToken = await this.authService.createPayloadAccessToken(userWithRole, auth_enum_constant_1.ENUM_AUTH_LOGIN_FROM.CREDENTIAL);
        const accessToken = await this.authService.createAccessToken(payloadAccessToken);
        const payloadRefreshToken = await this.authService.createPayloadRefreshToken(payloadAccessToken);
        const refreshToken = await this.authService.createRefreshToken(payloadRefreshToken);
        return {
            data: {
                tokenType,
                roleType,
                expiresIn: expiresInAccessToken,
                accessToken,
                refreshToken,
            },
        };
    }
    async loginWithGoogle({ email }, request) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        else if (user.blocked) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_BLOCKED_ERROR,
                message: 'user.error.blocked',
            });
        }
        else if (user.status === user_enum_constant_1.ENUM_USER_STATUS.DELETED) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_DELETED_ERROR,
                message: 'user.error.deleted',
            });
        }
        else if (user.status === user_enum_constant_1.ENUM_USER_STATUS.INACTIVE) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_INACTIVE_ERROR,
                message: 'user.error.inactive',
            });
        }
        const userWithRole = await this.userService.join(user);
        if (!userWithRole.role.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_ROLE_INACTIVE_ERROR,
                message: 'user.error.roleInactive',
            });
        }
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            await this.userService.resetPasswordAttempt(user, { session });
            const checkPasswordExpired = await this.authService.checkPasswordExpired(user.passwordExpired);
            if (checkPasswordExpired) {
                throw new common_1.ForbiddenException({
                    statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.PASSWORD_EXPIRED_ERROR,
                    message: 'user.error.passwordExpired',
                });
            }
            await this.userLoginHistoryService.create(request, {
                user: user._id,
            }, { session });
            await session.commitTransaction();
            await session.endSession();
        }
        catch (err) {
            await session.abortTransaction();
            await session.endSession();
            throw err;
        }
        const roleType = userWithRole.role.type;
        const tokenType = await this.authService.getTokenType();
        const expiresInAccessToken = await this.authService.getAccessTokenExpirationTime();
        const payloadAccessToken = await this.authService.createPayloadAccessToken(userWithRole, auth_enum_constant_1.ENUM_AUTH_LOGIN_FROM.SOCIAL_GOOGLE);
        const accessToken = await this.authService.createAccessToken(payloadAccessToken);
        const payloadRefreshToken = await this.authService.createPayloadRefreshToken(payloadAccessToken);
        const refreshToken = await this.authService.createRefreshToken(payloadRefreshToken);
        return {
            data: {
                tokenType,
                roleType,
                expiresIn: expiresInAccessToken,
                accessToken,
                refreshToken,
            },
        };
    }
    async loginWithApple({ email }, request) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        else if (user.blocked) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_BLOCKED_ERROR,
                message: 'user.error.blocked',
            });
        }
        else if (user.status === user_enum_constant_1.ENUM_USER_STATUS.DELETED) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_DELETED_ERROR,
                message: 'user.error.deleted',
            });
        }
        else if (user.status === user_enum_constant_1.ENUM_USER_STATUS.INACTIVE) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_INACTIVE_ERROR,
                message: 'user.error.inactive',
            });
        }
        const userWithRole = await this.userService.join(user);
        if (!userWithRole.role.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.FORBIDDEN_ROLE_INACTIVE_ERROR,
                message: 'user.error.roleInactive',
            });
        }
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            await this.userService.resetPasswordAttempt(user, { session });
            const checkPasswordExpired = await this.authService.checkPasswordExpired(user.passwordExpired);
            if (checkPasswordExpired) {
                throw new common_1.ForbiddenException({
                    statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.PASSWORD_EXPIRED_ERROR,
                    message: 'user.error.passwordExpired',
                });
            }
            await this.userLoginHistoryService.create(request, {
                user: user._id,
            }, { session });
            await session.commitTransaction();
            await session.endSession();
        }
        catch (err) {
            await session.abortTransaction();
            await session.endSession();
            throw err;
        }
        const roleType = userWithRole.role.type;
        const tokenType = await this.authService.getTokenType();
        const expiresInAccessToken = await this.authService.getAccessTokenExpirationTime();
        const payloadAccessToken = await this.authService.createPayloadAccessToken(userWithRole, auth_enum_constant_1.ENUM_AUTH_LOGIN_FROM.SOCIAL_APPLE);
        const accessToken = await this.authService.createAccessToken(payloadAccessToken);
        const payloadRefreshToken = await this.authService.createPayloadRefreshToken(payloadAccessToken);
        const refreshToken = await this.authService.createRefreshToken(payloadRefreshToken);
        return {
            data: {
                tokenType,
                roleType,
                expiresIn: expiresInAccessToken,
                accessToken,
                refreshToken,
            },
        };
    }
    async refresh(refreshToken, { loginFrom }, user) {
        const roleType = user.role.type;
        const tokenType = await this.authService.getTokenType();
        const expiresInAccessToken = await this.authService.getAccessTokenExpirationTime();
        const payloadAccessToken = await this.authService.createPayloadAccessToken(user, loginFrom);
        const accessToken = await this.authService.createAccessToken(payloadAccessToken);
        return {
            data: {
                tokenType,
                roleType,
                expiresIn: expiresInAccessToken,
                accessToken,
                refreshToken,
            },
        };
    }
    async changePassword(body, user) {
        const passwordAttempt = await this.authService.getPasswordAttempt();
        const passwordMaxAttempt = await this.authService.getPasswordMaxAttempt();
        if (passwordAttempt && user.passwordAttempt >= passwordMaxAttempt) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.PASSWORD_ATTEMPT_MAX_ERROR,
                message: 'user.error.passwordAttemptMax',
            });
        }
        const matchPassword = await this.authService.validateUser(body.oldPassword, user.password);
        if (!matchPassword) {
            await this.userService.increasePasswordAttempt(user);
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.PASSWORD_NOT_MATCH_ERROR,
                message: 'user.error.passwordNotMatch',
            });
        }
        const password = await this.authService.createPassword(body.newPassword);
        const checkUserPassword = await this.userPasswordHistoryService.checkPasswordPeriodByUser(user, password);
        if (checkUserPassword) {
            const passwordPeriod = await this.userPasswordHistoryService.getPasswordPeriod();
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.PASSWORD_MUST_NEW_ERROR,
                message: 'user.error.passwordMustNew',
                _metadata: {
                    customProperty: {
                        period: passwordPeriod,
                    },
                },
            });
        }
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            user = await this.userService.resetPasswordAttempt(user, {
                session,
            });
            user = await this.userService.updatePassword(user, password, {
                session,
            });
            await this.userPasswordHistoryService.createByUser(user, {
                session,
            });
            await session.commitTransaction();
            await session.endSession();
        }
        catch (err) {
            await session.abortTransaction();
            await session.endSession();
            throw new common_1.InternalServerErrorException({
                statusCode: app_status_code_constant_1.ENUM_APP_STATUS_CODE_ERROR.UNKNOWN_ERROR,
                message: 'http.serverError.internalServerError',
                _error: err.message,
            });
        }
    }
    async profile(user) {
        const mapped = await this.userService.mapProfile(user);
        return { data: mapped };
    }
    async updateProfile(user, { country, ...body }) {
        const checkCountry = this.countryService.findOneActiveById(country);
        if (!checkCountry) {
            throw new common_1.NotFoundException({
                statusCode: country_status_code_constant_1.ENUM_COUNTRY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'country.error.notFound',
            });
        }
        await this.userService.updateProfile(user, { country, ...body });
        return;
    }
    async updateProfileUpload(user, file) {
        const pathPrefix = await this.userService.getPhotoUploadPath(user._id);
        const randomFilename = await this.awsS3Service.createRandomFilename(pathPrefix);
        const aws = await this.awsS3Service.putItemInBucket(file, randomFilename);
        await this.userService.updatePhoto(user, aws);
        return;
    }
};
exports.UserAuthController = UserAuthController;
__decorate([
    (0, user_auth_doc_1.UserAuthLoginCredentialDoc)(),
    (0, response_decorator_1.Response)('user.loginWithCredential'),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/login/credential'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_request_dto_1.UserLoginRequestDto, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "loginWithCredential", null);
__decorate([
    (0, user_auth_doc_1.UserAuthLoginSocialGoogleDoc)(),
    (0, response_decorator_1.Response)('user.loginWithSocialGoogle'),
    (0, auth_social_decorator_1.AuthSocialGoogleProtected)(),
    (0, common_1.Post)('/login/social/google'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, auth_jwt_decorator_1.AuthJwtPayload)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_social_google_payload_dto_1.AuthSocialGooglePayloadDto, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "loginWithGoogle", null);
__decorate([
    (0, user_auth_doc_1.UserAuthLoginSocialAppleDoc)(),
    (0, response_decorator_1.Response)('user.loginWithSocialApple'),
    (0, auth_social_decorator_1.AuthSocialAppleProtected)(),
    (0, common_1.Post)('/login/social/apple'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, auth_jwt_decorator_1.AuthJwtPayload)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_social_apple_payload_dto_1.AuthSocialApplePayloadDto, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "loginWithApple", null);
__decorate([
    (0, user_auth_doc_1.UserAuthRefreshDoc)(),
    (0, response_decorator_1.Response)('user.refresh'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtRefreshProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/refresh'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, auth_jwt_decorator_1.AuthJwtToken)()),
    __param(1, (0, auth_jwt_decorator_1.AuthJwtPayload)()),
    __param(2, (0, user_decorator_1.User)(true)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_jwt_refresh_payload_dto_1.AuthJwtRefreshPayloadDto, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "refresh", null);
__decorate([
    (0, user_auth_doc_1.UserAuthChangePasswordDoc)(),
    (0, response_decorator_1.Response)('user.changePassword'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/change-password'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_change_password_request_dto_1.UserChangePasswordRequestDto, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "changePassword", null);
__decorate([
    (0, user_auth_doc_1.UserAuthProfileDoc)(),
    (0, response_decorator_1.Response)('user.profile'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/profile'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.User)(true)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "profile", null);
__decorate([
    (0, user_auth_doc_1.UserAuthUpdateProfileDoc)(),
    (0, response_decorator_1.Response)('user.updateProfile'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Put)('/profile/update'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_update_profile_request_dto_1.UserUpdateProfileRequestDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "updateProfile", null);
__decorate([
    (0, user_auth_doc_1.UserAuthUploadProfileDoc)(),
    (0, response_decorator_1.Response)('user.updateProfileUpload'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, file_decorator_1.FileUploadSingle)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Post)('/profile/upload'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFile)(new file_required_pipe_1.FileRequiredPipe(), new file_type_pipe_1.FileTypePipe([
        file_enum_constant_1.ENUM_FILE_MIME_IMAGE.JPG,
        file_enum_constant_1.ENUM_FILE_MIME_IMAGE.JPEG,
        file_enum_constant_1.ENUM_FILE_MIME_IMAGE.PNG,
    ]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "updateProfileUpload", null);
exports.UserAuthController = UserAuthController = __decorate([
    (0, swagger_1.ApiTags)('modules.auth.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __param(0, (0, database_decorator_1.DatabaseConnection)()),
    __metadata("design:paramtypes", [mongoose_1.Connection,
        user_service_1.UserService,
        aws_s3_service_1.AwsS3Service,
        auth_service_1.AuthService,
        user_password_history_service_1.UserPasswordHistoryService,
        country_service_1.CountryService,
        user_login_history_service_1.UserLoginHistoryService])
], UserAuthController);
//# sourceMappingURL=user.auth.controller.js.map