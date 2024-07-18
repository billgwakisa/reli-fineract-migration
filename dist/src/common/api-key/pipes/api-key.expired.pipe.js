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
exports.ApiKeyNotExpiredPipe = void 0;
const common_1 = require("@nestjs/common");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const api_key_status_code_constant_1 = require("../constants/api-key.status-code.constant");
let ApiKeyNotExpiredPipe = class ApiKeyNotExpiredPipe {
    constructor(helperDateService) {
        this.helperDateService = helperDateService;
    }
    async transform(value) {
        const today = this.helperDateService.create();
        if (value.startDate && value.endDate && today > value.endDate) {
            throw new common_1.BadRequestException({
                statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.EXPIRED_ERROR,
                message: 'apiKey.error.expired',
            });
        }
        return value;
    }
};
exports.ApiKeyNotExpiredPipe = ApiKeyNotExpiredPipe;
exports.ApiKeyNotExpiredPipe = ApiKeyNotExpiredPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_date_service_1.HelperDateService])
], ApiKeyNotExpiredPipe);
//# sourceMappingURL=api-key.expired.pipe.js.map