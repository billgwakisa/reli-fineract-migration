import { ENUM_POLICY_ROLE_TYPE } from 'src/common/policy/constants/policy.enum.constant';
export declare class UserLoginResponseDto {
    readonly tokenType: string;
    readonly roleType: ENUM_POLICY_ROLE_TYPE;
    readonly expiresIn: number;
    readonly accessToken: string;
    readonly refreshToken: string;
}
