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
exports.AwsS3Dto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class AwsS3Dto {
    static _OPENAPI_METADATA_FACTORY() {
        return { bucket: { required: true, type: () => String }, path: { required: true, type: () => String }, pathWithFilename: { required: true, type: () => String }, filename: { required: true, type: () => String }, completedUrl: { required: true, type: () => String }, baseUrl: { required: true, type: () => String }, mime: { required: true, type: () => String }, duration: { required: false, type: () => Number }, size: { required: true, type: () => Number } };
    }
}
exports.AwsS3Dto = AwsS3Dto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Dto.prototype, "bucket", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.system.directoryPath(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Dto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.system.filePath(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Dto.prototype, "pathWithFilename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.system.fileName(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Dto.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: `${faker_1.faker.internet.url()}/${faker_1.faker.system.filePath()}`,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Dto.prototype, "completedUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.internet.url(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Dto.prototype, "baseUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.system.mimeType(),
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], AwsS3Dto.prototype, "mime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Number)
], AwsS3Dto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Number)
], AwsS3Dto.prototype, "size", void 0);
//# sourceMappingURL=aws.s3.dto.js.map