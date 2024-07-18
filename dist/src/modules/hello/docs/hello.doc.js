"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const hello_response_dto_1 = require("../dtos/response/hello.response.dto");
function HelloDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'hello test api',
    }), (0, doc_decorator_1.DocResponse)('app.hello', {
        dto: hello_response_dto_1.HelloResponseDto,
    }));
}
exports.HelloDoc = HelloDoc;
//# sourceMappingURL=hello.doc.js.map