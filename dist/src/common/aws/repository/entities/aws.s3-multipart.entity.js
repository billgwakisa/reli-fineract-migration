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
exports.AwsS3MultipartSchema = exports.AwsS3MultipartEntity = void 0;
const openapi = require("@nestjs/swagger");
const aws_s3_multipart_part_entity_1 = require("./aws.s3-multipart-part.entity");
const database_decorator_1 = require("../../../database/decorators/database.decorator");
let AwsS3MultipartEntity = class AwsS3MultipartEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { uploadId: { required: true, type: () => String }, lastPartNumber: { required: true, type: () => Number }, maxPartNumber: { required: true, type: () => Number }, parts: { required: true, type: () => [require("./aws.s3-multipart-part.entity").AwsS3MultipartPartEntity] } };
    }
};
exports.AwsS3MultipartEntity = AwsS3MultipartEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3MultipartEntity.prototype, "uploadId", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: Number,
    }),
    __metadata("design:type", Number)
], AwsS3MultipartEntity.prototype, "lastPartNumber", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: Number,
    }),
    __metadata("design:type", Number)
], AwsS3MultipartEntity.prototype, "maxPartNumber", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        nullable: false,
        default: [],
        schema: aws_s3_multipart_part_entity_1.AwsS3MultipartPartSchema,
    }),
    __metadata("design:type", Array)
], AwsS3MultipartEntity.prototype, "parts", void 0);
exports.AwsS3MultipartEntity = AwsS3MultipartEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ timestamps: false, _id: false })
], AwsS3MultipartEntity);
exports.AwsS3MultipartSchema = (0, database_decorator_1.DatabaseSchema)(AwsS3MultipartEntity);
//# sourceMappingURL=aws.s3-multipart.entity.js.map