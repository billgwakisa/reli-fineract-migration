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
exports.ApiKeyPayloadDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const database_id_response_dto_1 = require("../../database/dtos/response/database.id.response.dto");
const api_key_enum_constant_1 = require("../constants/api-key.enum.constant");
class ApiKeyPayloadDto extends database_id_response_dto_1.DatabaseIdResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, type: { required: true, enum: require("../constants/api-key.enum.constant").ENUM_API_KEY_TYPE }, key: { required: true, type: () => String } };
    }
}
exports.ApiKeyPayloadDto = ApiKeyPayloadDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alias name of api key',
        example: faker_1.faker.person.jobTitle(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], ApiKeyPayloadDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type of api key',
        example: api_key_enum_constant_1.ENUM_API_KEY_TYPE.PUBLIC,
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], ApiKeyPayloadDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique key of api key',
        example: faker_1.faker.string.alpha(15),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], ApiKeyPayloadDto.prototype, "key", void 0);
//# sourceMappingURL=api-key.payload.dto.js.map