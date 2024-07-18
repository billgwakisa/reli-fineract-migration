"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyRoleProtected = exports.PolicyAbilityProtected = void 0;
const common_1 = require("@nestjs/common");
const policy_constant_1 = require("../constants/policy.constant");
const policy_ability_guard_1 = require("../guards/policy.ability.guard");
const policy_role_guard_1 = require("../guards/policy.role.guard");
function PolicyAbilityProtected(...handlers) {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(policy_ability_guard_1.PolicyAbilityGuard), (0, common_1.SetMetadata)(policy_constant_1.POLICY_ABILITY_META_KEY, handlers));
}
exports.PolicyAbilityProtected = PolicyAbilityProtected;
function PolicyRoleProtected(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(policy_role_guard_1.PolicyRoleGuard), (0, common_1.SetMetadata)(policy_constant_1.POLICY_ROLE_META_KEY, roles));
}
exports.PolicyRoleProtected = PolicyRoleProtected;
//# sourceMappingURL=policy.decorator.js.map