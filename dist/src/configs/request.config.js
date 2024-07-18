"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
exports.default = (0, config_1.registerAs)('request', () => ({
    timeout: (0, ms_1.default)('30s'),
}));
//# sourceMappingURL=request.config.js.map