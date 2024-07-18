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
exports.UserAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const user_service_1 = require("../services/user.service");
const user_list_constant_1 = require("../constants/user.list.constant");
const pagination_list_dto_1 = require("../../../common/pagination/dtos/pagination.list.dto");
const pagination_decorator_1 = require("../../../common/pagination/decorators/pagination.decorator");
const policy_decorator_1 = require("../../../common/policy/decorators/policy.decorator");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
const user_admin_doc_1 = require("../docs/user.admin.doc");
const api_key_decorator_1 = require("../../../common/api-key/decorators/api-key.decorator");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const user_enum_constant_1 = require("../constants/user.enum.constant");
const request_required_pipe_1 = require("../../../common/request/pipes/request.required.pipe");
const user_parse_pipe_1 = require("../pipes/user.parse.pipe");
const user_status_pipe_1 = require("../pipes/user.status.pipe");
const user_blocked_pipe_1 = require("../pipes/user.blocked.pipe");
const user_not_self_pipe_1 = require("../pipes/user.not-self.pipe");
const user_create_request_dto_1 = require("../dtos/request/user.create.request.dto");
const email_service_1 = require("../../email/services/email.service");
const role_service_1 = require("../../role/services/role.service");
const role_status_code_constant_1 = require("../../role/constants/role.status-code.constant");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const mongoose_1 = require("mongoose");
const app_status_code_constant_1 = require("../../../app/constants/app.status-code.constant");
const database_decorator_1 = require("../../../common/database/decorators/database.decorator");
const country_service_1 = require("../../country/services/country.service");
const country_status_code_constant_1 = require("../../country/constants/country.status-code.constant");
const user_state_history_service_1 = require("../services/user-state-history.service");
const user_password_history_service_1 = require("../services/user-password-history.service");
const user_login_history_service_1 = require("../services/user-login-history.service");
let UserAdminController = class UserAdminController {
    constructor(databaseConnection, paginationService, roleService, emailService, authService, userService, userStateHistoryService, userPasswordHistoryService, userLoginHistoryService, countryService) {
        this.databaseConnection = databaseConnection;
        this.paginationService = paginationService;
        this.roleService = roleService;
        this.emailService = emailService;
        this.authService = authService;
        this.userService = userService;
        this.userStateHistoryService = userStateHistoryService;
        this.userPasswordHistoryService = userPasswordHistoryService;
        this.userLoginHistoryService = userLoginHistoryService;
        this.countryService = countryService;
    }
    async list({ _search, _limit, _offset, _order }, status, blocked, role) {
        const find = {
            ..._search,
            ...status,
            ...blocked,
            ...role,
        };
        const users = await this.userService.findAllWithRoleAndCountry(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.userService.getTotal(find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        const mapped = await this.userService.mapList(users);
        return {
            _pagination: { total, totalPage },
            data: mapped,
        };
    }
    async get(user) {
        const userWithRole = await this.userService.join(user);
        const mapped = await this.userService.mapProfile(userWithRole);
        return { data: mapped };
    }
    async stateHistoryList(user, { _search, _limit, _offset, _order }) {
        const find = {
            ..._search,
        };
        const userHistories = await this.userStateHistoryService.findAllByUser(user._id, find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.userStateHistoryService.getTotalByUser(user._id, find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        const mapped = await this.userStateHistoryService.mapList(userHistories);
        return {
            _pagination: { total, totalPage },
            data: mapped,
        };
    }
    async passwordHistoryList(user, { _search, _limit, _offset, _order }) {
        const find = {
            ..._search,
        };
        const userHistories = await this.userPasswordHistoryService.findAllByUser(user._id, find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.userPasswordHistoryService.getTotalByUser(user._id, find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        const mapped = await this.userPasswordHistoryService.mapList(userHistories);
        return {
            _pagination: { total, totalPage },
            data: mapped,
        };
    }
    async loginHistoryList(user, { _search, _limit, _offset, _order }) {
        const find = {
            ..._search,
        };
        const userHistories = await this.userLoginHistoryService.findAllByUser(user._id, find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });
        const total = await this.userLoginHistoryService.getTotalByUser(user._id, find);
        const totalPage = this.paginationService.totalPage(total, _limit);
        const mapped = await this.userLoginHistoryService.mapList(userHistories);
        return {
            _pagination: { total, totalPage },
            data: mapped,
        };
    }
    async create({ email, role, name, country }, _id) {
        const promises = [
            this.roleService.findOneById(role),
            this.userService.existByEmail(email),
            this.countryService.findOneActiveById(country),
        ];
        const [checkRole, emailExist, checkCountry] = await Promise.all(promises);
        if (!checkRole) {
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
        const passwordString = await this.authService.createPasswordRandom();
        const password = await this.authService.createPassword(passwordString);
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            const created = await this.userService.create({
                email,
                country,
                role,
                name,
            }, password, user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.ADMIN, { session });
            await this.userStateHistoryService.createCreated(created, created._id, {
                session,
            });
            await this.userPasswordHistoryService.createByAdmin(created, _id, {
                session,
            });
            const emailSend = {
                email,
                name,
            };
            await this.emailService.sendWelcome(emailSend);
            await this.emailService.sendTempPassword(emailSend, {
                password: passwordString,
                expiredAt: password.passwordExpired,
            });
            await session.commitTransaction();
            await session.endSession();
            return {
                data: { _id: created._id },
            };
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
    async inactive(user, _id) {
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            await this.userService.inactive(user, { session });
            await this.userStateHistoryService.createInactive(user, _id, {
                session,
            });
            await session.commitTransaction();
            await session.endSession();
            return;
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
    async active(user, _id) {
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            await this.userService.active(user, { session });
            await this.userStateHistoryService.createActive(user, _id, {
                session,
            });
            await session.commitTransaction();
            await session.endSession();
            return;
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
    async blocked(user, _id) {
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            await this.userService.blocked(user, { session });
            await this.userStateHistoryService.createBlocked(user, _id, {
                session,
            });
            await session.commitTransaction();
            await session.endSession();
            return;
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
    async updatePassword(user, _id) {
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            const passwordString = await this.authService.createPasswordRandom();
            const password = await this.authService.createPassword(passwordString);
            user = await this.userService.updatePassword(user, password, {
                session,
            });
            user = await this.userService.resetPasswordAttempt(user, {
                session,
            });
            await this.userPasswordHistoryService.createByAdmin(user, _id, {
                session,
            });
            const emailSend = {
                email: user.email,
                name: user.name,
            };
            await this.emailService.sendTempPassword(emailSend, {
                password: passwordString,
                expiredAt: password.passwordExpired,
            });
            await session.commitTransaction();
            await session.endSession();
            return;
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
};
exports.UserAdminController = UserAdminController;
__decorate([
    (0, user_admin_doc_1.UserAdminListDoc)(),
    (0, response_decorator_1.ResponsePaging)('user.list'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, pagination_decorator_1.PaginationQuery)({
        defaultOrderBy: user_list_constant_1.USER_DEFAULT_ORDER_BY,
        availableOrderBy: user_list_constant_1.USER_DEFAULT_AVAILABLE_ORDER_BY,
    })),
    __param(1, (0, pagination_decorator_1.PaginationQueryFilterInEnum)('status', user_list_constant_1.USER_DEFAULT_STATUS, user_enum_constant_1.ENUM_USER_STATUS)),
    __param(2, (0, pagination_decorator_1.PaginationQueryFilterInBoolean)('blocked', user_list_constant_1.USER_DEFAULT_BLOCKED)),
    __param(3, (0, pagination_decorator_1.PaginationQueryFilterEqual)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_list_dto_1.PaginationListDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "list", null);
__decorate([
    (0, user_admin_doc_1.UserAdminGetDoc)(),
    (0, response_decorator_1.Response)('user.get'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/get/:user'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('user', request_required_pipe_1.RequestRequiredPipe, user_parse_pipe_1.UserParsePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "get", null);
__decorate([
    (0, user_admin_doc_1.UserAdminGetStateHistoryListDoc)(),
    (0, response_decorator_1.ResponsePaging)('user.stateHistoryList'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/get/:user/state/history'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('user', request_required_pipe_1.RequestRequiredPipe, user_parse_pipe_1.UserParsePipe)),
    __param(1, (0, pagination_decorator_1.PaginationQuery)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pagination_list_dto_1.PaginationListDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "stateHistoryList", null);
__decorate([
    (0, user_admin_doc_1.UserAdminGetPasswordHistoryListDoc)(),
    (0, response_decorator_1.ResponsePaging)('user.passwordHistoryList'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/get/:user/password/history'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('user', request_required_pipe_1.RequestRequiredPipe, user_parse_pipe_1.UserParsePipe)),
    __param(1, (0, pagination_decorator_1.PaginationQuery)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pagination_list_dto_1.PaginationListDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "passwordHistoryList", null);
__decorate([
    (0, user_admin_doc_1.UserAdminGetLoginHistoryListDoc)(),
    (0, response_decorator_1.ResponsePaging)('user.loginHistoryList'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Get)('/get/:user/login/history'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('user', request_required_pipe_1.RequestRequiredPipe, user_parse_pipe_1.UserParsePipe)),
    __param(1, (0, pagination_decorator_1.PaginationQuery)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pagination_list_dto_1.PaginationListDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "loginHistoryList", null);
__decorate([
    (0, user_admin_doc_1.UserAdminCreateDoc)(),
    (0, response_decorator_1.Response)('user.create'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.CREATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_jwt_decorator_1.AuthJwtPayload)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_request_dto_1.UserCreateRequestDto, String]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "create", null);
__decorate([
    (0, user_admin_doc_1.UserAdminInactiveDoc)(),
    (0, response_decorator_1.Response)('user.inactive'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:user/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('user', request_required_pipe_1.RequestRequiredPipe, user_parse_pipe_1.UserParsePipe, user_not_self_pipe_1.UserNotSelfPipe, user_status_pipe_1.UserStatusActivePipe)),
    __param(1, (0, auth_jwt_decorator_1.AuthJwtPayload)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "inactive", null);
__decorate([
    (0, user_admin_doc_1.UserAdminActiveDoc)(),
    (0, response_decorator_1.Response)('user.active'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:user/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('user', request_required_pipe_1.RequestRequiredPipe, user_parse_pipe_1.UserParsePipe, user_not_self_pipe_1.UserNotSelfPipe, user_status_pipe_1.UserStatusInactivePipe)),
    __param(1, (0, auth_jwt_decorator_1.AuthJwtPayload)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "active", null);
__decorate([
    (0, user_admin_doc_1.UserAdminBlockedDoc)(),
    (0, response_decorator_1.Response)('user.blocked'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Patch)('/update/:user/blocked'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('user', request_required_pipe_1.RequestRequiredPipe, user_parse_pipe_1.UserParsePipe, user_not_self_pipe_1.UserNotSelfPipe, user_blocked_pipe_1.UserNotBlockedPipe)),
    __param(1, (0, auth_jwt_decorator_1.AuthJwtPayload)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "blocked", null);
__decorate([
    (0, user_admin_doc_1.UserAdminUpdatePasswordDoc)(),
    (0, response_decorator_1.Response)('user.updatePassword'),
    (0, policy_decorator_1.PolicyAbilityProtected)({
        subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.USER,
        action: [policy_enum_constant_1.ENUM_POLICY_ACTION.READ, policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE],
    }),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Put)('/update/:user/password'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('user', request_required_pipe_1.RequestRequiredPipe, user_parse_pipe_1.UserParsePipe, user_not_self_pipe_1.UserNotSelfPipe)),
    __param(1, (0, auth_jwt_decorator_1.AuthJwtPayload)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "updatePassword", null);
exports.UserAdminController = UserAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __param(0, (0, database_decorator_1.DatabaseConnection)()),
    __metadata("design:paramtypes", [mongoose_1.Connection,
        pagination_service_1.PaginationService,
        role_service_1.RoleService,
        email_service_1.EmailService,
        auth_service_1.AuthService,
        user_service_1.UserService,
        user_state_history_service_1.UserStateHistoryService,
        user_password_history_service_1.UserPasswordHistoryService,
        user_login_history_service_1.UserLoginHistoryService,
        country_service_1.CountryService])
], UserAdminController);
//# sourceMappingURL=user.admin.controller.js.map