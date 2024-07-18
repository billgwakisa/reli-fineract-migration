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
exports.UserSchema = exports.UserEntity = exports.UserMobileNumberSchema = exports.UserMobileNumberEntity = exports.UserTableName = void 0;
const openapi = require("@nestjs/swagger");
const aws_s3_entity_1 = require("../../../../common/aws/repository/entities/aws.s3.entity");
const database_mongo_uuid_entity_abstract_1 = require("../../../../common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
const country_entity_1 = require("../../../country/repository/entities/country.entity");
const role_entity_1 = require("../../../role/repository/entities/role.entity");
const user_enum_constant_1 = require("../../constants/user.enum.constant");
exports.UserTableName = 'Users';
let UserMobileNumberEntity = class UserMobileNumberEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { country: { required: true, type: () => String }, number: { required: true, type: () => String } };
    }
};
exports.UserMobileNumberEntity = UserMobileNumberEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
        ref: country_entity_1.CountryEntity.name,
    }),
    __metadata("design:type", String)
], UserMobileNumberEntity.prototype, "country", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        trim: true,
        type: String,
        maxlength: 20,
        minlength: 8,
    }),
    __metadata("design:type", String)
], UserMobileNumberEntity.prototype, "number", void 0);
exports.UserMobileNumberEntity = UserMobileNumberEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({
        _id: false,
        timestamps: false,
    })
], UserMobileNumberEntity);
exports.UserMobileNumberSchema = (0, database_decorator_1.DatabaseSchema)(UserMobileNumberEntity);
let UserEntity = class UserEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, familyName: { required: false, type: () => String }, mobileNumber: { required: false, type: () => require("./user.entity").UserMobileNumberEntity }, email: { required: true, type: () => String }, role: { required: true, type: () => String }, password: { required: true, type: () => String }, passwordExpired: { required: true, type: () => Date }, passwordCreated: { required: true, type: () => Date }, passwordAttempt: { required: true, type: () => Number }, signUpDate: { required: true, type: () => Date }, signUpFrom: { required: true, enum: require("../../constants/user.enum.constant").ENUM_USER_SIGN_UP_FROM }, salt: { required: true, type: () => String }, status: { required: true, enum: require("../../constants/user.enum.constant").ENUM_USER_STATUS }, blocked: { required: true, type: () => Boolean }, photo: { required: false, type: () => require("../../../../common/aws/repository/entities/aws.s3.entity").AwsS3Entity }, address: { required: false, type: () => String }, gender: { required: false, enum: require("../../constants/user.enum.constant").ENUM_USER_GENDER }, selfDeletion: { required: false, type: () => Boolean }, country: { required: true, type: () => String } };
    }
};
exports.UserEntity = UserEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        trim: true,
        type: String,
        maxlength: 100,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        trim: true,
        type: String,
        maxlength: 50,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "familyName", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        schema: exports.UserMobileNumberSchema,
    }),
    __metadata("design:type", UserMobileNumberEntity)
], UserEntity.prototype, "mobileNumber", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        unique: true,
        index: true,
        trim: true,
        lowercase: true,
        type: String,
        maxlength: 100,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        ref: role_entity_1.RoleEntity.name,
        index: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: Date,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "passwordExpired", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: Date,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "passwordCreated", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        default: 0,
        type: Number,
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "passwordAttempt", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: Date,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "signUpDate", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        enum: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "signUpFrom", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        default: user_enum_constant_1.ENUM_USER_STATUS.ACTIVE,
        index: true,
        type: String,
        enum: user_enum_constant_1.ENUM_USER_STATUS,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "status", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        default: false,
        index: true,
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "blocked", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        schema: aws_s3_entity_1.AwsS3Schema,
    }),
    __metadata("design:type", aws_s3_entity_1.AwsS3Entity)
], UserEntity.prototype, "photo", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        maxlength: 200,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "address", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        enum: user_enum_constant_1.ENUM_USER_GENDER,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "gender", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "selfDeletion", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
        ref: country_entity_1.CountryEntity.name,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "country", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.UserTableName })
], UserEntity);
exports.UserSchema = (0, database_decorator_1.DatabaseSchema)(UserEntity);
//# sourceMappingURL=user.entity.js.map