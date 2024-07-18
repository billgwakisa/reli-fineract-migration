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
exports.RolePermissionDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
class RolePermissionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { subject: { required: true, enum: require("../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_SUBJECT }, action: { required: true, enum: require("../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_ACTION, isArray: true } };
    }
}
exports.RolePermissionDto = RolePermissionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Permission subject',
        enum: policy_enum_constant_1.ENUM_POLICY_SUBJECT,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(policy_enum_constant_1.ENUM_POLICY_SUBJECT),
    __metadata("design:type", String)
], RolePermissionDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Permission action base on subject',
        isArray: true,
        default: [policy_enum_constant_1.ENUM_POLICY_ACTION.MANAGE],
        enum: policy_enum_constant_1.ENUM_POLICY_ACTION,
    }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsEnum)(policy_enum_constant_1.ENUM_POLICY_ACTION, { each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], RolePermissionDto.prototype, "action", void 0);
//# sourceMappingURL=role.permission.dto.js.map