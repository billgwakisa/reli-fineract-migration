"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ApiKeyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyModule = void 0;
const common_1 = require("@nestjs/common");
const api_key_x_api_key_strategy_1 = require("./guards/x-api-key/strategies/api-key.x-api-key.strategy");
const api_key_repository_module_1 = require("./repository/api-key.repository.module");
const api_key_service_1 = require("./services/api-key.service");
let ApiKeyModule = ApiKeyModule_1 = class ApiKeyModule {
    static forRoot() {
        return {
            module: ApiKeyModule_1,
            providers: [api_key_service_1.ApiKeyService, api_key_x_api_key_strategy_1.ApiKeyXApiKeyStrategy],
            exports: [],
            controllers: [],
            imports: [api_key_repository_module_1.ApiKeyRepositoryModule],
        };
    }
};
exports.ApiKeyModule = ApiKeyModule;
exports.ApiKeyModule = ApiKeyModule = ApiKeyModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [api_key_service_1.ApiKeyService],
        exports: [api_key_service_1.ApiKeyService],
        controllers: [],
        imports: [api_key_repository_module_1.ApiKeyRepositoryModule],
    })
], ApiKeyModule);
//# sourceMappingURL=api-key.module.js.map