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
exports.SettingPrivateController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_key_decorator_1 = require("../../../common/api-key/decorators/api-key.decorator");
const file_constant_1 = require("../../../common/file/constants/file.constant");
const message_service_1 = require("../../../common/message/services/message.service");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const setting_private_doc_1 = require("../docs/setting.private.doc");
const setting_service_1 = require("../services/setting.service");
let SettingPrivateController = class SettingPrivateController {
    constructor(messageService, settingService) {
        this.messageService = messageService;
        this.settingService = settingService;
    }
    async getUserMaxCertificate() {
        const availableLanguage = this.messageService.getAvailableLanguages();
        const currentLanguage = this.messageService.getLanguage();
        const language = {
            language: currentLanguage,
            availableLanguage,
        };
        const tz = await this.settingService.getTimezone();
        const timezoneOffset = await this.settingService.getTimezoneOffset();
        const timezone = {
            timezone: tz,
            timezoneOffset: timezoneOffset,
        };
        const file = {
            sizeInBytes: file_constant_1.FILE_SIZE_IN_BYTES,
        };
        return {
            data: {
                timezone,
                language,
                file,
            },
        };
    }
};
exports.SettingPrivateController = SettingPrivateController;
__decorate([
    (0, setting_private_doc_1.SettingPrivateCoreDoc)(),
    (0, response_decorator_1.Response)('setting.core'),
    (0, api_key_decorator_1.ApiKeyPrivateProtected)(),
    (0, common_1.Get)('/core'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingPrivateController.prototype, "getUserMaxCertificate", null);
exports.SettingPrivateController = SettingPrivateController = __decorate([
    (0, swagger_1.ApiTags)('modules.private.setting'),
    (0, common_1.Controller)({
        version: '1',
        path: '/setting',
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        setting_service_1.SettingService])
], SettingPrivateController);
//# sourceMappingURL=setting.private.controller.js.map