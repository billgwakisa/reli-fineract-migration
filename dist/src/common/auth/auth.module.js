"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_jwt_access_strategy_1 = require("./guards/jwt/strategies/auth.jwt.access.strategy");
const auth_jwt_refresh_strategy_1 = require("./guards/jwt/strategies/auth.jwt.refresh.strategy");
const auth_service_1 = require("./services/auth.service");
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        return {
            module: AuthModule_1,
            providers: [auth_jwt_access_strategy_1.AuthJwtAccessStrategy, auth_jwt_refresh_strategy_1.AuthJwtRefreshStrategy],
            exports: [],
            controllers: [],
            imports: [],
        };
    }
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService],
        exports: [auth_service_1.AuthService],
        controllers: [],
        imports: [],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map