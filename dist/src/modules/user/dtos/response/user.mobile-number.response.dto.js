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
exports.UserMobileNumberResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const country_get_response_dto_1 = require("../../../country/dtos/response/country.get.response.dto");
class UserMobileNumberResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, country: { required: true, type: () => require("../../../country/dtos/response/country.get.response.dto").CountryGetResponseDto } };
    }
}
exports.UserMobileNumberResponseDto = UserMobileNumberResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: `8${faker_1.faker.string.fromCharacters('1234567890', {
            min: 7,
            max: 11,
        })}`,
        required: true,
        maxLength: 20,
        minLength: 8,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserMobileNumberResponseDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        type: country_get_response_dto_1.CountryGetResponseDto,
    }),
    (0, class_transformer_1.Type)(() => country_get_response_dto_1.CountryGetResponseDto),
    __metadata("design:type", country_get_response_dto_1.CountryGetResponseDto)
], UserMobileNumberResponseDto.prototype, "country", void 0);
//# sourceMappingURL=user.mobile-number.response.dto.js.map