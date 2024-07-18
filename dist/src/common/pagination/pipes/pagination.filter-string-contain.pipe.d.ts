import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { IPaginationFilterOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationFilterStringContainPipe(field: string, options?: IPaginationFilterOptions): Type<PipeTransform>;
