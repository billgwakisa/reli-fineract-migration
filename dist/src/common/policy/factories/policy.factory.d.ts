import { AuthJwtAccessPayloadPermissionDto } from 'src/common/auth/dtos/jwt/auth.jwt.access-payload.dto';
import { ENUM_POLICY_ACTION } from 'src/common/policy/constants/policy.enum.constant';
import { IPolicyAbility, IPolicyAbilityFlat, IPolicyAbilityHandlerCallback, IPolicyAbilityRule } from 'src/common/policy/interfaces/policy.interface';
export declare class PolicyAbilityFactory {
    defineFromRequest(permissions: AuthJwtAccessPayloadPermissionDto[]): IPolicyAbilityRule;
    mappingFromRequest({ subject, action, }: AuthJwtAccessPayloadPermissionDto): IPolicyAbilityFlat[];
    mapping(action: number): ENUM_POLICY_ACTION;
    handlerAbilities(abilities: IPolicyAbility[]): IPolicyAbilityHandlerCallback[];
}
