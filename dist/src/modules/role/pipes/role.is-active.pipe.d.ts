import { PipeTransform } from '@nestjs/common';
import { RoleDoc } from 'src/modules/role/repository/entities/role.entity';
export declare class RoleActivePipe implements PipeTransform {
    transform(value: RoleDoc): Promise<RoleDoc>;
}
export declare class RoleInactivePipe implements PipeTransform {
    transform(value: RoleDoc): Promise<RoleDoc>;
}
