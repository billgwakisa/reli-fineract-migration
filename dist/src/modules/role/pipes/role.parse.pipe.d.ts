import { PipeTransform } from '@nestjs/common';
import { RoleDoc } from 'src/modules/role/repository/entities/role.entity';
import { RoleService } from 'src/modules/role/services/role.service';
export declare class RoleParsePipe implements PipeTransform {
    private readonly roleService;
    constructor(roleService: RoleService);
    transform(value: any): Promise<RoleDoc>;
}
