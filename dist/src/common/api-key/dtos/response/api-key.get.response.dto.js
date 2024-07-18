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
exports.ApiKeyGetResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_key_payload_dto_1 = require("../api-key.payload.dto");
class ApiKeyGetResponseDto extends api_key_payload_dto_1.ApiKeyPayloadDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { isActive: { required: true, type: () => Boolean }, startDate: { required: false, type: () => Date }, endDate: { required: false, type: () => Date }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.ApiKeyGetResponseDto = ApiKeyGetResponseDto;
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], ApiKeyGetResponseDto.prototype, "hash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active flag of api key',
        example: true,
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], ApiKeyGetResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Api Key start date',
        example: faker_1.faker.date.past(),
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Date)
], ApiKeyGetResponseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Api Key end date',
        example: faker_1.faker.date.future(),
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Date)
], ApiKeyGetResponseDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], ApiKeyGetResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], ApiKeyGetResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], ApiKeyGetResponseDto.prototype, "deletedAt", void 0);
//# sourceMappingURL=api-key.get.response.dto.js.map