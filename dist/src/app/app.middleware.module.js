"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMiddlewareModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const nestjs_sentry_1 = require("@ntegral/nestjs-sentry");
const app_general_filter_1 = require("./filters/app.general.filter");
const app_http_filter_1 = require("./filters/app.http.filter");
const app_validation_import_filter_1 = require("./filters/app.validation-import.filter");
const app_validation_filter_1 = require("./filters/app.validation.filter");
const body_parser_middleware_1 = require("./middlewares/body-parser.middleware");
const cors_middleware_1 = require("./middlewares/cors.middleware");
const custom_language_middleware_1 = require("./middlewares/custom-language.middleware");
const helmet_middleware_1 = require("./middlewares/helmet.middleware");
const response_time_middleware_1 = require("./middlewares/response-time.middleware");
const url_version_middleware_1 = require("./middlewares/url-version.middleware");
let AppMiddlewareModule = class AppMiddlewareModule {
    configure(consumer) {
        consumer
            .apply(helmet_middleware_1.HelmetMiddleware, body_parser_middleware_1.JsonBodyParserMiddleware, body_parser_middleware_1.TextBodyParserMiddleware, body_parser_middleware_1.RawBodyParserMiddleware, body_parser_middleware_1.UrlencodedBodyParserMiddleware, cors_middleware_1.CorsMiddleware, url_version_middleware_1.UrlVersionMiddleware, response_time_middleware_1.ResponseTimeMiddleware, custom_language_middleware_1.MessageCustomLanguageMiddleware)
            .forRoutes('*');
    }
};
exports.AppMiddlewareModule = AppMiddlewareModule;
exports.AppMiddlewareModule = AppMiddlewareModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        exports: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: app_general_filter_1.AppGeneralFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: app_validation_filter_1.AppValidationFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: app_validation_import_filter_1.AppValidationImportFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: app_http_filter_1.AppHttpFilter,
            },
        ],
        imports: [
            throttler_1.ThrottlerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    throttlers: [
                        {
                            ttl: config.get('middleware.throttle.ttl'),
                            limit: config.get('middleware.throttle.limit'),
                        },
                    ],
                }),
            }),
            nestjs_sentry_1.SentryModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    dsn: configService.get('debug.sentry.dsn'),
                    debug: false,
                    environment: configService.get('app.env'),
                    release: configService.get('app.repoVersion'),
                    logLevels: configService.get('debug.sentry.logLevels.exception'),
                    close: {
                        enabled: true,
                        timeout: configService.get('debug.sentry.timeout'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
    })
], AppMiddlewareModule);
//# sourceMappingURL=app.middleware.module.js.map