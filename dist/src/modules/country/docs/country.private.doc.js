"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryPrivateListDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const doc_decorator_2 = require("../../../common/doc/decorators/doc.decorator");
const country_list_response_dto_1 = require("../dtos/response/country.list.response.dto");
function CountryPrivateListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_2.Doc)({ summary: 'get all list country' }), (0, doc_decorator_1.DocAuth)({ xApiKey: true }), (0, doc_decorator_1.DocResponsePaging)('country.list', {
        dto: country_list_response_dto_1.CountryListResponseDto,
    }));
}
exports.CountryPrivateListDoc = CountryPrivateListDoc;
//# sourceMappingURL=country.private.doc.js.map