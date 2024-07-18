"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const bytes_1 = __importDefault(require("bytes"));
const ms_1 = __importDefault(require("ms"));
exports.default = (0, config_1.registerAs)('middleware', () => ({
    body: {
        json: {
            maxFileSize: (0, bytes_1.default)('100kb'),
        },
        raw: {
            maxFileSize: (0, bytes_1.default)('100kb'),
        },
        text: {
            maxFileSize: (0, bytes_1.default)('100kb'),
        },
        urlencoded: {
            maxFileSize: (0, bytes_1.default)('100kb'),
        },
    },
    timeout: (0, ms_1.default)('30s'),
    cors: {
        allowMethod: ['GET', 'DELETE', 'PUT', 'PATCH', 'POST'],
        allowOrigin: '*',
        allowHeader: [
            'Accept',
            'Accept-Language',
            'Content-Language',
            'Content-Type',
            'Origin',
            'Authorization',
            'Access-Control-Request-Method',
            'Access-Control-Request-Headers',
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Methods',
            'Access-Control-Allow-Credentials',
            'Access-Control-Expose-Headers',
            'Access-Control-Max-Age',
            'Referer',
            'Host',
            'X-Requested-With',
            'x-custom-lang',
            'x-timestamp',
            'x-api-key',
            'x-timezone',
            'x-request-id',
            'x-version',
            'x-repo-version',
            'X-Response-Time',
            'user-agent',
        ],
    },
    throttle: {
        ttl: (0, ms_1.default)('500'),
        limit: 10,
    },
}));
//# sourceMappingURL=middleware.config.js.map