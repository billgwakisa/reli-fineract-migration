"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("./database/constants/database.constant");
const database_module_1 = require("./database/database.module");
const database_service_1 = require("./database/services/database.service");
const message_module_1 = require("./message/message.module");
const helper_module_1 = require("./helper/helper.module");
const request_module_1 = require("./request/request.module");
const policy_module_1 = require("./policy/policy.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const configs_1 = __importDefault(require("../configs"));
const api_key_module_1 = require("./api-key/api-key.module");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                load: configs_1.default,
                isGlobal: true,
                cache: true,
                envFilePath: ['.env'],
                expandVariables: false,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                connectionName: database_constant_1.DATABASE_CONNECTION_NAME,
                imports: [database_module_1.DatabaseModule],
                inject: [database_service_1.DatabaseService],
                useFactory: (databaseService) => databaseService.createOptions(),
            }),
            message_module_1.MessageModule.forRoot(),
            helper_module_1.HelperModule.forRoot(),
            request_module_1.RequestModule.forRoot(),
            policy_module_1.PolicyModule.forRoot(),
            auth_module_1.AuthModule.forRoot(),
            api_key_module_1.ApiKeyModule.forRoot(),
        ],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map