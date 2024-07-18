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
exports.HealthResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class HealthResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => String }, info: { required: true, type: () => Object }, error: { required: true, type: () => Object }, details: { required: true, type: () => Object } };
    }
}
exports.HealthResponseDto = HealthResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 'ok',
    }),
    __metadata("design:type", String)
], HealthResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: {
            awsBucket: {
                status: 'up',
            },
        },
    }),
    __metadata("design:type", Object)
], HealthResponseDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: {},
    }),
    __metadata("design:type", Object)
], HealthResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: {
            awsBucket: {
                status: 'up',
            },
        },
    }),
    __metadata("design:type", Object)
], HealthResponseDto.prototype, "details", void 0);
//# sourceMappingURL=health.response.dto.js.map