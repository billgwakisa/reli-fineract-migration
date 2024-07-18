import { UserCreateRequestDto } from 'src/modules/user/dtos/request/user.create.request.dto';
declare const UserUpdateProfileRequestDto_base: import("@nestjs/common").Type<Pick<UserCreateRequestDto, "name" | "country">>;
export declare class UserUpdateProfileRequestDto extends UserUpdateProfileRequestDto_base {
    readonly familyName?: string;
    readonly address?: string;
}
export {};
