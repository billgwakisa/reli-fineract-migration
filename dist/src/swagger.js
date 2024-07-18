"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_enum_constant_1 = require("./app/constants/app.enum.constant");
const fs_1 = require("fs");
async function default_1(app) {
    const configService = app.get(config_1.ConfigService);
    const env = configService.get('app.env');
    const logger = new common_1.Logger();
    const docName = configService.get('doc.name');
    const docDesc = configService.get('doc.description');
    const docVersion = configService.get('doc.version');
    const docPrefix = configService.get('doc.prefix');
    if (env !== app_enum_constant_1.ENUM_APP_ENVIRONMENT.PRODUCTION) {
        const documentBuild = new swagger_1.DocumentBuilder()
            .setTitle(docName)
            .setDescription(docDesc)
            .setVersion(docVersion)
            .addServer('/')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'accessToken')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'refreshToken')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'google')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'apple')
            .addApiKey({ type: 'apiKey', in: 'header', name: 'x-api-key' }, 'xApiKey')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, documentBuild, {
            deepScanRoutes: true,
        });
        (0, fs_1.writeFileSync)('swagger.json', JSON.stringify(document));
        swagger_1.SwaggerModule.setup(docPrefix, app, document, {
            jsonDocumentUrl: `${docPrefix}/json`,
            yamlDocumentUrl: `${docPrefix}/yaml`,
            explorer: true,
            customSiteTitle: docName,
            swaggerOptions: {
                docExpansion: 'none',
                persistAuthorization: true,
                displayOperationId: true,
                operationsSorter: 'method',
                tagsSorter: 'alpha',
                tryItOutEnabled: true,
                filter: true,
                deepLinking: true,
            },
        });
        logger.log(`==========================================================`);
        logger.log(`Docs will serve on ${docPrefix}`, 'NestApplication');
        logger.log(`==========================================================`);
    }
}
exports.default = default_1;
//# sourceMappingURL=swagger.js.map