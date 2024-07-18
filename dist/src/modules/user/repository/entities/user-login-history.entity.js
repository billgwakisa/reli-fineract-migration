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
exports.UserLoginHistorySchema = exports.UserLoginHistoryEntity = exports.UserLoginHistoryTableName = void 0;
const openapi = require("@nestjs/swagger");
const database_mongo_uuid_entity_abstract_1 = require("../../../../common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
const user_entity_1 = require("./user.entity");
exports.UserLoginHistoryTableName = 'UserLoginHistories';
let UserLoginHistoryEntity = class UserLoginHistoryEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { user: { required: true, type: () => String }, ip: { required: true, type: () => String }, hostname: { required: true, type: () => String }, protocol: { required: true, type: () => String }, originalUrl: { required: true, type: () => String }, method: { required: true, type: () => String }, userAgent: { required: false, type: () => String }, xForwardedFor: { required: false, type: () => String }, xForwardedHost: { required: false, type: () => String }, xForwardedPorto: { required: false, type: () => String } };
    }
};
exports.UserLoginHistoryEntity = UserLoginHistoryEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        trim: true,
        type: String,
        ref: user_entity_1.UserEntity.name,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "user", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "ip", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "hostname", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "protocol", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "originalUrl", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "method", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "userAgent", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "xForwardedFor", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "xForwardedHost", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], UserLoginHistoryEntity.prototype, "xForwardedPorto", void 0);
exports.UserLoginHistoryEntity = UserLoginHistoryEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.UserLoginHistoryTableName })
], UserLoginHistoryEntity);
exports.UserLoginHistorySchema = (0, database_decorator_1.DatabaseSchema)(UserLoginHistoryEntity);
//# sourceMappingURL=user-login-history.entity.js.map