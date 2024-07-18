"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperStringService = void 0;
const faker_1 = require("@faker-js/faker");
const common_1 = require("@nestjs/common");
let HelperStringService = class HelperStringService {
    randomReference(length) {
        const timestamp = `${new Date().getTime()}`;
        const randomString = this.random(length, {
            safe: true,
        });
        return `${timestamp}${randomString}`.toUpperCase();
    }
    random(length, options) {
        return options?.safe
            ? faker_1.faker.string.alphanumeric({
                length: { min: length, max: length },
            })
            : faker_1.faker.string.numeric({
                length: { min: length, max: length },
            });
    }
    censor(text) {
        if (text.length <= 3) {
            const stringCensor = '*'.repeat(2);
            return `${stringCensor}${text.slice(-1)}`;
        }
        else if (text.length <= 10) {
            const stringCensor = '*'.repeat(7);
            return `${stringCensor}${text.slice(-3)}`;
        }
        const stringCensor = '*'.repeat(10);
        return `${text.slice(0, 3)}${stringCensor}${text.slice(-4)}`;
    }
    checkEmail(email) {
        const regex = new RegExp(/\S+@\S+\.\S+/);
        return regex.test(email);
    }
    checkPasswordStrength(password, options) {
        const length = options?.length ?? 8;
        const regex = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{${length},}$`);
        return regex.test(password);
    }
    checkSafeString(text) {
        const regex = new RegExp('^[A-Za-z0-9]+$');
        return regex.test(text);
    }
    formatCurrency(num, options) {
        return num.toLocaleString(options?.locale);
    }
};
exports.HelperStringService = HelperStringService;
exports.HelperStringService = HelperStringService = __decorate([
    (0, common_1.Injectable)()
], HelperStringService);
//# sourceMappingURL=helper.string.service.js.map