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
exports.AwsS3MultipartPartSchema = exports.AwsS3MultipartPartEntity = void 0;
const openapi = require("@nestjs/swagger");
const database_decorator_1 = require("../../../database/decorators/database.decorator");
let AwsS3MultipartPartEntity = class AwsS3MultipartPartEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { eTag: { required: true, type: () => String }, partNumber: { required: true, type: () => Number }, size: { required: true, type: () => Number } };
    }
};
exports.AwsS3MultipartPartEntity = AwsS3MultipartPartEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3MultipartPartEntity.prototype, "eTag", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: Number,
    }),
    __metadata("design:type", Number)
], AwsS3MultipartPartEntity.prototype, "partNumber", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: Number,
    }),
    __metadata("design:type", Number)
], AwsS3MultipartPartEntity.prototype, "size", void 0);
exports.AwsS3MultipartPartEntity = AwsS3MultipartPartEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ timestamps: false, _id: false })
], AwsS3MultipartPartEntity);
exports.AwsS3MultipartPartSchema = (0, database_decorator_1.DatabaseSchema)(AwsS3MultipartPartEntity);
//# sourceMappingURL=aws.s3-multipart-part.entity.js.map