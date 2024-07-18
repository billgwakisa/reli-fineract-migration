import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { IPaginationFilterEqualOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationFilterEqualPipe(field: string, options?: IPaginationFilterEqualOptions): Type<PipeTransform>;
