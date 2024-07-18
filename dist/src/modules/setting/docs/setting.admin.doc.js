"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingAdminUpdateDoc = exports.SettingAdminGetDoc = exports.SettingAdminListDoc = void 0;
const common_1 = require("@nestjs/common");
const database_id_response_dto_1 = require("../../../common/database/dtos/response/database.id.response.dto");
const doc_enum_constant_1 = require("../../../common/doc/constants/doc.enum.constant");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const setting_doc_constant_1 = require("../constants/setting.doc.constant");
const setting_status_code_constant_1 = require("../constants/setting.status-code.constant");
const setting_update_request_dto_1 = require("../dtos/request/setting.update.request.dto");
const setting_get_response_dto_1 = require("../dtos/response/setting.get.response.dto");
const setting_list_response_dto_1 = require("../dtos/response/setting.list.response.dto");
function SettingAdminListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get list of settings',
    }), (0, doc_decorator_1.DocAuth)({ xApiKey: true, jwtAccessToken: true }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponsePaging)('setting.list', {
        dto: setting_list_response_dto_1.SettingListResponseDto,
    }));
}
exports.SettingAdminListDoc = SettingAdminListDoc;
function SettingAdminGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'get detail a setting' }), (0, doc_decorator_1.DocRequest)({
        params: setting_doc_constant_1.SettingDocParamsId,
    }), (0, doc_decorator_1.DocResponse)('setting.get', {
        dto: setting_get_response_dto_1.SettingGetResponseDto,
    }), (0, doc_decorator_1.DocAuth)({ xApiKey: true, jwtAccessToken: true }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocErrorGroup)([
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.NOT_FOUND,
            statusCode: setting_status_code_constant_1.ENUM_SETTING_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
            messagePath: 'setting.error.notFound',
        }),
    ]));
}
exports.SettingAdminGetDoc = SettingAdminGetDoc;
function SettingAdminUpdateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'update a setting' }), (0, doc_decorator_1.DocRequest)({
        params: setting_doc_constant_1.SettingDocParamsId,
        dto: setting_update_request_dto_1.SettingUpdateRequestDto,
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
    }), (0, doc_decorator_1.DocAuth)({
        jwtAccessToken: true,
        xApiKey: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('setting.update', {
        dto: database_id_response_dto_1.DatabaseIdResponseDto,
    }), (0, doc_decorator_1.DocErrorGroup)([
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.NOT_FOUND,
            statusCode: setting_status_code_constant_1.ENUM_SETTING_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
            messagePath: 'setting.error.notFound',
        }),
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.BAD_REQUEST,
            statusCode: setting_status_code_constant_1.ENUM_SETTING_STATUS_CODE_ERROR.VALUE_NOT_ALLOWED_ERROR,
            messagePath: 'setting.error.valueNotAllowed',
        }),
    ]));
}
exports.SettingAdminUpdateDoc = SettingAdminUpdateDoc;
//# sourceMappingURL=setting.admin.doc.js.map