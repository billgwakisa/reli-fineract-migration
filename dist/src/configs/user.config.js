"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const app_enum_constant_1 = require("../app/constants/app.enum.constant");
exports.default = (0, config_1.registerAs)('user', () => ({
    uploadPath: process.env.APP_ENV === app_enum_constant_1.ENUM_APP_ENVIRONMENT.PRODUCTION
        ? '/user/{user}'
        : '/test/user/{user}',
}));
//# sourceMappingURL=user.config.js.map