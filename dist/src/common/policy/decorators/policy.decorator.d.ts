import { ENUM_POLICY_ROLE_TYPE } from 'src/common/policy/constants/policy.enum.constant';
import { IPolicyAbility } from 'src/common/policy/interfaces/policy.interface';
export declare function PolicyAbilityProtected(...handlers: IPolicyAbility[]): MethodDecorator;
export declare function PolicyRoleProtected(...roles: ENUM_POLICY_ROLE_TYPE[]): MethodDecorator;
