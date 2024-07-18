"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nestjs_command_1 = require("nestjs-command");
const migration_module_1 = require("./migration/migration.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(migration_module_1.MigrationModule, {
        logger: ['error'],
    });
    try {
        await app.select(nestjs_command_1.CommandModule).get(nestjs_command_1.CommandService).exec();
        process.exit(0);
    }
    catch (err) {
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=cli.js.map