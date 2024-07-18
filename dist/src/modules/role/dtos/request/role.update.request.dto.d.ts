import { ENUM_POLICY_ROLE_TYPE } from 'src/common/policy/constants/policy.enum.constant';
import { RolePermissionDto } from 'src/modules/role/dtos/role.permission.dto';
export declare class RoleUpdateRequestDto {
    readonly description?: string;
    readonly type: ENUM_POLICY_ROLE_TYPE;
    readonly permissions: RolePermissionDto[];
}
