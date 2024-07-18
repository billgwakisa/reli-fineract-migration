import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { IPaginationFilterOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationFilterNinEnumPipe<T>(field: string, defaultValue: T, defaultEnum: Record<string, any>, options?: IPaginationFilterOptions): Type<PipeTransform>;
