import { CountryGetResponseDto } from 'src/modules/country/dtos/response/country.get.response.dto';
import { RoleGetResponseDto } from 'src/modules/role/dtos/response/role.get.response.dto';
import { UserGetResponseDto } from 'src/modules/user/dtos/response/user.get.response.dto';
import { UserMobileNumberResponseDto } from 'src/modules/user/dtos/response/user.mobile-number.response.dto';
declare const UserProfileResponseDto_base: import("@nestjs/common").Type<Omit<UserGetResponseDto, "role" | "country" | "mobileNumber">>;
export declare class UserProfileResponseDto extends UserProfileResponseDto_base {
    readonly role: RoleGetResponseDto;
    readonly country: CountryGetResponseDto;
    readonly mobileNumber?: UserMobileNumberResponseDto;
}
export {};
