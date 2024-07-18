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
exports.HelloResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class HelloResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { date: { required: true, type: () => Date }, format: { required: true, type: () => String }, timestamp: { required: true, type: () => Number } };
    }
}
exports.HelloResponseDto = HelloResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.date.recent(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", Date)
], HelloResponseDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.date.recent(),
    }),
    __metadata("design:type", String)
], HelloResponseDto.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 1660190937231,
    }),
    __metadata("design:type", Number)
], HelloResponseDto.prototype, "timestamp", void 0);
//# sourceMappingURL=hello.response.dto.js.map