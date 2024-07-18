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
exports.AwsSESSendBulkDto = exports.AwsSESSendBulkRecipientsDto = exports.AwsSESSendDto = exports.AwsSESGetTemplateDto = exports.AwsSESUpdateTemplateDto = exports.AwsSESCreateTemplateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AwsSESCreateTemplateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, htmlBody: { required: false, type: () => String }, subject: { required: true, type: () => String }, plainTextBody: { required: false, type: () => String } };
    }
}
exports.AwsSESCreateTemplateDto = AwsSESCreateTemplateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AwsSESCreateTemplateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AwsSESCreateTemplateDto.prototype, "htmlBody", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AwsSESCreateTemplateDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AwsSESCreateTemplateDto.prototype, "plainTextBody", void 0);
class AwsSESUpdateTemplateDto extends AwsSESCreateTemplateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.AwsSESUpdateTemplateDto = AwsSESUpdateTemplateDto;
class AwsSESGetTemplateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String } };
    }
}
exports.AwsSESGetTemplateDto = AwsSESGetTemplateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AwsSESGetTemplateDto.prototype, "name", void 0);
class AwsSESSendDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { templateName: { required: true, type: () => String }, templateData: { required: false }, sender: { required: true, type: () => String }, replyTo: { required: false, type: () => String }, recipients: { required: true, type: () => [String] }, cc: { required: false, type: () => [String] }, bcc: { required: false, type: () => [String] } };
    }
}
exports.AwsSESSendDto = AwsSESSendDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AwsSESSendDto.prototype, "templateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", Object)
], AwsSESSendDto.prototype, "templateData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AwsSESSendDto.prototype, "sender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AwsSESSendDto.prototype, "replyTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        isArray: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(null, { each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], AwsSESSendDto.prototype, "recipients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        isArray: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(null, { each: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AwsSESSendDto.prototype, "cc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        isArray: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(null, { each: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AwsSESSendDto.prototype, "bcc", void 0);
class AwsSESSendBulkRecipientsDto extends (0, swagger_1.PickType)(AwsSESSendDto, [
    'templateData',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { recipient: { required: true, type: () => String } };
    }
}
exports.AwsSESSendBulkRecipientsDto = AwsSESSendBulkRecipientsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AwsSESSendBulkRecipientsDto.prototype, "recipient", void 0);
class AwsSESSendBulkDto extends (0, swagger_1.OmitType)(AwsSESSendDto, [
    'recipients',
    'templateData',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { recipients: { required: true, type: () => [require("./aws.ses.dto").AwsSESSendBulkRecipientsDto] } };
    }
}
exports.AwsSESSendBulkDto = AwsSESSendBulkDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        isArray: true,
        type: () => AwsSESSendBulkRecipientsDto,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_transformer_1.Type)(() => AwsSESSendBulkRecipientsDto),
    __metadata("design:type", Array)
], AwsSESSendBulkDto.prototype, "recipients", void 0);
//# sourceMappingURL=aws.ses.dto.js.map