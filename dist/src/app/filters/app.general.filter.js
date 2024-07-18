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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AppGeneralFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGeneralFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const nestjs_sentry_1 = require("@ntegral/nestjs-sentry");
const file_import_exception_1 = require("../../common/file/exceptions/file.import.exception");
const helper_date_service_1 = require("../../common/helper/services/helper.date.service");
const message_service_1 = require("../../common/message/services/message.service");
const request_validation_exception_1 = require("../../common/request/exceptions/request.validation.exception");
let AppGeneralFilter = AppGeneralFilter_1 = class AppGeneralFilter {
    constructor(sentryService, httpAdapterHost, messageService, configService, helperDateService) {
        this.sentryService = sentryService;
        this.httpAdapterHost = httpAdapterHost;
        this.messageService = messageService;
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.logger = new common_1.Logger(AppGeneralFilter_1.name);
        this.debug = this.configService.get('app.debug');
    }
    async catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (this.debug) {
            this.logger.error(exception);
        }
        this.sendToSentry(exception);
        if (exception instanceof common_1.HttpException) {
            const response = exception.getResponse();
            const statusHttp = exception.getStatus();
            httpAdapter.reply(ctx.getResponse(), response, statusHttp);
            return;
        }
        const statusHttp = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const messagePath = `http.${statusHttp}`;
        const statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
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
        const message = this.messageService.setMessage(messagePath, {
            customLanguage: xLanguage,
        });
        const responseBody = {
            statusCode,
            message,
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
    sendToSentry(exception) {
        if ((exception instanceof common_1.HttpException &&
            !(exception instanceof common_1.InternalServerErrorException)) ||
            exception instanceof request_validation_exception_1.RequestValidationException ||
            exception instanceof file_import_exception_1.FileImportException) {
            return;
        }
        try {
            this.sentryService.instance().captureException(exception);
        }
        catch (err) { }
        return;
    }
};
exports.AppGeneralFilter = AppGeneralFilter;
exports.AppGeneralFilter = AppGeneralFilter = AppGeneralFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __param(0, (0, common_1.Optional)()),
    __param(0, (0, nestjs_sentry_1.InjectSentry)()),
    __metadata("design:paramtypes", [nestjs_sentry_1.SentryService,
        core_1.HttpAdapterHost,
        message_service_1.MessageService,
        config_1.ConfigService,
        helper_date_service_1.HelperDateService])
], AppGeneralFilter);
//# sourceMappingURL=app.general.filter.js.map