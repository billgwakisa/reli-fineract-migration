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
exports.UserStateHistorySchema = exports.UserStateHistoryEntity = exports.UserStateHistoryTableName = void 0;
const openapi = require("@nestjs/swagger");
const database_mongo_uuid_entity_abstract_1 = require("../../../../common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
const user_history_enum_constant_1 = require("../../constants/user-history.enum.constant");
const user_entity_1 = require("./user.entity");
exports.UserStateHistoryTableName = 'UserStateHistories';
let UserStateHistoryEntity = class UserStateHistoryEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { user: { required: true, type: () => String }, beforeState: { required: true, enum: require("../../constants/user-history.enum.constant").ENUM_USER_HISTORY_STATE }, afterState: { required: true, enum: require("../../constants/user-history.enum.constant").ENUM_USER_HISTORY_STATE }, by: { required: true, type: () => String } };
    }
};
exports.UserStateHistoryEntity = UserStateHistoryEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        trim: true,
        type: String,
        ref: user_entity_1.UserEntity.name,
    }),
    __metadata("design:type", String)
], UserStateHistoryEntity.prototype, "user", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
        enum: user_history_enum_constant_1.ENUM_USER_HISTORY_STATE,
    }),
    __metadata("design:type", String)
], UserStateHistoryEntity.prototype, "beforeState", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
        enum: user_history_enum_constant_1.ENUM_USER_HISTORY_STATE,
    }),
    __metadata("design:type", String)
], UserStateHistoryEntity.prototype, "afterState", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        trim: true,
        type: String,
        ref: user_entity_1.UserEntity.name,
    }),
    __metadata("design:type", String)
], UserStateHistoryEntity.prototype, "by", void 0);
exports.UserStateHistoryEntity = UserStateHistoryEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.UserStateHistoryTableName })
], UserStateHistoryEntity);
exports.UserStateHistorySchema = (0, database_decorator_1.DatabaseSchema)(UserStateHistoryEntity);
//# sourceMappingURL=user-state-history.entity.js.map