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
exports.CountrySchema = exports.CountryEntity = exports.CountryTableName = void 0;
const openapi = require("@nestjs/swagger");
const aws_s3_dto_1 = require("../../../../common/aws/dtos/aws.s3.dto");
const aws_s3_entity_1 = require("../../../../common/aws/repository/entities/aws.s3.entity");
const database_mongo_uuid_entity_abstract_1 = require("../../../../common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
exports.CountryTableName = 'Countries';
let CountryEntity = class CountryEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, alpha2Code: { required: true, type: () => String }, alpha3Code: { required: true, type: () => String }, numericCode: { required: true, type: () => String }, fipsCode: { required: true, type: () => String }, phoneCode: { required: true, type: () => [String] }, continent: { required: true, type: () => String }, timeZone: { required: true, type: () => String }, domain: { required: false, type: () => String }, image: { required: false, type: () => require("../../../../common/aws/dtos/aws.s3.dto").AwsS3Dto }, isActive: { required: true, type: () => Boolean } };
    }
};
exports.CountryEntity = CountryEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        maxlength: 100,
    }),
    __metadata("design:type", String)
], CountryEntity.prototype, "name", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        unique: true,
        trim: true,
        maxlength: 2,
        minlength: 2,
        uppercase: true,
    }),
    __metadata("design:type", String)
], CountryEntity.prototype, "alpha2Code", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        unique: true,
        trim: true,
        maxlength: 3,
        minlength: 3,
        uppercase: true,
    }),
    __metadata("design:type", String)
], CountryEntity.prototype, "alpha3Code", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        unique: true,
        trim: true,
        maxlength: 3,
        minlength: 1,
    }),
    __metadata("design:type", String)
], CountryEntity.prototype, "numericCode", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        unique: true,
        trim: true,
        maxlength: 2,
        minlength: 2,
        uppercase: true,
    }),
    __metadata("design:type", String)
], CountryEntity.prototype, "fipsCode", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        default: [],
        type: [{ type: String, index: true, unique: true, trim: true }],
        maxlength: 4,
    }),
    __metadata("design:type", Array)
], CountryEntity.prototype, "phoneCode", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
    }),
    __metadata("design:type", String)
], CountryEntity.prototype, "continent", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
    }),
    __metadata("design:type", String)
], CountryEntity.prototype, "timeZone", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
    }),
    __metadata("design:type", String)
], CountryEntity.prototype, "domain", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        schema: aws_s3_entity_1.AwsS3Schema,
    }),
    __metadata("design:type", aws_s3_dto_1.AwsS3Dto)
], CountryEntity.prototype, "image", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        default: true,
    }),
    __metadata("design:type", Boolean)
], CountryEntity.prototype, "isActive", void 0);
exports.CountryEntity = CountryEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.CountryTableName })
], CountryEntity);
exports.CountrySchema = (0, database_decorator_1.DatabaseSchema)(CountryEntity);
//# sourceMappingURL=country.entity.js.map