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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_i18n_1 = require("nestjs-i18n");
const helper_array_service_1 = require("../../helper/services/helper.array.service");
let MessageService = class MessageService {
    constructor(i18n, configService, helperArrayService) {
        this.i18n = i18n;
        this.configService = configService;
        this.helperArrayService = helperArrayService;
        this.defaultLanguage =
            this.configService.get('message.language');
        this.availableLanguage = this.configService.get('message.availableLanguage');
        this.debug = this.configService.get('app.debug');
    }
    getAvailableLanguages() {
        return this.availableLanguage;
    }
    getLanguage() {
        return this.defaultLanguage;
    }
    filterLanguage(customLanguage) {
        return this.helperArrayService.getIntersection([customLanguage], this.availableLanguage);
    }
    setMessage(path, options) {
        const language = options?.customLanguage
            ? this.filterLanguage(options.customLanguage)[0]
            : this.defaultLanguage;
        return this.i18n.translate(path, {
            lang: language,
            args: options?.properties,
            debug: this.debug,
        });
    }
    setValidationMessage(errors, options) {
        const messages = [];
        for (const error of errors) {
            const property = error.property ?? 'unknown';
            const constraints = Object.keys(error.constraints ?? []);
            for (const constraint of constraints) {
                const message = this.setMessage(`request.${constraint}`, {
                    customLanguage: options?.customLanguage,
                    properties: {
                        property,
                        value: error.value,
                    },
                });
                messages.push({
                    property,
                    message: message,
                });
            }
        }
        return messages;
    }
    setValidationImportMessage(errors, options) {
        return errors.map(val => ({
            row: val.row,
            sheetName: val.sheetName,
            errors: this.setValidationMessage(val.error, options),
        }));
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nService,
        config_1.ConfigService,
        helper_array_service_1.HelperArrayService])
], MessageService);
//# sourceMappingURL=message.service.js.map