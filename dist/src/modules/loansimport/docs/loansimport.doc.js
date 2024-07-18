"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansimportDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const loansimport_response_dto_1 = require("../dtos/response/loansimport.response.dto");
function LoansimportDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'Loans import test api',
    }), (0, doc_decorator_1.DocResponse)('app.loansimport', {
        dto: loansimport_response_dto_1.LoansimportResponseDto,
    }));
}
exports.LoansimportDoc = LoansimportDoc;
//# sourceMappingURL=loansimport.doc.js.map