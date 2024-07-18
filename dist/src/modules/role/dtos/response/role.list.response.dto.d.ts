import { RoleGetResponseDto } from 'src/modules/role/dtos/response/role.get.response.dto';
declare const RoleListResponseDto_base: import("@nestjs/common").Type<Omit<RoleGetResponseDto, "permissions">>;
export declare class RoleListResponseDto extends RoleListResponseDto_base {
    readonly permissions: number;
}
export {};
