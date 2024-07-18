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
exports.CountryCreateRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CountryCreateRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 1, maxLength: 100 }, alpha2Code: { required: true, type: () => String, minLength: 2, maxLength: 2 }, alpha3Code: { required: true, type: () => String, minLength: 3, maxLength: 3 }, numericCode: { required: true, type: () => String, minLength: 1, maxLength: 3 }, fipsCode: { required: true, type: () => String, minLength: 2, maxLength: 2 }, phoneCode: { required: true, type: () => [String], maxLength: 4 }, continent: { required: true, type: () => String }, timeZone: { required: true, type: () => String }, domain: { required: false, type: () => String } };
    }
}
exports.CountryCreateRequestDto = CountryCreateRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country name',
        example: faker_1.faker.location.country(),
        maxLength: 100,
        minLength: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CountryCreateRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country code, Alpha 2 code version',
        example: faker_1.faker.location.countryCode('alpha-2'),
        maxLength: 2,
        minLength: 2,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2),
    (0, class_validator_1.MinLength)(2),
    (0, class_transformer_1.Transform)(({ value }) => value.toUpperCase()),
    __metadata("design:type", String)
], CountryCreateRequestDto.prototype, "alpha2Code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country code, Alpha 3 code version',
        example: faker_1.faker.location.countryCode('alpha-3'),
        maxLength: 3,
        minLength: 3,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(3),
    (0, class_validator_1.MinLength)(3),
    (0, class_transformer_1.Transform)(({ value }) => value.toUpperCase()),
    __metadata("design:type", String)
], CountryCreateRequestDto.prototype, "alpha3Code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country code, Numeric code version',
        example: faker_1.faker.location.countryCode('numeric'),
        maxLength: 3,
        minLength: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(3),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CountryCreateRequestDto.prototype, "numericCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country code, FIPS version',
        example: faker_1.faker.location.countryCode('alpha-2'),
        maxLength: 2,
        minLength: 2,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CountryCreateRequestDto.prototype, "fipsCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country phone code',
        example: [faker_1.faker.helpers.arrayElement(['62', '65'])],
        maxLength: 4,
        isArray: true,
        default: [],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.MaxLength)(4, { each: true }),
    __metadata("design:type", Array)
], CountryCreateRequestDto.prototype, "phoneCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: faker_1.faker.location.country(),
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CountryCreateRequestDto.prototype, "continent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: faker_1.faker.location.timeZone(),
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CountryCreateRequestDto.prototype, "timeZone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Top level domain',
        example: faker_1.faker.internet.domainSuffix(),
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CountryCreateRequestDto.prototype, "domain", void 0);
//# sourceMappingURL=country.create.request.dto.js.map