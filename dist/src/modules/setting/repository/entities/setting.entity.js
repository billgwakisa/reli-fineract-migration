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
exports.SettingSchema = exports.SettingEntity = exports.SettingTableName = void 0;
const openapi = require("@nestjs/swagger");
const database_mongo_uuid_entity_abstract_1 = require("../../../../common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
const setting_enum_constant_1 = require("../../constants/setting.enum.constant");
exports.SettingTableName = 'Settings';
let SettingEntity = class SettingEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: false, type: () => String }, type: { required: true, enum: require("../../constants/setting.enum.constant").ENUM_SETTING_DATA_TYPE }, value: { required: true, type: () => String } };
    }
};
exports.SettingEntity = SettingEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        index: true,
        unique: true,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], SettingEntity.prototype, "name", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], SettingEntity.prototype, "description", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        type: String,
        enum: setting_enum_constant_1.ENUM_SETTING_DATA_TYPE,
    }),
    __metadata("design:type", String)
], SettingEntity.prototype, "type", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], SettingEntity.prototype, "value", void 0);
exports.SettingEntity = SettingEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.SettingTableName })
], SettingEntity);
exports.SettingSchema = (0, database_decorator_1.DatabaseSchema)(SettingEntity);
//# sourceMappingURL=setting.entity.js.map