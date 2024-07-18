import { RoleUpdateRequestDto } from 'src/modules/role/dtos/request/role.update.request.dto';
declare const RoleCreateRequestDto_base: import("@nestjs/common").Type<Omit<RoleUpdateRequestDto, "description"> & Pick<RoleUpdateRequestDto, "description">>;
export declare class RoleCreateRequestDto extends RoleCreateRequestDto_base {
    readonly name: string;
}
export {};
