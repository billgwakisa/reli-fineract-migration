"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
exports.default = (0, config_1.registerAs)('auth', () => ({
    jwt: {
        accessToken: {
            secretKey: process.env.AUTH_JWT_ACCESS_TOKEN_SECRET_KEY ?? '123456',
            expirationTime: (0, ms_1.default)(process.env.AUTH_JWT_ACCESS_TOKEN_EXPIRED ?? '1h'),
        },
        refreshToken: {
            secretKey: process.env.AUTH_JWT_REFRESH_TOKEN_SECRET_KEY ??
                '123456000',
            expirationTime: (0, ms_1.default)(process.env.AUTH_JWT_REFRESH_TOKEN_EXPIRED ?? '90d'),
        },
        subject: process.env.AUTH_JWT_SUBJECT ?? 'ackDevelopment',
        audience: process.env.AUTH_JWT_AUDIENCE ?? 'https://example.com',
        issuer: process.env.AUTH_JWT_ISSUER ?? 'ack',
        prefixAuthorization: 'Bearer',
    },
    password: {
        attempt: false,
        maxAttempt: 5,
        saltLength: 8,
        expiredIn: (0, ms_1.default)('182d') / 1000,
        period: (0, ms_1.default)('90d') / 1000,
    },
    apple: {
        clientId: process.env.AUTH_SOCIAL_APPLE_CLIENT_ID,
        signInClientId: process.env.AUTH_SOCIAL_APPLE_SIGN_IN_CLIENT_ID,
    },
    google: {
        clientId: process.env.AUTH_SOCIAL_GOOGLE_CLIENT_ID,
        clientSecret: process.env.AUTH_SOCIAL_GOOGLE_CLIENT_SECRET,
    },
}));
//# sourceMappingURL=auth.config.js.map