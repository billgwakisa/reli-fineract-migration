"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperNumberService = void 0;
const common_1 = require("@nestjs/common");
let HelperNumberService = class HelperNumberService {
    check(number) {
        const regex = /^-?\d+$/;
        return regex.test(number);
    }
    random(length) {
        const min = Number.parseInt(`1`.padEnd(length, '0'));
        const max = Number.parseInt(`9`.padEnd(length, '9'));
        return this.randomInRange(min, max);
    }
    randomInRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    percent(value, total) {
        let tValue = value / total;
        if (Number.isNaN(tValue) || !Number.isFinite(tValue)) {
            tValue = 0;
        }
        return Number.parseFloat((tValue * 100).toFixed(2));
    }
};
exports.HelperNumberService = HelperNumberService;
exports.HelperNumberService = HelperNumberService = __decorate([
    (0, common_1.Injectable)()
], HelperNumberService);
//# sourceMappingURL=helper.number.service.js.map