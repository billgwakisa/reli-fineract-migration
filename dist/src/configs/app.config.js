"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const package_json_1 = require("../../package.json");
const app_enum_constant_1 = require("../app/constants/app.enum.constant");
exports.default = (0, config_1.registerAs)('app', () => ({
    name: process.env.APP_NAME ?? 'ack',
    env: process.env.APP_ENV ?? app_enum_constant_1.ENUM_APP_ENVIRONMENT.DEVELOPMENT,
    timezone: process.env.APP_TIMEZONE ?? app_enum_constant_1.ENUM_APP_TIMEZONE.ASIA_SINGAPORE,
    repoVersion: package_json_1.version,
    globalPrefix: process.env.APP_ENV === app_enum_constant_1.ENUM_APP_ENVIRONMENT.PRODUCTION
        ? ''
        : '/api',
    debug: process.env.APP_DEBUG === 'true' ?? false,
    jobEnable: process.env.JOB_ENABLE === 'true' ?? false,
    http: {
        enable: process.env.HTTP_ENABLE === 'true' ?? false,
        host: process.env.HTTP_HOST ?? 'localhost',
        port: process.env.HTTP_PORT
            ? Number.parseInt(process.env.HTTP_PORT)
            : 3000,
    },
    urlVersion: {
        enable: process.env.URL_VERSION_ENABLE === 'true' ?? false,
        prefix: 'v',
        version: process.env.URL_VERSION ?? '1',
    },
}));
//# sourceMappingURL=app.config.js.map