import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { RoleCreateRequestDto } from 'src/modules/role/dtos/request/role.create.request.dto';
import { RoleUpdateRequestDto } from 'src/modules/role/dtos/request/role.update.request.dto';
import { RoleGetResponseDto } from 'src/modules/role/dtos/response/role.get.response.dto';
import { RoleListResponseDto } from 'src/modules/role/dtos/response/role.list.response.dto';
import { RoleDoc } from 'src/modules/role/repository/entities/role.entity';
import { RoleService } from 'src/modules/role/services/role.service';
import { UserService } from 'src/modules/user/services/user.service';
export declare class RoleAdminController {
    private readonly paginationService;
    private readonly roleService;
    private readonly userService;
    constructor(paginationService: PaginationService, roleService: RoleService, userService: UserService);
    list({ _search, _limit, _offset, _order }: PaginationListDto, isActive: Record<string, any>, type: Record<string, any>): Promise<IResponsePaging<RoleListResponseDto>>;
    get(role: RoleDoc): Promise<IResponse<RoleGetResponseDto>>;
    create({ name, description, type, permissions }: RoleCreateRequestDto): Promise<IResponse<DatabaseIdResponseDto>>;
    update(role: RoleDoc, { description, permissions, type }: RoleUpdateRequestDto): Promise<IResponse<DatabaseIdResponseDto>>;
    delete(role: RoleDoc): Promise<void>;
    inactive(role: RoleDoc): Promise<void>;
    active(role: RoleDoc): Promise<void>;
}
