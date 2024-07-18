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
exports.CountryListResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const country_get_response_dto_1 = require("./country.get.response.dto");
class CountryListResponseDto extends (0, swagger_1.OmitType)(country_get_response_dto_1.CountryGetResponseDto, [
    'alpha3Code',
    'fipsCode',
    'continent',
    'domain',
    'timeZone',
    'numericCode',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CountryListResponseDto = CountryListResponseDto;
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], CountryListResponseDto.prototype, "alpha3Code", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], CountryListResponseDto.prototype, "fipsCode", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], CountryListResponseDto.prototype, "continent", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], CountryListResponseDto.prototype, "domain", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], CountryListResponseDto.prototype, "timeZone", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], CountryListResponseDto.prototype, "numericCode", void 0);
//# sourceMappingURL=country.list.response.dto.js.map