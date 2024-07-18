"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('aws', () => ({
    s3: {
        credential: {
            key: process.env.AWS_S3_CREDENTIAL_KEY,
            secret: process.env.AWS_S3_CREDENTIAL_SECRET,
        },
        bucket: process.env.AWS_S3_BUCKET ?? 'bucket',
        region: process.env.AWS_S3_REGION,
        baseUrl: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com`,
    },
    ses: {
        credential: {
            key: process.env.AWS_SES_CREDENTIAL_KEY,
            secret: process.env.AWS_SES_CREDENTIAL_SECRET,
        },
        region: process.env.AWS_SES_REGION,
    },
}));
//# sourceMappingURL=aws.config.js.map