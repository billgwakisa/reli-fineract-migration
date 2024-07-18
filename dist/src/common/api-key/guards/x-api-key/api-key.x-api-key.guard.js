"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyXApiKeyGuard = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const api_key_status_code_constant_1 = require("../../constants/api-key.status-code.constant");
let ApiKeyXApiKeyGuard = class ApiKeyXApiKeyGuard extends (0, passport_1.AuthGuard)('x-api-key') {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, apiKey, info) {
        if (!apiKey || info?.message === 'Missing Api Key') {
            throw new common_1.UnauthorizedException({
                statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_REQUIRED_ERROR,
                message: 'apiKey.error.xApiKey.required',
            });
        }
        else if (err) {
            const statusCode = Number.parseInt(err.message);
            if (statusCode ===
                api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_NOT_FOUND_ERROR) {
                throw new common_1.ForbiddenException({
                    statusCode,
                    message: 'apiKey.error.xApiKey.notFound',
                });
            }
            else if (statusCode ===
                api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_INACTIVE_ERROR) {
                throw new common_1.ForbiddenException({
                    statusCode,
                    message: 'apiKey.error.xApiKey.inactive',
                });
            }
            else if (statusCode ===
                api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_EXPIRED_ERROR) {
                throw new common_1.ForbiddenException({
                    statusCode,
                    message: 'apiKey.error.xApiKey.expired',
                });
            }
            throw new common_1.UnauthorizedException({
                statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_INVALID_ERROR,
                message: 'apiKey.error.xApiKey.invalid',
            });
        }
        return apiKey;
    }
};
exports.ApiKeyXApiKeyGuard = ApiKeyXApiKeyGuard;
exports.ApiKeyXApiKeyGuard = ApiKeyXApiKeyGuard = __decorate([
    (0, common_1.Injectable)()
], ApiKeyXApiKeyGuard);
//# sourceMappingURL=api-key.x-api-key.guard.js.map