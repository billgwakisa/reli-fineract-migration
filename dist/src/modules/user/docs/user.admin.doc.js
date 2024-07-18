"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdminUpdatePasswordDoc = exports.UserAdminBlockedDoc = exports.UserAdminInactiveDoc = exports.UserAdminActiveDoc = exports.UserAdminCreateDoc = exports.UserAdminGetDoc = exports.UserAdminGetLoginHistoryListDoc = exports.UserAdminGetPasswordHistoryListDoc = exports.UserAdminGetStateHistoryListDoc = exports.UserAdminListDoc = void 0;
const common_1 = require("@nestjs/common");
const database_id_response_dto_1 = require("../../../common/database/dtos/response/database.id.response.dto");
const doc_enum_constant_1 = require("../../../common/doc/constants/doc.enum.constant");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const user_doc_constant_1 = require("../constants/user.doc.constant");
const user_create_request_dto_1 = require("../dtos/request/user.create.request.dto");
const user_login_history_list_response_dto_1 = require("../dtos/response/user-login-history.list.response.dto");
const user_password_history_list_response_dto_1 = require("../dtos/response/user-password-history.list.response.dto");
const user_state_history_list_response_dto_1 = require("../dtos/response/user-state-history.list.response.dto");
const user_list_response_dto_1 = require("../dtos/response/user.list.response.dto");
const user_profile_response_dto_1 = require("../dtos/response/user.profile.response.dto");
function UserAdminListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get all users',
    }), (0, doc_decorator_1.DocRequest)({
        queries: [
            ...user_doc_constant_1.UserDocQueryStatus,
            ...user_doc_constant_1.UserDocQueryBlocked,
            ...user_doc_constant_1.UserDocQueryRole,
        ],
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponsePaging)('user.list', {
        dto: user_list_response_dto_1.UserListResponseDto,
    }));
}
exports.UserAdminListDoc = UserAdminListDoc;
function UserAdminGetStateHistoryListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get all user state histories',
    }), (0, doc_decorator_1.DocRequest)({
        params: user_doc_constant_1.UserDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponsePaging)('user.stateHistoryList', {
        dto: user_state_history_list_response_dto_1.UserStateHistoryListResponseDto,
    }));
}
exports.UserAdminGetStateHistoryListDoc = UserAdminGetStateHistoryListDoc;
function UserAdminGetPasswordHistoryListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get all user history change password',
    }), (0, doc_decorator_1.DocRequest)({
        params: user_doc_constant_1.UserDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponsePaging)('user.passwordHistoryList', {
        dto: user_password_history_list_response_dto_1.UserPasswordHistoryListResponseDto,
    }));
}
exports.UserAdminGetPasswordHistoryListDoc = UserAdminGetPasswordHistoryListDoc;
function UserAdminGetLoginHistoryListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get all user login history',
    }), (0, doc_decorator_1.DocRequest)({
        params: user_doc_constant_1.UserDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponsePaging)('user.loginHistoryList', {
        dto: user_login_history_list_response_dto_1.UserLoginHistoryListResponseDto,
    }));
}
exports.UserAdminGetLoginHistoryListDoc = UserAdminGetLoginHistoryListDoc;
function UserAdminGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get detail an user',
    }), (0, doc_decorator_1.DocRequest)({
        params: user_doc_constant_1.UserDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('user.get', {
        dto: user_profile_response_dto_1.UserProfileResponseDto,
    }));
}
exports.UserAdminGetDoc = UserAdminGetDoc;
function UserAdminCreateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'create a user',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocRequest)({
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: user_create_request_dto_1.UserCreateRequestDto,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('user.create', {
        httpStatus: common_1.HttpStatus.CREATED,
        dto: database_id_response_dto_1.DatabaseIdResponseDto,
    }));
}
exports.UserAdminCreateDoc = UserAdminCreateDoc;
function UserAdminActiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'make user be active',
    }), (0, doc_decorator_1.DocRequest)({
        params: user_doc_constant_1.UserDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('user.active'));
}
exports.UserAdminActiveDoc = UserAdminActiveDoc;
function UserAdminInactiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'make user be inactive',
    }), (0, doc_decorator_1.DocRequest)({
        params: user_doc_constant_1.UserDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('user.inactive'));
}
exports.UserAdminInactiveDoc = UserAdminInactiveDoc;
function UserAdminBlockedDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'block a user',
    }), (0, doc_decorator_1.DocRequest)({
        params: user_doc_constant_1.UserDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('user.blocked'));
}
exports.UserAdminBlockedDoc = UserAdminBlockedDoc;
function UserAdminUpdatePasswordDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'update user password',
    }), (0, doc_decorator_1.DocRequest)({
        params: user_doc_constant_1.UserDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('user.updatePassword'));
}
exports.UserAdminUpdatePasswordDoc = UserAdminUpdatePasswordDoc;
//# sourceMappingURL=user.admin.doc.js.map