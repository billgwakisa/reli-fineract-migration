import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { IPaginationFilterOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationFilterInBooleanPipe(field: string, defaultValue: boolean[], options?: IPaginationFilterOptions): Type<PipeTransform>;
