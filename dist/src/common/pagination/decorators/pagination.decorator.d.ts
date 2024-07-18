import { IPaginationFilterDateOptions, IPaginationFilterEqualOptions, IPaginationFilterOptions, IPaginationQueryOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationQuery(options?: IPaginationQueryOptions): ParameterDecorator;
export declare function PaginationQueryFilterInBoolean(field: string, defaultValue: boolean[], options?: IPaginationFilterOptions): ParameterDecorator;
export declare function PaginationQueryFilterInEnum<T>(field: string, defaultValue: T, defaultEnum: Record<string, any>, options?: IPaginationFilterOptions): ParameterDecorator;
export declare function PaginationQueryFilterNinEnum<T>(field: string, defaultValue: T, defaultEnum: Record<string, any>, options?: IPaginationFilterOptions): ParameterDecorator;
export declare function PaginationQueryFilterNotEqual(field: string, options?: IPaginationFilterEqualOptions): ParameterDecorator;
export declare function PaginationQueryFilterEqual(field: string, options?: IPaginationFilterEqualOptions): ParameterDecorator;
export declare function PaginationQueryFilterStringContain(field: string, options?: IPaginationFilterOptions): ParameterDecorator;
export declare function PaginationQueryFilterDate(field: string, options?: IPaginationFilterDateOptions): ParameterDecorator;
