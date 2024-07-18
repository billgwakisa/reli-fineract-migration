import { RoleListResponseDto } from 'src/modules/role/dtos/response/role.list.response.dto';
import { ENUM_USER_GENDER, ENUM_USER_SIGN_UP_FROM } from 'src/modules/user/constants/user.enum.constant';
import { UserGetResponseDto } from 'src/modules/user/dtos/response/user.get.response.dto';
import { UserMobileNumberResponseDto } from 'src/modules/user/dtos/response/user.mobile-number.response.dto';
declare const UserListResponseDto_base: import("@nestjs/common").Type<Omit<UserGetResponseDto, "role" | "passwordExpired" | "passwordCreated" | "address" | "mobileNumber" | "signUpDate" | "signUpFrom" | "gender">>;
export declare class UserListResponseDto extends UserListResponseDto_base {
    readonly role: RoleListResponseDto;
    readonly mobileNumber?: UserMobileNumberResponseDto;
    readonly passwordExpired: Date;
    readonly passwordCreated: Date;
    readonly signUpDate: Date;
    readonly signUpFrom: ENUM_USER_SIGN_UP_FROM;
    readonly address?: string;
    readonly gender?: ENUM_USER_GENDER;
}
export {};
