import { UserCreateRequestDto } from 'src/modules/user/dtos/request/user.create.request.dto';
declare const UserUpdateMobileNumberRequestDto_base: import("@nestjs/common").Type<Pick<UserCreateRequestDto, "country">>;
export declare class UserUpdateMobileNumberRequestDto extends UserUpdateMobileNumberRequestDto_base {
    readonly number: string;
}
export {};
