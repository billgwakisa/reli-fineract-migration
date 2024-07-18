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
exports.AwsS3MultipartDto = exports.AwsS3MultipartPartDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const aws_s3_dto_1 = require("./aws.s3.dto");
class AwsS3MultipartPartDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { eTag: { required: true, type: () => String }, partNumber: { required: true, type: () => Number }, size: { required: true, type: () => Number } };
    }
}
exports.AwsS3MultipartPartDto = AwsS3MultipartPartDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.string.alpha({ length: 10, casing: 'upper' }),
        description: 'ETag from aws after init multipart',
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3MultipartPartDto.prototype, "eTag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 1,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AwsS3MultipartPartDto.prototype, "partNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 1,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AwsS3MultipartPartDto.prototype, "size", void 0);
class AwsS3MultipartDto extends aws_s3_dto_1.AwsS3Dto {
    static _OPENAPI_METADATA_FACTORY() {
        return { uploadId: { required: true, type: () => String }, lastPartNumber: { required: true, type: () => Number }, maxPartNumber: { required: true, type: () => Number }, parts: { required: true, type: () => [require("./aws.s3-multipart.dto").AwsS3MultipartPartDto] } };
    }
}
exports.AwsS3MultipartDto = AwsS3MultipartDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.string.alpha({ length: 20, casing: 'upper' }),
        description: 'Upload id from aws after init multipart',
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3MultipartDto.prototype, "uploadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 1,
        description: 'Last part number uploaded',
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AwsS3MultipartDto.prototype, "lastPartNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: 200,
        description: 'Max part number, or length of the chunk',
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AwsS3MultipartDto.prototype, "maxPartNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        oneOf: [
            {
                $ref: (0, swagger_1.getSchemaPath)(AwsS3MultipartPartDto),
                type: 'array',
            },
        ],
    }),
    (0, class_transformer_1.Type)(() => AwsS3MultipartPartDto),
    __metadata("design:type", Array)
], AwsS3MultipartDto.prototype, "parts", void 0);
//# sourceMappingURL=aws.s3-multipart.dto.js.map