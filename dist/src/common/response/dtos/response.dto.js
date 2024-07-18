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
exports.ResponseDto = exports.ResponseMetadataDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class ResponseMetadataDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { language: { required: true, type: () => String }, timestamp: { required: true, type: () => Number }, timezone: { required: true, type: () => String }, path: { required: true, type: () => String }, version: { required: true, type: () => String }, repoVersion: { required: true, type: () => String } };
    }
}
exports.ResponseMetadataDto = ResponseMetadataDto;
class ResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { statusCode: { required: true, type: () => Number }, message: { required: true, type: () => String }, _metadata: { required: true, type: () => require("./response.dto").ResponseMetadataDto } };
    }
}
exports.ResponseDto = ResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'statusCode',
        type: 'number',
        required: true,
        nullable: false,
        description: 'return specific status code for every endpoints',
        example: 200,
    }),
    __metadata("design:type", Number)
], ResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'message',
        required: true,
        nullable: false,
        description: 'Message base on language',
        type: 'string',
        example: 'message endpoint',
    }),
    __metadata("design:type", String)
], ResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: '_metadata',
        required: true,
        nullable: false,
        description: 'Contain metadata about API',
        type: () => ResponseMetadataDto,
        example: {
            language: 'en',
            timestamp: 1660190937231,
            timezone: 'Asia/Dubai',
            path: '/api/v1/test/hello',
            version: '1',
            repoVersion: '1.0.0',
        },
    }),
    __metadata("design:type", ResponseMetadataDto)
], ResponseDto.prototype, "_metadata", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Object)
], ResponseDto.prototype, "data", void 0);
//# sourceMappingURL=response.dto.js.map