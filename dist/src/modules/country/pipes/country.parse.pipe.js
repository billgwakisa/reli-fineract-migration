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
exports.CountryParsePipe = void 0;
const common_1 = require("@nestjs/common");
const country_status_code_constant_1 = require("../constants/country.status-code.constant");
const country_service_1 = require("../services/country.service");
let CountryParsePipe = class CountryParsePipe {
    constructor(countryService) {
        this.countryService = countryService;
    }
    async transform(value) {
        const country = await this.countryService.findOneById(value);
        if (!country) {
            throw new common_1.NotFoundException({
                statusCode: country_status_code_constant_1.ENUM_COUNTRY_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'country.error.notFound',
            });
        }
        return country;
    }
};
exports.CountryParsePipe = CountryParsePipe;
exports.CountryParsePipe = CountryParsePipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryParsePipe);
//# sourceMappingURL=country.parse.pipe.js.map