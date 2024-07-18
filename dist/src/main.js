"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app/app.module");
const config_1 = require("@nestjs/config");
const class_validator_1 = require("class-validator");
const swagger_1 = __importDefault(require("./swagger"));
const class_transformer_1 = require("class-transformer");
const app_env_dto_1 = require("./app/dtos/app.env.dto");
const message_service_1 = require("./common/message/services/message.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const databaseUri = configService.get('database.uri');
    const env = configService.get('app.env');
    const timezone = configService.get('app.timezone');
    const host = configService.get('app.http.host');
    const port = configService.get('app.http.port');
    const globalPrefix = configService.get('app.globalPrefix');
    const versioningPrefix = configService.get('app.urlVersion.prefix');
    const version = configService.get('app.urlVersion.version');
    const httpEnable = configService.get('app.http.enable');
    const versionEnable = configService.get('app.urlVersion.enable');
    const jobEnable = configService.get('app.jobEnable');
    const logger = new common_1.Logger();
    process.env.NODE_ENV = env;
    process.env.TZ = timezone;
    app.setGlobalPrefix(globalPrefix);
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    if (versionEnable) {
        app.enableVersioning({
            type: common_1.VersioningType.URI,
            defaultVersion: version,
            prefix: versioningPrefix,
        });
    }
    await (0, swagger_1.default)(app);
    await app.listen(port, host);
    logger.log(`==========================================================`);
    logger.log(`Environment Variable`, 'NestApplication');
    const classEnv = (0, class_transformer_1.plainToInstance)(app_env_dto_1.AppEnvDto, process.env);
    const errors = await (0, class_validator_1.validate)(classEnv);
    if (errors.length > 0) {
        const messageService = app.get(message_service_1.MessageService);
        const errorsMessage = messageService.setValidationMessage(errors);
        logger.log(errorsMessage, 'NestApplication');
        throw new Error('Env Variable Invalid');
    }
    logger.log(JSON.parse(JSON.stringify(process.env)), 'NestApplication');
    logger.log(`==========================================================`);
    logger.log(`Job is ${jobEnable}`, 'NestApplication');
    logger.log(`Http is ${httpEnable}, ${httpEnable ? 'routes registered' : 'no routes registered'}`, 'NestApplication');
    logger.log(`Http versioning is ${versionEnable}`, 'NestApplication');
    logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');
    logger.log(`Database uri ${databaseUri}`, 'NestApplication');
    logger.log(`==========================================================`);
}
bootstrap();
//# sourceMappingURL=main.js.map