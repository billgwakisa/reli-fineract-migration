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
exports.LoanImportsSchema = exports.LoanImportEntity = exports.LoanImportsTableName = void 0;
const openapi = require("@nestjs/swagger");
const database_mongo_uuid_entity_abstract_1 = require("../../../../common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
exports.LoanImportsTableName = 'LoanImports';
let LoanImportEntity = class LoanImportEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => String }, resourceId: { required: true, type: () => Number }, response: { required: true, type: () => String }, message: { required: true, type: () => String } };
    }
};
exports.LoanImportEntity = LoanImportEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)(),
    __metadata("design:type", String)
], LoanImportEntity.prototype, "status", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)(),
    __metadata("design:type", Number)
], LoanImportEntity.prototype, "resourceId", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)(),
    __metadata("design:type", String)
], LoanImportEntity.prototype, "response", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)(),
    __metadata("design:type", String)
], LoanImportEntity.prototype, "message", void 0);
exports.LoanImportEntity = LoanImportEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.LoanImportsTableName })
], LoanImportEntity);
exports.LoanImportsSchema = (0, database_decorator_1.DatabaseSchema)(LoanImportEntity);
//# sourceMappingURL=loanimport.entity.js.map