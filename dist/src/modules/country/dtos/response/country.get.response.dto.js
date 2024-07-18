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
exports.CountryGetResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const aws_s3_dto_1 = require("../../../../common/aws/dtos/aws.s3.dto");
const database_id_response_dto_1 = require("../../../../common/database/dtos/response/database.id.response.dto");
class CountryGetResponseDto extends database_id_response_dto_1.DatabaseIdResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, alpha2Code: { required: true, type: () => String }, alpha3Code: { required: true, type: () => String }, numericCode: { required: true, type: () => String }, fipsCode: { required: true, type: () => String }, phoneCode: { required: true, type: () => [String] }, continent: { required: true, type: () => String }, timeZone: { required: true, type: () => String }, domain: { required: false, type: () => String }, image: { required: false, type: () => require("../../../../common/aws/dtos/aws.s3.dto").AwsS3Dto }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.CountryGetResponseDto = CountryGetResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country name',
        example: faker_1.faker.location.country(),
        maxLength: 100,
        minLength: 1,
    }),
    __metadata("design:type", String)
], CountryGetResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country code, Alpha 2 code version',
        example: faker_1.faker.location.countryCode('alpha-2'),
        maxLength: 2,
        minLength: 2,
    }),
    __metadata("design:type", String)
], CountryGetResponseDto.prototype, "alpha2Code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country code, Alpha 3 code version',
        example: faker_1.faker.location.countryCode('alpha-3'),
        maxLength: 3,
        minLength: 3,
    }),
    __metadata("design:type", String)
], CountryGetResponseDto.prototype, "alpha3Code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country code, Numeric code version',
        example: faker_1.faker.location.countryCode('numeric'),
        maxLength: 3,
        minLength: 3,
    }),
    __metadata("design:type", String)
], CountryGetResponseDto.prototype, "numericCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country code, FIPS version',
        example: faker_1.faker.location.countryCode('alpha-2'),
        maxLength: 2,
        minLength: 2,
    }),
    __metadata("design:type", String)
], CountryGetResponseDto.prototype, "fipsCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
        description: 'Country phone code',
        example: [faker_1.faker.helpers.arrayElement(['62', '65'])],
        maxLength: 4,
        minLength: 4,
        isArray: true,
        default: [],
    }),
    __metadata("design:type", Array)
], CountryGetResponseDto.prototype, "phoneCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: faker_1.faker.location.country(),
    }),
    __metadata("design:type", String)
], CountryGetResponseDto.prototype, "continent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        example: faker_1.faker.location.timeZone(),
    }),
    __metadata("design:type", String)
], CountryGetResponseDto.prototype, "timeZone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Top level domain',
        example: faker_1.faker.internet.domainSuffix(),
    }),
    __metadata("design:type", String)
], CountryGetResponseDto.prototype, "domain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => aws_s3_dto_1.AwsS3Dto,
    }),
    __metadata("design:type", aws_s3_dto_1.AwsS3Dto)
], CountryGetResponseDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], CountryGetResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], CountryGetResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], CountryGetResponseDto.prototype, "deletedAt", void 0);
//# sourceMappingURL=country.get.response.dto.js.map