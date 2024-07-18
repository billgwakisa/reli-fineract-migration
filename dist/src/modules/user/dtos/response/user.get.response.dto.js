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
exports.UserGetResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const aws_s3_dto_1 = require("../../../../common/aws/dtos/aws.s3.dto");
const database_id_response_dto_1 = require("../../../../common/database/dtos/response/database.id.response.dto");
const user_enum_constant_1 = require("../../constants/user.enum.constant");
const user_update_mobile_number_request_dto_1 = require("../request/user.update-mobile-number.request.dto");
class UserGetResponseDto extends database_id_response_dto_1.DatabaseIdResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, familyName: { required: false, type: () => String }, mobileNumber: { required: false, type: () => require("../request/user.update-mobile-number.request.dto").UserUpdateMobileNumberRequestDto }, email: { required: true, type: () => String }, role: { required: true, type: () => String }, passwordExpired: { required: true, type: () => Date }, passwordCreated: { required: true, type: () => Date }, signUpDate: { required: true, type: () => Date }, signUpFrom: { required: true, enum: require("../../constants/user.enum.constant").ENUM_USER_SIGN_UP_FROM }, status: { required: true, enum: require("../../constants/user.enum.constant").ENUM_USER_STATUS }, blocked: { required: true, type: () => Boolean }, photo: { required: false, type: () => require("../../../../common/aws/dtos/aws.s3.dto").AwsS3Dto }, address: { required: false, type: () => String }, gender: { required: false, enum: require("../../constants/user.enum.constant").ENUM_USER_GENDER }, country: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.UserGetResponseDto = UserGetResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        maxLength: 100,
        minLength: 1,
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        maxLength: 50,
        minLength: 1,
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "familyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => user_update_mobile_number_request_dto_1.UserUpdateMobileNumberRequestDto,
    }),
    (0, class_transformer_1.Type)(() => user_update_mobile_number_request_dto_1.UserUpdateMobileNumberRequestDto),
    __metadata("design:type", user_update_mobile_number_request_dto_1.UserUpdateMobileNumberRequestDto)
], UserGetResponseDto.prototype, "mobileNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.internet.email(),
        maxLength: 100,
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.string.uuid(),
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.date.future(),
    }),
    __metadata("design:type", Date)
], UserGetResponseDto.prototype, "passwordExpired", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.date.past(),
    }),
    __metadata("design:type", Date)
], UserGetResponseDto.prototype, "passwordCreated", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], UserGetResponseDto.prototype, "passwordAttempt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.date.recent(),
    }),
    __metadata("design:type", Date)
], UserGetResponseDto.prototype, "signUpDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.ADMIN,
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "signUpFrom", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "salt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: user_enum_constant_1.ENUM_USER_STATUS.ACTIVE,
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: false,
    }),
    __metadata("design:type", Boolean)
], UserGetResponseDto.prototype, "blocked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: true,
        required: false,
        type: () => aws_s3_dto_1.AwsS3Dto,
        oneOf: [{ $ref: (0, swagger_1.getSchemaPath)(aws_s3_dto_1.AwsS3Dto) }],
    }),
    (0, class_transformer_1.Type)(() => aws_s3_dto_1.AwsS3Dto),
    __metadata("design:type", aws_s3_dto_1.AwsS3Dto)
], UserGetResponseDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: user_enum_constant_1.ENUM_USER_GENDER.MALE,
        enum: user_enum_constant_1.ENUM_USER_GENDER,
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.string.uuid(),
        required: true,
    }),
    __metadata("design:type", String)
], UserGetResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], UserGetResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], UserGetResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserGetResponseDto.prototype, "deletedAt", void 0);
//# sourceMappingURL=user.get.response.dto.js.map