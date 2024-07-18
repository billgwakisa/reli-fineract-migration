import { ENUM_AUTH_LOGIN_FROM } from 'src/common/auth/constants/auth.enum.constant';
import { ENUM_POLICY_ROLE_TYPE, ENUM_POLICY_SUBJECT } from 'src/common/policy/constants/policy.enum.constant';
export declare class AuthJwtAccessPayloadPermissionDto {
    subject: ENUM_POLICY_SUBJECT;
    action: string;
}
export declare class AuthJwtAccessPayloadDto {
    readonly loginDate: Date;
    readonly loginFrom: ENUM_AUTH_LOGIN_FROM;
    readonly _id: string;
    readonly email: string;
    readonly role: string;
    readonly type: ENUM_POLICY_ROLE_TYPE;
    readonly permissions: AuthJwtAccessPayloadPermissionDto[];
}
