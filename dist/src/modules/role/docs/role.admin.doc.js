"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAdminDeleteDoc = exports.RoleAdminUpdateDoc = exports.RoleAdminInactiveDoc = exports.RoleAdminActiveDoc = exports.RoleAdminCreateDoc = exports.RoleAdminGetDoc = exports.RoleAdminListDoc = void 0;
const common_1 = require("@nestjs/common");
const database_id_response_dto_1 = require("../../../common/database/dtos/response/database.id.response.dto");
const doc_enum_constant_1 = require("../../../common/doc/constants/doc.enum.constant");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const role_doc_constant_1 = require("../constants/role.doc.constant");
const role_create_request_dto_1 = require("../dtos/request/role.create.request.dto");
const role_update_request_dto_1 = require("../dtos/request/role.update.request.dto");
const role_get_response_dto_1 = require("../dtos/response/role.get.response.dto");
const role_list_response_dto_1 = require("../dtos/response/role.list.response.dto");
function RoleAdminListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get all of roles',
    }), (0, doc_decorator_1.DocRequest)({
        queries: [...role_doc_constant_1.RoleDocQueryIsActive, ...role_doc_constant_1.RoleDocQueryType],
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponsePaging)('role.list', {
        dto: role_list_response_dto_1.RoleListResponseDto,
    }));
}
exports.RoleAdminListDoc = RoleAdminListDoc;
function RoleAdminGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get detail a role',
    }), (0, doc_decorator_1.DocRequest)({
        params: role_doc_constant_1.RoleDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('role.get', {
        dto: role_get_response_dto_1.RoleGetResponseDto,
    }));
}
exports.RoleAdminGetDoc = RoleAdminGetDoc;
function RoleAdminCreateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'create a role',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocRequest)({
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: role_create_request_dto_1.RoleCreateRequestDto,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('role.create', {
        httpStatus: common_1.HttpStatus.CREATED,
        dto: database_id_response_dto_1.DatabaseIdResponseDto,
    }));
}
exports.RoleAdminCreateDoc = RoleAdminCreateDoc;
function RoleAdminActiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'make role be active',
    }), (0, doc_decorator_1.DocRequest)({
        params: role_doc_constant_1.RoleDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('role.active'));
}
exports.RoleAdminActiveDoc = RoleAdminActiveDoc;
function RoleAdminInactiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'make role be inactive',
    }), (0, doc_decorator_1.DocRequest)({
        params: role_doc_constant_1.RoleDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('role.inactive'));
}
exports.RoleAdminInactiveDoc = RoleAdminInactiveDoc;
function RoleAdminUpdateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'update data a role',
    }), (0, doc_decorator_1.DocRequest)({
        params: role_doc_constant_1.RoleDocParamsId,
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: role_update_request_dto_1.RoleUpdateRequestDto,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('role.update', {
        dto: database_id_response_dto_1.DatabaseIdResponseDto,
    }));
}
exports.RoleAdminUpdateDoc = RoleAdminUpdateDoc;
function RoleAdminDeleteDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'delete a role',
    }), (0, doc_decorator_1.DocRequest)({
        params: role_doc_constant_1.RoleDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('role.delete'));
}
exports.RoleAdminDeleteDoc = RoleAdminDeleteDoc;
//# sourceMappingURL=role.admin.doc.js.map