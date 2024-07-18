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
exports.PolicyAbilityGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const policy_status_code_constant_1 = require("../constants/policy.status-code.constant");
const policy_factory_1 = require("../factories/policy.factory");
const policy_constant_1 = require("../constants/policy.constant");
const policy_enum_constant_1 = require("../constants/policy.enum.constant");
let PolicyAbilityGuard = class PolicyAbilityGuard {
    constructor(reflector, policyAbilityFactory) {
        this.reflector = reflector;
        this.policyAbilityFactory = policyAbilityFactory;
    }
    async canActivate(context) {
        const policy = this.reflector.get(policy_constant_1.POLICY_ABILITY_META_KEY, context.getHandler()) || [];
        const { user } = context.switchToHttp().getRequest();
        const { permissions, type } = user;
        if (type === policy_enum_constant_1.ENUM_POLICY_ROLE_TYPE.SUPER_ADMIN) {
            return true;
        }
        const ability = this.policyAbilityFactory.defineFromRequest(permissions);
        const policyHandler = this.policyAbilityFactory.handlerAbilities(policy);
        const check = policyHandler.every((handler) => {
            return handler(ability);
        });
        if (!check) {
            throw new common_1.ForbiddenException({
                statusCode: policy_status_code_constant_1.ENUM_POLICY_STATUS_CODE_ERROR.ABILITY_FORBIDDEN_ERROR,
                message: 'policy.error.abilityForbidden',
            });
        }
        return true;
    }
};
exports.PolicyAbilityGuard = PolicyAbilityGuard;
exports.PolicyAbilityGuard = PolicyAbilityGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        policy_factory_1.PolicyAbilityFactory])
], PolicyAbilityGuard);
//# sourceMappingURL=policy.ability.guard.js.map