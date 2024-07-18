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
exports.UserLoginResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const policy_enum_constant_1 = require("../../../../common/policy/constants/policy.enum.constant");
class UserLoginResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tokenType: { required: true, type: () => String }, roleType: { required: true, enum: require("../../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_ROLE_TYPE }, expiresIn: { required: true, type: () => Number }, accessToken: { required: true, type: () => String }, refreshToken: { required: true, type: () => String } };
    }
}
exports.UserLoginResponseDto = UserLoginResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bearer',
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], UserLoginResponseDto.prototype, "tokenType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.USER,
        enum: policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE,
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], UserLoginResponseDto.prototype, "roleType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3600,
        description: 'timestamp in minutes',
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Number)
], UserLoginResponseDto.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], UserLoginResponseDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], UserLoginResponseDto.prototype, "refreshToken", void 0);
//# sourceMappingURL=user.login.response.dto.js.map