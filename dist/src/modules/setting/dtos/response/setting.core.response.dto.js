"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingCoreResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const setting_file_response_dto_1 = require("./setting.file.response.dto");
const setting_language_response_dto_1 = require("./setting.language.response.dto");
const setting_timezone_response_dto_1 = require("./setting.timezone.response.dto");
class SettingCoreResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { file: { required: true, type: () => require("./setting.file.response.dto").SettingFileResponseDto }, language: { required: true, type: () => require("./setting.language.response.dto").SettingLanguageResponseDto }, timezone: { required: true, type: () => require("./setting.timezone.response.dto").SettingTimezoneResponseDto } };
    }
}
exports.SettingCoreResponseDto = SettingCoreResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: () => setting_file_response_dto_1.SettingFileResponseDto,
        oneOf: [{ $ref: (0, swagger_1.getSchemaPath)(setting_file_response_dto_1.SettingFileResponseDto) }],
    }),
    (0, class_transformer_1.Type)(() => setting_file_response_dto_1.SettingFileResponseDto),
    __metadata("design:type", setting_file_response_dto_1.SettingFileResponseDto)
], SettingCoreResponseDto.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: () => setting_language_response_dto_1.SettingLanguageResponseDto,
        oneOf: [{ $ref: (0, swagger_1.getSchemaPath)(setting_language_response_dto_1.SettingLanguageResponseDto) }],
    }),
    (0, class_transformer_1.Type)(() => setting_language_response_dto_1.SettingLanguageResponseDto),
    __metadata("design:type", setting_language_response_dto_1.SettingLanguageResponseDto)
], SettingCoreResponseDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: () => setting_timezone_response_dto_1.SettingTimezoneResponseDto,
        oneOf: [{ $ref: (0, swagger_1.getSchemaPath)(setting_timezone_response_dto_1.SettingTimezoneResponseDto) }],
    }),
    (0, class_transformer_1.Type)(() => setting_timezone_response_dto_1.SettingTimezoneResponseDto),
    __metadata("design:type", setting_timezone_response_dto_1.SettingTimezoneResponseDto)
], SettingCoreResponseDto.prototype, "timezone", void 0);
//# sourceMappingURL=setting.core.response.dto.js.map