"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("@nestjs/config");
const app_enum_constant_1 = require("../../../app/constants/app.enum.constant");
let DatabaseService = class DatabaseService {
    constructor(configService) {
        this.configService = configService;
    }
    createOptions() {
        const env = this.configService.get('app.env');
        const uri = this.configService.get('database.uri');
        const debug = this.configService.get('database.debug');
        const timeoutOptions = this.configService.get('database.timeoutOptions');
        if (env !== app_enum_constant_1.ENUM_APP_ENVIRONMENT.PRODUCTION) {
            mongoose_1.default.set('debug', debug);
        }
        const mongooseOptions = {
            uri,
            autoCreate: true,
            autoIndex: true,
            ...timeoutOptions,
        };
        return mongooseOptions;
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DatabaseService);
//# sourceMappingURL=database.service.js.map