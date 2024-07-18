"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesPrivateModule = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const pagination_module_1 = require("../../common/pagination/pagination.module");
const country_private_controller_1 = require("../../modules/country/controllers/country.private.controller");
const country_module_1 = require("../../modules/country/country.module");
const health_private_controller_1 = require("../../modules/health/controllers/health.private.controller");
const health_module_1 = require("../../modules/health/health.module");
const setting_private_controller_1 = require("../../modules/setting/controllers/setting.private.controller");
const setting_module_1 = require("../../modules/setting/setting.module");
let RoutesPrivateModule = class RoutesPrivateModule {
};
exports.RoutesPrivateModule = RoutesPrivateModule;
exports.RoutesPrivateModule = RoutesPrivateModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            health_private_controller_1.HealthPrivateController,
            setting_private_controller_1.SettingPrivateController,
            country_private_controller_1.CountryPrivateController,
        ],
        providers: [],
        exports: [],
        imports: [
            health_module_1.HealthModule,
            terminus_1.TerminusModule,
            pagination_module_1.PaginationModule,
            setting_module_1.SettingModule,
            country_module_1.CountryModule,
        ],
    })
], RoutesPrivateModule);
//# sourceMappingURL=routes.private.module.js.map