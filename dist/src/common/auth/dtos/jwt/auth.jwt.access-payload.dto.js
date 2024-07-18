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
exports.AuthJwtAccessPayloadDto = exports.AuthJwtAccessPayloadPermissionDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const auth_enum_constant_1 = require("../../constants/auth.enum.constant");
const policy_enum_constant_1 = require("../../../policy/constants/policy.enum.constant");
class AuthJwtAccessPayloadPermissionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { subject: { required: true, enum: require("../../../policy/constants/policy.enum.constant").ENUM_POLICY_SUBJECT }, action: { required: true, type: () => String } };
    }
}
exports.AuthJwtAccessPayloadPermissionDto = AuthJwtAccessPayloadPermissionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        enum: policy_enum_constant_1.ENUM_POLICY_SUBJECT,
    }),
    __metadata("design:type", String)
], AuthJwtAccessPayloadPermissionDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
    }),
    (0, class_transformer_1.Transform)(({ value }) => {
        return value
            .map((e) => {
            switch (e) {
                case policy_enum_constant_1.ENUM_POLICY_ACTION.CREATE:
                    return policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.CREATE;
                case policy_enum_constant_1.ENUM_POLICY_ACTION.UPDATE:
                    return policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.UPDATE;
                case policy_enum_constant_1.ENUM_POLICY_ACTION.DELETE:
                    return policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.DELETE;
                case policy_enum_constant_1.ENUM_POLICY_ACTION.EXPORT:
                    return policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.EXPORT;
                case policy_enum_constant_1.ENUM_POLICY_ACTION.IMPORT:
                    return policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.IMPORT;
                case policy_enum_constant_1.ENUM_POLICY_ACTION.MANAGE:
                    return policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.MANAGE;
                case policy_enum_constant_1.ENUM_POLICY_ACTION.READ:
                default:
                    return policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.READ;
            }
        })
            .join(',');
    }),
    __metadata("design:type", String)
], AuthJwtAccessPayloadPermissionDto.prototype, "action", void 0);
class AuthJwtAccessPayloadDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { loginDate: { required: true, type: () => Date }, loginFrom: { required: true, enum: require("../../constants/auth.enum.constant").ENUM_AUTH_LOGIN_FROM }, _id: { required: true, type: () => String }, email: { required: true, type: () => String }, role: { required: true, type: () => String }, type: { required: true, enum: require("../../../policy/constants/policy.enum.constant").ENUM_POLICY_ROLE_TYPE }, permissions: { required: true, type: () => [require("./auth.jwt.access-payload.dto").AuthJwtAccessPayloadPermissionDto] } };
    }
}
exports.AuthJwtAccessPayloadDto = AuthJwtAccessPayloadDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        example: faker_1.faker.date.recent(),
    }),
    __metadata("design:type", Date)
], AuthJwtAccessPayloadDto.prototype, "loginDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        enum: auth_enum_constant_1.ENUM_AUTH_LOGIN_FROM,
    }),
    __metadata("design:type", String)
], AuthJwtAccessPayloadDto.prototype, "loginFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], AuthJwtAccessPayloadDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], AuthJwtAccessPayloadDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], AuthJwtAccessPayloadDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        enum: policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE,
    }),
    __metadata("design:type", String)
], AuthJwtAccessPayloadDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        nullable: false,
        type: AuthJwtAccessPayloadPermissionDto,
        isArray: true,
        default: [],
    }),
    (0, class_transformer_1.Type)(() => AuthJwtAccessPayloadPermissionDto),
    __metadata("design:type", Array)
], AuthJwtAccessPayloadDto.prototype, "permissions", void 0);
//# sourceMappingURL=auth.jwt.access-payload.dto.js.map