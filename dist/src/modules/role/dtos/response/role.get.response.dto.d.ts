import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
import { ENUM_POLICY_ROLE_TYPE } from 'src/common/policy/constants/policy.enum.constant';
import { RolePermissionDto } from 'src/modules/role/dtos/role.permission.dto';
export declare class RoleGetResponseDto extends DatabaseIdResponseDto {
    readonly name: string;
    readonly description?: string;
    readonly isActive: boolean;
    readonly type: ENUM_POLICY_ROLE_TYPE;
    readonly permissions: RolePermissionDto;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
