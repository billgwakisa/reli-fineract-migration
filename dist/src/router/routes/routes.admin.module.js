"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesAdminModule = void 0;
const common_1 = require("@nestjs/common");
const api_key_module_1 = require("../../common/api-key/api-key.module");
const api_key_admin_controller_1 = require("../../common/api-key/controllers/api-key.admin.controller");
const auth_module_1 = require("../../common/auth/auth.module");
const pagination_module_1 = require("../../common/pagination/pagination.module");
const country_admin_controller_1 = require("../../modules/country/controllers/country.admin.controller");
const country_module_1 = require("../../modules/country/country.module");
const email_module_1 = require("../../modules/email/email.module");
const role_admin_controller_1 = require("../../modules/role/controllers/role.admin.controller");
const role_module_1 = require("../../modules/role/role.module");
const setting_admin_controller_1 = require("../../modules/setting/controllers/setting.admin.controller");
const setting_module_1 = require("../../modules/setting/setting.module");
const user_admin_controller_1 = require("../../modules/user/controllers/user.admin.controller");
const user_module_1 = require("../../modules/user/user.module");
let RoutesAdminModule = class RoutesAdminModule {
};
exports.RoutesAdminModule = RoutesAdminModule;
exports.RoutesAdminModule = RoutesAdminModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            api_key_admin_controller_1.ApiKeyAdminController,
            setting_admin_controller_1.SettingAdminController,
            role_admin_controller_1.RoleAdminController,
            user_admin_controller_1.UserAdminController,
            country_admin_controller_1.CountryAdminController,
        ],
        providers: [],
        exports: [],
        imports: [
            api_key_module_1.ApiKeyModule,
            pagination_module_1.PaginationModule,
            setting_module_1.SettingModule,
            role_module_1.RoleModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            email_module_1.EmailModule,
            country_module_1.CountryModule,
        ],
    })
], RoutesAdminModule);
//# sourceMappingURL=routes.admin.module.js.map