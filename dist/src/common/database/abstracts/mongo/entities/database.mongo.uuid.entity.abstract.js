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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMongoUUIDEntityAbstract = void 0;
const database_entity_abstract_1 = require("../../base/database.entity.abstract");
const database_constant_1 = require("../../../constants/database.constant");
const database_decorator_1 = require("../../../decorators/database.decorator");
const uuid_1 = require("uuid");
class DatabaseMongoUUIDEntityAbstract extends database_entity_abstract_1.DatabaseEntityAbstract {
    static { _a = database_constant_1.DATABASE_DELETED_AT_FIELD_NAME, _b = database_constant_1.DATABASE_CREATED_AT_FIELD_NAME, _c = database_constant_1.DATABASE_UPDATED_AT_FIELD_NAME; }
}
exports.DatabaseMongoUUIDEntityAbstract = DatabaseMongoUUIDEntityAbstract;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        type: String,
        default: uuid_1.v4,
    }),
    __metadata("design:type", String)
], DatabaseMongoUUIDEntityAbstract.prototype, "_id", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        index: true,
        type: Date,
    }),
    __metadata("design:type", Date)
], DatabaseMongoUUIDEntityAbstract.prototype, _a, void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        index: 'asc',
        type: Date,
        default: new Date(),
    }),
    __metadata("design:type", Date)
], DatabaseMongoUUIDEntityAbstract.prototype, _b, void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: false,
        index: 'asc',
        type: Date,
        default: new Date(),
    }),
    __metadata("design:type", Date)
], DatabaseMongoUUIDEntityAbstract.prototype, _c, void 0);
//# sourceMappingURL=database.mongo.uuid.entity.abstract.js.map