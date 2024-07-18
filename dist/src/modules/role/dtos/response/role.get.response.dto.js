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
exports.RoleGetResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const database_id_response_dto_1 = require("../../../../common/database/dtos/response/database.id.response.dto");
const policy_enum_constant_1 = require("../../../../common/policy/constants/policy.enum.constant");
const role_permission_dto_1 = require("../role.permission.dto");
class RoleGetResponseDto extends database_id_response_dto_1.DatabaseIdResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: false, type: () => String }, isActive: { required: true, type: () => Boolean }, type: { required: true, enum: require("../../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_ROLE_TYPE }, permissions: { required: true, type: () => require("../role.permission.dto").RolePermissionDto }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.RoleGetResponseDto = RoleGetResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of role',
        example: faker_1.faker.person.jobTitle(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], RoleGetResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of role',
        example: faker_1.faker.lorem.sentence(),
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], RoleGetResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active flag of role',
        example: true,
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], RoleGetResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Representative for role type',
        example: policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.ADMIN,
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], RoleGetResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: role_permission_dto_1.RolePermissionDto,
        required: true,
        nullable: false,
        default: [],
    }),
    (0, class_transformer_1.Type)(() => role_permission_dto_1.RolePermissionDto),
    __metadata("design:type", role_permission_dto_1.RolePermissionDto)
], RoleGetResponseDto.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], RoleGetResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Date)
], RoleGetResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], RoleGetResponseDto.prototype, "deletedAt", void 0);
//# sourceMappingURL=role.get.response.dto.js.map