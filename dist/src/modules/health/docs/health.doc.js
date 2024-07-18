"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const health_response_dto_1 = require("../dtos/response/health.response.dto");
function HealthCheckDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'health check api',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
    }), (0, doc_decorator_1.DocResponse)('health.check', {
        dto: health_response_dto_1.HealthResponseDto,
    }));
}
exports.HealthCheckDoc = HealthCheckDoc;
//# sourceMappingURL=health.doc.js.map