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
var AppValidationImportFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppValidationImportFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const file_import_exception_1 = require("../../common/file/exceptions/file.import.exception");
const helper_date_service_1 = require("../../common/helper/services/helper.date.service");
const message_service_1 = require("../../common/message/services/message.service");
let AppValidationImportFilter = AppValidationImportFilter_1 = class AppValidationImportFilter {
    constructor(messageService, configService, helperDateService) {
        this.messageService = messageService;
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.logger = new common_1.Logger(AppValidationImportFilter_1.name);
        this.debug = this.configService.get('app.debug');
    }
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (this.debug) {
            this.logger.error(exception);
        }
        const responseException = exception.getResponse();
        const statusHttp = exception.getStatus();
        const statusCode = responseException.statusCode;
        const xLanguage = request.__language ?? this.messageService.getLanguage();
        const xTimestamp = this.helperDateService.createTimestamp();
        const xTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const xVersion = request.__version ??
            this.configService.get('app.urlVersion.version');
        const xRepoVersion = this.configService.get('app.repoVersion');
        const metadata = {
            language: xLanguage,
            timestamp: xTimestamp,
            timezone: xTimezone,
            path: request.path,
            version: xVersion,
            repoVersion: xRepoVersion,
        };
        const message = this.messageService.setMessage(responseException.message, {
            customLanguage: xLanguage,
        });
        const errors = this.messageService.setValidationImportMessage(responseException.errors, {
            customLanguage: xLanguage,
        });
        const responseBody = {
            statusCode,
            message,
            errors,
            _metadata: metadata,
        };
        response
            .setHeader('x-custom-lang', xLanguage)
            .setHeader('x-timestamp', xTimestamp)
            .setHeader('x-timezone', xTimezone)
            .setHeader('x-version', xVersion)
            .setHeader('x-repo-version', xRepoVersion)
            .status(statusHttp)
            .json(responseBody);
        return;
    }
};
exports.AppValidationImportFilter = AppValidationImportFilter;
exports.AppValidationImportFilter = AppValidationImportFilter = AppValidationImportFilter_1 = __decorate([
    (0, common_1.Catch)(file_import_exception_1.FileImportException),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        config_1.ConfigService,
        helper_date_service_1.HelperDateService])
], AppValidationImportFilter);
//# sourceMappingURL=app.validation-import.filter.js.map