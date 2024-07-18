"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryInactivePipe = exports.CountryActivePipe = void 0;
const common_1 = require("@nestjs/common");
const country_status_code_constant_1 = require("../constants/country.status-code.constant");
let CountryActivePipe = class CountryActivePipe {
    async transform(value) {
        if (!value.isActive) {
            throw new common_1.BadRequestException({
                statusCode: country_status_code_constant_1.ENUM_COUNTRY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
                message: 'country.error.isActiveInvalid',
            });
        }
        return value;
    }
};
exports.CountryActivePipe = CountryActivePipe;
exports.CountryActivePipe = CountryActivePipe = __decorate([
    (0, common_1.Injectable)()
], CountryActivePipe);
let CountryInactivePipe = class CountryInactivePipe {
    async transform(value) {
        if (value.isActive) {
            throw new common_1.BadRequestException({
                statusCode: country_status_code_constant_1.ENUM_COUNTRY_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
                message: 'country.error.isActiveInvalid',
            });
        }
        return value;
    }
};
exports.CountryInactivePipe = CountryInactivePipe;
exports.CountryInactivePipe = CountryInactivePipe = __decorate([
    (0, common_1.Injectable)()
], CountryInactivePipe);
//# sourceMappingURL=country.is-active.pipe.js.map