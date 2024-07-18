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
exports.SettingParsePipe = void 0;
const common_1 = require("@nestjs/common");
const setting_status_code_constant_1 = require("../constants/setting.status-code.constant");
const setting_service_1 = require("../services/setting.service");
let SettingParsePipe = class SettingParsePipe {
    constructor(settingService) {
        this.settingService = settingService;
    }
    async transform(value) {
        const setting = await this.settingService.findOneById(value);
        if (!setting) {
            throw new common_1.NotFoundException({
                statusCode: setting_status_code_constant_1.ENUM_SETTING_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'setting.error.notFound',
            });
        }
        return setting;
    }
};
exports.SettingParsePipe = SettingParsePipe;
exports.SettingParsePipe = SettingParsePipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], SettingParsePipe);
//# sourceMappingURL=setting.parse.pipe.js.map