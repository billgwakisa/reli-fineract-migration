import { UserCreateRequestDto } from 'src/modules/user/dtos/request/user.create.request.dto';
declare const UserSignUpRequestDto_base: import("@nestjs/common").Type<Omit<UserCreateRequestDto, "role">>;
export declare class UserSignUpRequestDto extends UserSignUpRequestDto_base {
    readonly password: string;
}
export {};
