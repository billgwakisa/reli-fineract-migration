"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../../common/database/constants/database.constant");
const country_entity_1 = require("./entities/country.entity");
const country_repository_1 = require("./repositories/country.repository");
let CountryRepositoryModule = class CountryRepositoryModule {
};
exports.CountryRepositoryModule = CountryRepositoryModule;
exports.CountryRepositoryModule = CountryRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [country_repository_1.CountryRepository],
        exports: [country_repository_1.CountryRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: country_entity_1.CountryEntity.name,
                    schema: country_entity_1.CountrySchema,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], CountryRepositoryModule);
//# sourceMappingURL=country.repository.module.js.map