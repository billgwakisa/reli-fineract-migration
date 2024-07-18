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
exports.ApiKeyCreateResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const api_key_get_response_dto_1 = require("./api-key.get.response.dto");
class ApiKeyCreateResponseDto extends (0, swagger_1.PickType)(api_key_get_response_dto_1.ApiKeyGetResponseDto, [
    'key',
    '_id',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { secret: { required: true, type: () => String } };
    }
}
exports.ApiKeyCreateResponseDto = ApiKeyCreateResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Secret key of ApiKey, only show at once',
        example: true,
        required: true,
    }),
    __metadata("design:type", String)
], ApiKeyCreateResponseDto.prototype, "secret", void 0);
//# sourceMappingURL=api-key.create.dto.js.map