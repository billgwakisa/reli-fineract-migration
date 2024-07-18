"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryAdminInactiveDoc = exports.CountryAdminActiveDoc = exports.CountryAdminGetDoc = exports.CountryAdminListDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const country_doc_constant_1 = require("../constants/country.doc.constant");
const country_get_response_dto_1 = require("../dtos/response/country.get.response.dto");
const country_list_response_dto_1 = require("../dtos/response/country.list.response.dto");
function CountryAdminListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get all of countries',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponsePaging)('country.list', {
        dto: country_list_response_dto_1.CountryListResponseDto,
    }));
}
exports.CountryAdminListDoc = CountryAdminListDoc;
function CountryAdminGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get detail a country',
    }), (0, doc_decorator_1.DocRequest)({
        params: country_doc_constant_1.CountryDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('country.get', {
        dto: country_get_response_dto_1.CountryGetResponseDto,
    }));
}
exports.CountryAdminGetDoc = CountryAdminGetDoc;
function CountryAdminActiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'make country be active',
    }), (0, doc_decorator_1.DocRequest)({
        params: country_doc_constant_1.CountryDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('country.active'));
}
exports.CountryAdminActiveDoc = CountryAdminActiveDoc;
function CountryAdminInactiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'make country be inactive',
    }), (0, doc_decorator_1.DocRequest)({
        params: country_doc_constant_1.CountryDocParamsId,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true, policy: true }), (0, doc_decorator_1.DocResponse)('country.inactive'));
}
exports.CountryAdminInactiveDoc = CountryAdminInactiveDoc;
//# sourceMappingURL=country.admin.doc.js.map