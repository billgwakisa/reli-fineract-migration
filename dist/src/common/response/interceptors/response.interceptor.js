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
exports.ResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const message_service_1 = require("../../message/services/message.service");
const core_1 = require("@nestjs/core");
const response_constant_1 = require("../constants/response.constant");
const config_1 = require("@nestjs/config");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
let ResponseInterceptor = class ResponseInterceptor {
    constructor(reflector, messageService, configService, helperDateService) {
        this.reflector = reflector;
        this.messageService = messageService;
        this.configService = configService;
        this.helperDateService = helperDateService;
    }
    intercept(context, next) {
        if (context.getType() === 'http') {
            return next.handle().pipe((0, operators_1.map)(async (res) => {
                const ctx = context.switchToHttp();
                const response = ctx.getResponse();
                const request = ctx.getRequest();
                let messagePath = this.reflector.get(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, context.getHandler());
                let messageProperties = this.reflector.get(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, context.getHandler());
                let httpStatus = response.statusCode;
                let statusCode = response.statusCode;
                let data = undefined;
                const xPath = request.path;
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
                    path: xPath,
                    version: xVersion,
                    repoVersion: xRepoVersion,
                };
                const responseData = (await res);
                if (responseData) {
                    const { _metadata } = responseData;
                    data = responseData.data;
                    httpStatus =
                        _metadata?.customProperty?.httpStatus ?? httpStatus;
                    statusCode =
                        _metadata?.customProperty?.statusCode ?? statusCode;
                    messagePath =
                        _metadata?.customProperty?.message ?? messagePath;
                    messageProperties =
                        _metadata?.customProperty?.messageProperties ??
                            messageProperties;
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
                response.setHeader('x-custom-lang', xLanguage);
                response.setHeader('x-timestamp', xTimestamp);
                response.setHeader('x-timezone', xTimezone);
                response.setHeader('x-version', xVersion);
                response.setHeader('x-repo-version', xRepoVersion);
                response.status(httpStatus);
                return {
                    statusCode,
                    message,
                    _metadata: metadata,
                    data,
                };
            }));
        }
        return next.handle();
    }
};
exports.ResponseInterceptor = ResponseInterceptor;
exports.ResponseInterceptor = ResponseInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        message_service_1.MessageService,
        config_1.ConfigService,
        helper_date_service_1.HelperDateService])
], ResponseInterceptor);
//# sourceMappingURL=response.interceptor.js.map