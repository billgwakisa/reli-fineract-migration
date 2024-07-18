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
exports.RolePermissionSchema = exports.RolePermissionEntity = void 0;
const openapi = require("@nestjs/swagger");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
const policy_enum_constant_1 = require("../../../../common/policy/constants/policy.enum.constant");
let RolePermissionEntity = class RolePermissionEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { subject: { required: true, enum: require("../../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_SUBJECT }, action: { required: true, enum: require("../../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_ACTION, isArray: true } };
    }
};
exports.RolePermissionEntity = RolePermissionEntity;
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: String,
        enum: policy_enum_constant_1.ENUM_POLICY_SUBJECT,
    }),
    __metadata("design:type", String)
], RolePermissionEntity.prototype, "subject", void 0);
__decorate([
    (0, database_decorator_1.DatabaseProp)({
        required: true,
        type: [String],
        enum: policy_enum_constant_1.ENUM_POLICY_ACTION,
        default: [],
    }),
    __metadata("design:type", Array)
], RolePermissionEntity.prototype, "action", void 0);
exports.RolePermissionEntity = RolePermissionEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ timestamps: false, _id: false })
], RolePermissionEntity);
exports.RolePermissionSchema = (0, database_decorator_1.DatabaseSchema)(RolePermissionEntity);
//# sourceMappingURL=role.permission.entity.js.map