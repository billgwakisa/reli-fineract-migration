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
exports.UserUserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const app_status_code_constant_1 = require("../../../app/constants/app.status-code.constant");
const api_key_decorator_1 = require("../../../common/api-key/decorators/api-key.decorator");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const database_decorator_1 = require("../../../common/database/decorators/database.decorator");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
const policy_decorator_1 = require("../../../common/policy/decorators/policy.decorator");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const user_user_doc_1 = require("../docs/user.user.doc");
const user_update_mobile_number_request_dto_1 = require("../dtos/request/user.update-mobile-number.request.dto");
const user_state_history_service_1 = require("../services/user-state-history.service");
const user_service_1 = require("../services/user.service");
let UserUserController = class UserUserController {
    constructor(databaseConnection, userService, userStateHistoryService) {
        this.databaseConnection = databaseConnection;
        this.userService = userService;
        this.userStateHistoryService = userStateHistoryService;
    }
    async updateMobileNumber(user, body) {
        await this.userService.updateMobileNumber(user, body);
        return;
    }
    async deleteSelf(user, _id) {
        const session = await this.databaseConnection.startSession();
        session.startTransaction();
        try {
            await this.userService.selfDelete(user, {
                session,
            });
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
};
exports.UserUserController = UserUserController;
__decorate([
    (0, user_user_doc_1.UserAuthUpdateMobileNumberDoc)(),
    (0, response_decorator_1.Response)('user.updateMobileNumber'),
    (0, user_decorator_1.UserProtected)(),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Put)('/update/mobile-number'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_update_mobile_number_request_dto_1.UserUpdateMobileNumberRequestDto]),
    __metadata("design:returntype", Promise)
], UserUserController.prototype, "updateMobileNumber", null);
__decorate([
    (0, user_user_doc_1.UserUserDeleteSelfDoc)(),
    (0, response_decorator_1.Response)('user.deleteSelf'),
    (0, user_decorator_1.UserProtected)(),
    (0, policy_decorator_1.PolicyRoleProtected)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.USER),
    (0, auth_jwt_decorator_1.AuthJwtAccessProtected)(),
    (0, api_key_decorator_1.ApiKeyPublicProtected)(),
    (0, common_1.Delete)('/delete'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, auth_jwt_decorator_1.AuthJwtPayload)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserUserController.prototype, "deleteSelf", null);
exports.UserUserController = UserUserController = __decorate([
    (0, swagger_1.ApiTags)('modules.user.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __param(0, (0, database_decorator_1.DatabaseConnection)()),
    __metadata("design:paramtypes", [mongoose_1.Connection,
        user_service_1.UserService,
        user_state_history_service_1.UserStateHistoryService])
], UserUserController);
//# sourceMappingURL=user.user.controller.js.map