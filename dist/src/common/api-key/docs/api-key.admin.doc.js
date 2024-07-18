"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyAdminDeleteDoc = exports.ApiKeyAdminUpdateDateDoc = exports.ApiKeyAdminUpdateDoc = exports.ApiKeyAdminResetDoc = exports.ApiKeyAdminInactiveDoc = exports.ApiKeyAdminActiveDoc = exports.ApiKeyAdminCreateDoc = exports.ApiKeyAdminGetDoc = exports.ApiKeyAdminListDoc = void 0;
const common_1 = require("@nestjs/common");
const database_id_response_dto_1 = require("../../database/dtos/response/database.id.response.dto");
const doc_enum_constant_1 = require("../../doc/constants/doc.enum.constant");
const doc_decorator_1 = require("../../doc/decorators/doc.decorator");
const api_key_doc_constant_1 = require("../constants/api-key.doc.constant");
const api_key_status_code_constant_1 = require("../constants/api-key.status-code.constant");
const api_key_create_request_dto_1 = require("../dtos/request/api-key.create.request.dto");
const api_key_update_date_request_dto_1 = require("../dtos/request/api-key.update-date.request.dto");
const api_key_update_request_dto_1 = require("../dtos/request/api-key.update.request.dto");
const api_key_create_dto_1 = require("../dtos/response/api-key.create.dto");
const api_key_get_response_dto_1 = require("../dtos/response/api-key.get.response.dto");
const api_key_list_response_dto_1 = require("../dtos/response/api-key.list.response.dto");
const api_key_reset_dto_1 = require("../dtos/response/api-key.reset.dto");
function ApiKeyAdminListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'get list of api keys' }), (0, doc_decorator_1.DocRequest)({
        queries: [...api_key_doc_constant_1.ApiKeyDocQueryIsActive, ...api_key_doc_constant_1.ApiKeyDocQueryType],
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocResponsePaging)('apiKey.list', {
        dto: api_key_list_response_dto_1.ApiKeyListResponseDto,
    }));
}
exports.ApiKeyAdminListDoc = ApiKeyAdminListDoc;
function ApiKeyAdminGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'get detail an api key' }), (0, doc_decorator_1.DocRequest)({
        params: api_key_doc_constant_1.ApiKeyDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocResponse)('apiKey.get', {
        dto: api_key_get_response_dto_1.ApiKeyGetResponseDto,
    }), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocErrorGroup)([
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.NOT_FOUND,
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.notFound',
        }),
    ]));
}
exports.ApiKeyAdminGetDoc = ApiKeyAdminGetDoc;
function ApiKeyAdminCreateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'create an api key' }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocRequest)({
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: api_key_create_request_dto_1.ApiKeyCreateRequestDto,
    }), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocResponse)('apiKey.create', {
        httpStatus: common_1.HttpStatus.CREATED,
        dto: api_key_create_dto_1.ApiKeyCreateResponseDto,
    }));
}
exports.ApiKeyAdminCreateDoc = ApiKeyAdminCreateDoc;
function ApiKeyAdminActiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'make api key be active' }), (0, doc_decorator_1.DocRequest)({
        params: api_key_doc_constant_1.ApiKeyDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocResponse)('apiKey.active'), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocErrorGroup)([
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.NOT_FOUND,
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.notFound',
        }),
        (0, doc_decorator_1.DocOneOf)(common_1.HttpStatus.BAD_REQUEST, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.EXPIRED_ERROR,
            messagePath: 'apiKey.error.expired',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
            messagePath: 'apiKey.error.isActiveInvalid',
        }),
    ]));
}
exports.ApiKeyAdminActiveDoc = ApiKeyAdminActiveDoc;
function ApiKeyAdminInactiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'make api key be inactive' }), (0, doc_decorator_1.DocRequest)({
        params: api_key_doc_constant_1.ApiKeyDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocResponse)('apiKey.inactive'), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocErrorGroup)([
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.NOT_FOUND,
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.notFound',
        }),
        (0, doc_decorator_1.DocOneOf)(common_1.HttpStatus.BAD_REQUEST, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.EXPIRED_ERROR,
            messagePath: 'apiKey.error.expired',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
            messagePath: 'apiKey.error.isActiveInvalid',
        }),
    ]));
}
exports.ApiKeyAdminInactiveDoc = ApiKeyAdminInactiveDoc;
function ApiKeyAdminResetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'reset secret an api key' }), (0, doc_decorator_1.DocRequest)({
        params: api_key_doc_constant_1.ApiKeyDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocResponse)('apiKey.reset', {
        dto: api_key_reset_dto_1.ApiKeyResetResponseDto,
    }), (0, doc_decorator_1.DocErrorGroup)([
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.NOT_FOUND,
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.notFound',
        }),
        (0, doc_decorator_1.DocOneOf)(common_1.HttpStatus.BAD_REQUEST, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.EXPIRED_ERROR,
            messagePath: 'apiKey.error.expired',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
            messagePath: 'apiKey.error.isActiveInvalid',
        }),
    ]));
}
exports.ApiKeyAdminResetDoc = ApiKeyAdminResetDoc;
function ApiKeyAdminUpdateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'update data an api key' }), (0, doc_decorator_1.DocRequest)({
        params: api_key_doc_constant_1.ApiKeyDocParamsId,
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: api_key_update_request_dto_1.ApiKeyUpdateRequestDto,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocResponse)('apiKey.update'), (0, doc_decorator_1.DocErrorGroup)([
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.NOT_FOUND,
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.notFound',
        }),
        (0, doc_decorator_1.DocOneOf)(common_1.HttpStatus.BAD_REQUEST, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.EXPIRED_ERROR,
            messagePath: 'apiKey.error.expired',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
            messagePath: 'apiKey.error.isActiveInvalid',
        }),
    ]));
}
exports.ApiKeyAdminUpdateDoc = ApiKeyAdminUpdateDoc;
function ApiKeyAdminUpdateDateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'update date of api key' }), (0, doc_decorator_1.DocRequest)({
        params: api_key_doc_constant_1.ApiKeyDocParamsId,
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: api_key_update_date_request_dto_1.ApiKeyUpdateDateRequestDto,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocResponse)('apiKey.updateDate', {
        dto: database_id_response_dto_1.DatabaseIdResponseDto,
    }), (0, doc_decorator_1.DocErrorGroup)([
        (0, doc_decorator_1.DocDefault)({
            httpStatus: common_1.HttpStatus.NOT_FOUND,
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.notFound',
        }),
        (0, doc_decorator_1.DocOneOf)(common_1.HttpStatus.BAD_REQUEST, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.EXPIRED_ERROR,
            messagePath: 'apiKey.error.expired',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
            messagePath: 'apiKey.error.isActiveInvalid',
        }),
    ]));
}
exports.ApiKeyAdminUpdateDateDoc = ApiKeyAdminUpdateDateDoc;
function ApiKeyAdminDeleteDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({ summary: 'delete an api key' }), (0, doc_decorator_1.DocRequest)({
        params: api_key_doc_constant_1.ApiKeyDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ policy: true }), (0, doc_decorator_1.DocResponse)('apiKey.delete'));
}
exports.ApiKeyAdminDeleteDoc = ApiKeyAdminDeleteDoc;
//# sourceMappingURL=api-key.admin.doc.js.map