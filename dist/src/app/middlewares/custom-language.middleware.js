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
exports.MessageCustomLanguageMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_array_service_1 = require("../../common/helper/services/helper.array.service");
let MessageCustomLanguageMiddleware = class MessageCustomLanguageMiddleware {
    constructor(configService, helperArrayService) {
        this.configService = configService;
        this.helperArrayService = helperArrayService;
        this.availableLanguage = this.configService.get('message.availableLanguage');
    }
    async use(req, res, next) {
        let customLang = this.configService.get('message.language');
        const reqLanguages = req.headers['x-custom-lang'];
        if (reqLanguages) {
            const language = this.filterLanguage(reqLanguages);
            if (language.length > 0) {
                customLang = reqLanguages;
            }
        }
        req.__language = customLang;
        req.headers['x-custom-lang'] = customLang;
        next();
    }
    filterLanguage(customLanguage) {
        return this.helperArrayService.getIntersection([customLanguage], this.availableLanguage);
    }
};
exports.MessageCustomLanguageMiddleware = MessageCustomLanguageMiddleware;
exports.MessageCustomLanguageMiddleware = MessageCustomLanguageMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        helper_array_service_1.HelperArrayService])
], MessageCustomLanguageMiddleware);
//# sourceMappingURL=custom-language.middleware.js.map