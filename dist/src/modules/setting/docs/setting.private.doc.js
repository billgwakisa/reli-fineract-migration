"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingPrivateCoreDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const doc_decorator_2 = require("../../../common/doc/decorators/doc.decorator");
const setting_core_response_dto_1 = require("../dtos/response/setting.core.response.dto");
function SettingPrivateCoreDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_2.Doc)({ summary: 'get core' }), (0, doc_decorator_1.DocAuth)({ xApiKey: true }), (0, doc_decorator_2.DocResponse)('setting.core', {
        dto: setting_core_response_dto_1.SettingCoreResponseDto,
    }));
}
exports.SettingPrivateCoreDoc = SettingPrivateCoreDoc;
//# sourceMappingURL=setting.private.doc.js.map