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
exports.UserProfileResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const country_get_response_dto_1 = require("../../../country/dtos/response/country.get.response.dto");
const role_get_response_dto_1 = require("../../../role/dtos/response/role.get.response.dto");
const role_list_response_dto_1 = require("../../../role/dtos/response/role.list.response.dto");
const user_get_response_dto_1 = require("./user.get.response.dto");
const user_mobile_number_response_dto_1 = require("./user.mobile-number.response.dto");
class UserProfileResponseDto extends (0, swagger_1.OmitType)(user_get_response_dto_1.UserGetResponseDto, [
    'role',
    'country',
    'mobileNumber',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { role: { required: true, type: () => require("../../../role/dtos/response/role.get.response.dto").RoleGetResponseDto }, country: { required: true, type: () => require("../../../country/dtos/response/country.get.response.dto").CountryGetResponseDto }, mobileNumber: { required: false, type: () => require("./user.mobile-number.response.dto").UserMobileNumberResponseDto } };
    }
}
exports.UserProfileResponseDto = UserProfileResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        type: role_get_response_dto_1.RoleGetResponseDto,
    }),
    (0, class_transformer_1.Type)(() => role_get_response_dto_1.RoleGetResponseDto),
    __metadata("design:type", role_get_response_dto_1.RoleGetResponseDto)
], UserProfileResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        type: country_get_response_dto_1.CountryGetResponseDto,
    }),
    (0, class_transformer_1.Type)(() => country_get_response_dto_1.CountryGetResponseDto),
    __metadata("design:type", country_get_response_dto_1.CountryGetResponseDto)
], UserProfileResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        nullable: false,
        type: user_mobile_number_response_dto_1.UserMobileNumberResponseDto,
    }),
    (0, class_transformer_1.Type)(() => role_list_response_dto_1.RoleListResponseDto),
    __metadata("design:type", user_mobile_number_response_dto_1.UserMobileNumberResponseDto)
], UserProfileResponseDto.prototype, "mobileNumber", void 0);
//# sourceMappingURL=user.profile.response.dto.js.map