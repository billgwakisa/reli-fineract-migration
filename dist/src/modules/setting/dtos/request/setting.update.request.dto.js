"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingUpdateRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const setting_create_request_dto_1 = require("./setting.create.request.dto");
class SettingUpdateRequestDto extends (0, swagger_1.PickType)(setting_create_request_dto_1.SettingCreateRequestDto, [
    'value',
    'description',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.SettingUpdateRequestDto = SettingUpdateRequestDto;
//# sourceMappingURL=setting.update.request.dto.js.map