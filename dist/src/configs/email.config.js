"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('email', () => ({
    fromEmail: 'noreply@mail.com',
}));
//# sourceMappingURL=email.config.js.map