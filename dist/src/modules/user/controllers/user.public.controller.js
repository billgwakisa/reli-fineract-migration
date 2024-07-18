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
exports.UserPublicController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const app_status_code_constant_1 = require("../../../app/constants/app.status-code.constant");
const api_key_decorator_1 = require("../../../common/api-key/decorators/api-key.decorator");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const database_decorator_1 = require("../../../common/database/decorators/database.decorator");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const country_status_code_constant_1 = require("../../country/constants/country.status-code.constant");
const country_service_1 = require("../../country/services/country.service");
const email_service_1 = require("../../email/services/email.service");
const role_status_code_constant_1 = require("../../role/constants/role.status-code.constant");
const role_service_1 = require("../../role/services/role.service");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_public_doc_1 = require("../docs/user.public.doc");
const user_sign_up_request_dto_1 = require("../dtos/request/user.sign-up.request.dto");
const user_password_history_service_1 = require("../services/user-password-history.service");
const user_state_history_service_1 = require("../services/user-state-history.service");
const user_service_1 = require("../services/user.service");
let UserPublicController = class UserPublicController {
    constructor(databaseConnection, userService, userStateHistoryService, userPasswordHistoryService, authService, roleService, emailService, countryService) {
        this.databaseConnection = databaseConnection;
        this.userService = userService;
        this.userStateHistoryService = userStateHistoryService;
        this.userPasswordHistoryService = userPasswordHistoryService;
        this.authService = authService;
        this.roleService = roleService;
        this.emailService = emailService;
        this.countryService = countryService;
    }
    async signUp({ email, name, password: passwordString, country }) {
        const promises = [
            this.roleService.findOneByName('user'),
            this.userService.existByEmail(email),
            this.countryService.findOneActiveById(country),
        ];
        const [role, emailExist, checkCountry] = await Promise.all(promises);
        if (!role) {
            throw new common_1.NotFoundException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'role.error.notFound',
            });
        }
        else if (!checkCountry) {
            throw new common_1.NotFoundException({
                statusCode: country_status_code_constant_1.ENUM_COUNTRY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'country.error.notFound',
            });
        }
        else if (emailExist) {
            throw new common_1.ConflictException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.EMAIL_EXIST_ERROR,
                message: 'user.error.emailExist',
            });
        }
        const password = await this.authService.createPassword(passwordString);
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            const user = await this.userService.signUp(role._id, {
                email,
                name,
                password: passwordString,
                country,
            }, password, { session });
            await this.userStateHistoryService.createCreated(user, user._id, {
                session,
            });
            await this.userPasswordHistoryService.createByUser(user, {
                session,
            });
            await this.emailService.sendWelcome({
                email,
                name,
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
        return;
    }
};
exports.UserPublicController = UserPublicController;
__decorate([
    (0, user_public_doc_1.UserPublicSignUpDoc)(),
    (0, response_decorator_1.Response)('user.signUp'),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Post)('/sign-up'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_sign_up_request_dto_1.UserSignUpRequestDto]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "signUp", null);
exports.UserPublicController = UserPublicController = __decorate([
    (0, swagger_1.ApiTags)('modules.public.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __param(0, (0, database_decorator_1.DatabaseConnection)()),
    __metadata("design:paramtypes", [mongoose_1.Connection,
        user_service_1.UserService,
        user_state_history_service_1.UserStateHistoryService,
        user_password_history_service_1.UserPasswordHistoryService,
        auth_service_1.AuthService,
        role_service_1.RoleService,
        email_service_1.EmailService,
        country_service_1.CountryService])
], UserPublicController);
//# sourceMappingURL=user.public.controller.js.map