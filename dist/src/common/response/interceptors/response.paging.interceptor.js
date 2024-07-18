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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePagingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const message_service_1 = require("../../message/services/message.service");
const core_1 = require("@nestjs/core");
const qs_1 = __importDefault(require("qs"));
const response_constant_1 = require("../constants/response.constant");
const helper_array_service_1 = require("../../helper/services/helper.array.service");
const config_1 = require("@nestjs/config");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
let ResponsePagingInterceptor = class ResponsePagingInterceptor {
    constructor(reflector, messageService, helperArrayService, configService, helperDateService) {
        this.reflector = reflector;
        this.messageService = messageService;
        this.helperArrayService = helperArrayService;
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
                let data = [];
                const xPath = request.path;
                const xPagination = request.__pagination;
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
                if (!responseData) {
                    throw new Error('ResponsePaging must instanceof IResponsePaging');
                }
                else if (!responseData.data ||
                    !Array.isArray(responseData.data)) {
                    throw new Error('Field data must in array and can not be empty');
                }
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
                const { query } = request;
                delete query.perPage;
                delete query.page;
                const total = responseData._pagination.total;
                const totalPage = responseData._pagination.totalPage;
                const perPage = xPagination.perPage;
                const page = xPagination.page;
                const queryString = qs_1.default.stringify(query, {
                    encode: false,
                });
                const cursorPaginationMetadata = {
                    nextPage: page < totalPage
                        ? queryString
                            ? `${xPath}?perPage=${perPage}&page=${page + 1}&${queryString}`
                            : `${xPath}?perPage=${perPage}&page=${page + 1}`
                        : undefined,
                    previousPage: page > 1
                        ? queryString
                            ? `${xPath}?perPage=${perPage}&page=${page - 1}&${queryString}`
                            : `${xPath}?perPage=${perPage}&page=${page - 1}`
                        : undefined,
                    firstPage: totalPage > 1
                        ? queryString
                            ? `${xPath}?perPage=${perPage}&page=${1}&${queryString}`
                            : `${xPath}?perPage=${perPage}&page=${1}`
                        : undefined,
                    lastPage: totalPage > 1
                        ? queryString
                            ? `${xPath}?perPage=${perPage}&page=${totalPage}&${queryString}`
                            : `${xPath}?perPage=${perPage}&page=${totalPage}`
                        : undefined,
                };
                metadata = {
                    ...metadata,
                    ..._metadata,
                    pagination: {
                        ...xPagination,
                        ...metadata._pagination,
                        total,
                        totalPage: data.length > 0 ? totalPage : 0,
                    },
                };
                if (!this.helperArrayService.notIn(Object.values(cursorPaginationMetadata), undefined)) {
                    metadata.cursor = cursorPaginationMetadata;
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
exports.ResponsePagingInterceptor = ResponsePagingInterceptor;
exports.ResponsePagingInterceptor = ResponsePagingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        message_service_1.MessageService,
        helper_array_service_1.HelperArrayService,
        config_1.ConfigService,
        helper_date_service_1.HelperDateService])
], ResponsePagingInterceptor);
//# sourceMappingURL=response.paging.interceptor.js.map