"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyInactivePipe = exports.ApiKeyActivePipe = void 0;
const common_1 = require("@nestjs/common");
const api_key_status_code_constant_1 = require("../constants/api-key.status-code.constant");
let ApiKeyActivePipe = class ApiKeyActivePipe {
    async transform(value) {
        if (!value.isActive) {
            throw new common_1.BadRequestException({
                statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
                message: 'apiKey.error.isActiveInvalid',
            });
        }
        return value;
    }
};
exports.ApiKeyActivePipe = ApiKeyActivePipe;
exports.ApiKeyActivePipe = ApiKeyActivePipe = __decorate([
    (0, common_1.Injectable)()
], ApiKeyActivePipe);
let ApiKeyInactivePipe = class ApiKeyInactivePipe {
    async transform(value) {
        if (value.isActive) {
            throw new common_1.BadRequestException({
                statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
                message: 'apiKey.error.isActiveInvalid',
            });
        }
        return value;
    }
};
exports.ApiKeyInactivePipe = ApiKeyInactivePipe;
exports.ApiKeyInactivePipe = ApiKeyInactivePipe = __decorate([
    (0, common_1.Injectable)()
], ApiKeyInactivePipe);
//# sourceMappingURL=api-key.is-active.pipe.js.map