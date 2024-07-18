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
exports.SettingLanguageResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const message_enum_constant_1 = require("../../../../common/message/constants/message.enum.constant");
class SettingLanguageResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { availableLanguage: { required: true, enum: require("../../../../common/message/constants/message.enum.constant").ENUM_MESSAGE_LANGUAGE, isArray: true }, language: { required: true, enum: require("../../../../common/message/constants/message.enum.constant").ENUM_MESSAGE_LANGUAGE } };
    }
}
exports.SettingLanguageResponseDto = SettingLanguageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        enum: message_enum_constant_1.ENUM_MESSAGE_LANGUAGE,
        type: 'array',
        isArray: true,
    }),
    __metadata("design:type", Array)
], SettingLanguageResponseDto.prototype, "availableLanguage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        enum: message_enum_constant_1.ENUM_MESSAGE_LANGUAGE,
    }),
    __metadata("design:type", String)
], SettingLanguageResponseDto.prototype, "language", void 0);
//# sourceMappingURL=setting.language.response.dto.js.map