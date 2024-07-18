import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { IPaginationFilterEqualOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationFilterNotEqualPipe(field: string, options?: IPaginationFilterEqualOptions): Type<PipeTransform>;
