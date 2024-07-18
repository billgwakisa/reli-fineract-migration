import { IDatabaseCreateOptions, IDatabaseExistOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseGetTotalOptions, IDatabaseManyOptions, IDatabaseCreateManyOptions, IDatabaseSaveOptions } from 'src/common/database/interfaces/database.interface';
import { RoleCreateRequestDto } from 'src/modules/role/dtos/request/role.create.request.dto';
import { RoleUpdateRequestDto } from 'src/modules/role/dtos/request/role.update.request.dto';
import { RoleGetResponseDto } from 'src/modules/role/dtos/response/role.get.response.dto';
import { RoleListResponseDto } from 'src/modules/role/dtos/response/role.list.response.dto';
import { IRoleService } from 'src/modules/role/interfaces/role.service.interface';
import { RoleDoc } from 'src/modules/role/repository/entities/role.entity';
import { RoleRepository } from 'src/modules/role/repository/repositories/role.repository';
export declare class RoleService implements IRoleService {
    private readonly roleRepository;
    constructor(roleRepository: RoleRepository);
    findAll(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<RoleDoc[]>;
    findOneById(_id: string, options?: IDatabaseFindOneOptions): Promise<RoleDoc>;
    findOne(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<RoleDoc>;
    findOneByName(name: string, options?: IDatabaseFindOneOptions): Promise<RoleDoc>;
    getTotal(find?: Record<string, any>, options?: IDatabaseGetTotalOptions): Promise<number>;
    existByName(name: string, options?: IDatabaseExistOptions): Promise<boolean>;
    create({ name, description, type, permissions }: RoleCreateRequestDto, options?: IDatabaseCreateOptions): Promise<RoleDoc>;
    update(repository: RoleDoc, { permissions, type, description }: RoleUpdateRequestDto, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    active(repository: RoleDoc, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    inactive(repository: RoleDoc, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    delete(repository: RoleDoc, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
    createMany(data: RoleCreateRequestDto[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
    mapList(roles: RoleDoc[]): Promise<RoleListResponseDto[]>;
    mapGet(role: RoleDoc): Promise<RoleGetResponseDto>;
}
