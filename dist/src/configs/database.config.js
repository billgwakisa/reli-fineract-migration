"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    uri: process.env?.DATABASE_URI ??
        'mongodb://localhost:27017,localhost:27018,localhost:27019',
    debug: process.env.DATABASE_DEBUG === 'true',
    timeoutOptions: {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 10000,
        heartbeatFrequencyMS: 30000,
    },
}));
//# sourceMappingURL=database.config.js.map