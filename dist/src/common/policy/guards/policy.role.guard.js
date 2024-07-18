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
exports.PolicyRoleGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const policy_constant_1 = require("../constants/policy.constant");
const policy_enum_constant_1 = require("../constants/policy.enum.constant");
const policy_status_code_constant_1 = require("../constants/policy.status-code.constant");
let PolicyRoleGuard = class PolicyRoleGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const role = this.reflector.get(policy_constant_1.POLICY_ROLE_META_KEY, context.getHandler()) || [];
        const { user } = context.switchToHttp().getRequest();
        const { type } = user;
        if (role?.length === 0 || type === policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.SUPER_ADMIN) {
            return true;
        }
        if (!role.includes(type)) {
            throw new common_1.ForbiddenException({
                statusCode: policy_status_code_constant_1.ENUM_POLICY_STATUS_CODE_ERROR.ROLE_FORBIDDEN_ERROR,
                message: 'policy.error.roleForbidden',
            });
        }
        return true;
    }
};
exports.PolicyRoleGuard = PolicyRoleGuard;
exports.PolicyRoleGuard = PolicyRoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], PolicyRoleGuard);
//# sourceMappingURL=policy.role.guard.js.map