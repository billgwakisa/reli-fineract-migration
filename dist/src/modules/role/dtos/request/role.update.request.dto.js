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
exports.RoleUpdateRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const policy_enum_constant_1 = require("../../../../common/policy/constants/policy.enum.constant");
const role_permission_dto_1 = require("../role.permission.dto");
class RoleUpdateRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { description: { required: false, type: () => String }, type: { required: true, enum: require("../../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_ROLE_TYPE }, permissions: { required: true, type: () => [require("../role.permission.dto").RolePermissionDto] } };
    }
}
exports.RoleUpdateRequestDto = RoleUpdateRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of role',
        example: faker_1.faker.lorem.sentence(),
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], RoleUpdateRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Representative for role type',
        example: 'ADMIN',
        required: true,
    }),
    (0, class_validator_1.IsEnum)(policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RoleUpdateRequestDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Permission list of role',
        isArray: true,
        default: [],
        example: [
            {
                subject: policy_enum_constant_1.ENUM_POLICY_SUBJECT.API_KEY,
                action: [policy_enum_constant_1.ENUM_POLICY_ACTION.MANAGE],
            },
        ],
        type: role_permission_dto_1.RolePermissionDto,
    }),
    (0, class_transformer_1.Type)(() => role_permission_dto_1.RolePermissionDto),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.ValidateIf)(e => e.type === policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN),
    (0, class_transformer_1.Transform)(({ value, obj }) => obj.type !== policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN ? [] : value),
    __metadata("design:type", Array)
], RoleUpdateRequestDto.prototype, "permissions", void 0);
//# sourceMappingURL=role.update.request.dto.js.map