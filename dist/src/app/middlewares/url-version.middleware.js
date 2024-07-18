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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlVersionMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_enum_constant_1 = require("../constants/app.enum.constant");
let UrlVersionMiddleware = class UrlVersionMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.env = this.configService.get('app.env');
        this.globalPrefix = this.configService.get('app.globalPrefix');
        this.urlVersionEnable = this.configService.get('app.urlVersion.enable');
        this.urlVersionPrefix = this.configService.get('app.urlVersion.prefix');
        this.urlVersion = this.configService.get('app.urlVersion.version');
    }
    async use(req, res, next) {
        const originalUrl = req.originalUrl;
        let version = this.urlVersion;
        if (this.urlVersionEnable &&
            originalUrl.startsWith(`${this.globalPrefix}/${this.urlVersionPrefix}`)) {
            const url = originalUrl.split('/');
            if (this.env === app_enum_constant_1.ENUM_APP_ENVIRONMENT.PRODUCTION) {
                version = url[1].replace(this.urlVersionPrefix, '');
            }
            else {
                version = url[2].replace(this.urlVersionPrefix, '');
            }
        }
        req.__version = version;
        next();
    }
};
exports.UrlVersionMiddleware = UrlVersionMiddleware;
exports.UrlVersionMiddleware = UrlVersionMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UrlVersionMiddleware);
//# sourceMappingURL=url-version.middleware.js.map