"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanImportRepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../../common/database/constants/database.constant");
const loanimport_entity_1 = require("./entities/loanimport.entity");
const loanimport_repository_1 = require("./repositories/loanimport.repository");
let LoanImportRepositoryModule = class LoanImportRepositoryModule {
};
exports.LoanImportRepositoryModule = LoanImportRepositoryModule;
exports.LoanImportRepositoryModule = LoanImportRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [loanimport_repository_1.LoanImportRepository],
        exports: [loanimport_repository_1.LoanImportRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: loanimport_entity_1.LoanImportEntity.name,
                    schema: loanimport_entity_1.LoanImportsSchema,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], LoanImportRepositoryModule);
//# sourceMappingURL=loanimport.repository.module.js.map