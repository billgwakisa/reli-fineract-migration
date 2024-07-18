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
exports.AwsS3Schema = exports.AwsS3Entity = void 0;
const openapi = require("@nestjs/swagger");
const database_decorator_1 = require("../../../database/decorators/database.decorator");
let AwsS3Entity = class AwsS3Entity {
    static _OPENAPI_METADATA_FACTORY() {
        return { bucket: { required: true, type: () => String }, path: { required: true, type: () => String }, pathWithFilename: { required: true, type: () => String }, filename: { required: true, type: () => String }, completedUrl: { required: true, type: () => String }, baseUrl: { required: true, type: () => String }, mime: { required: true, type: () => String }, duration: { required: false, type: () => Number }, size: { required: true, type: () => Number } };
    }
};
exports.AwsS3Entity = AwsS3Entity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3Entity.prototype, "bucket", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3Entity.prototype, "path", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3Entity.prototype, "pathWithFilename", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3Entity.prototype, "filename", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3Entity.prototype, "completedUrl", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3Entity.prototype, "baseUrl", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], AwsS3Entity.prototype, "mime", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        type: Number,
    }),
    __metadata("design:type", Number)
], AwsS3Entity.prototype, "duration", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: Number,
    }),
    __metadata("design:type", Number)
], AwsS3Entity.prototype, "size", void 0);
exports.AwsS3Entity = AwsS3Entity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ timestamps: false, _id: false })
], AwsS3Entity);
exports.AwsS3Schema = (0, database_decorator_1.DatabaseSchema)(AwsS3Entity);
//# sourceMappingURL=aws.s3.entity.js.map