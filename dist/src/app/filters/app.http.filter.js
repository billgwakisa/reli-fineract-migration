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
var AppHttpFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHttpFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_date_service_1 = require("../../common/helper/services/helper.date.service");
const message_service_1 = require("../../common/message/services/message.service");
let AppHttpFilter = AppHttpFilter_1 = class AppHttpFilter {
    constructor(messageService, configService, helperDateService) {
        this.messageService = messageService;
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.logger = new common_1.Logger(AppHttpFilter_1.name);
        this.debug = this.configService.get('app.debug');
        this.globalPrefix = this.configService.get('app.globalPrefix');
        this.docPrefix = this.configService.get('doc.prefix');
    }
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (this.debug) {
            this.logger.error(exception);
        }
        if (!request.path.startsWith(this.globalPrefix) &&
            !request.path.startsWith(this.docPrefix)) {
            response.redirect(common_1.HttpStatus.PERMANENT_REDIRECT, this.docPrefix);
            return;
        }
        let statusHttp = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let messagePath = `http.${statusHttp}`;
        let statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const errors = undefined;
        let messageProperties = undefined;
        let data = undefined;
        const xLanguage = request.__language ?? this.messageService.getLanguage();
        const xTimestamp = this.helperDateService.createTimestamp();
        const xTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const xVersion = request.__version ??
            this.configService.get('app.urlVersion.version');
        const xRepoVersion = this.configService.get('app.repoVersion');
        let metadata = {
            language: xLanguage,
            timestamp: xTimestamp,
            timezone: xTimezone,
            path: request.path,
            version: xVersion,
            repoVersion: xRepoVersion,
        };
        const responseException = exception.getResponse();
        statusHttp = exception.getStatus();
        messagePath = `http.${statusHttp}`;
        statusCode = exception.getStatus();
        if (this.isErrorException(responseException)) {
            const { _metadata } = responseException;
            statusCode = responseException.statusCode;
            messagePath = responseException.message;
            data = responseException.data;
            messageProperties = _metadata?.customProperty?.messageProperties;
            delete _metadata?.customProperty;
            metadata = {
                ...metadata,
                ..._metadata,
            };
        }
        const message = this.messageService.setMessage(messagePath, {
            customLanguage: xLanguage,
            properties: messageProperties,
        });
        const responseBody = {
            statusCode,
            message,
            errors,
            _metadata: metadata,
            data,
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
    isErrorException(obj) {
        return typeof obj === 'object'
            ? 'statusCode' in obj && 'message' in obj
            : false;
    }
};
exports.AppHttpFilter = AppHttpFilter;
exports.AppHttpFilter = AppHttpFilter = AppHttpFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        config_1.ConfigService,
        helper_date_service_1.HelperDateService])
], AppHttpFilter);
//# sourceMappingURL=app.http.filter.js.map