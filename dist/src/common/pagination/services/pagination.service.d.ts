import { IPaginationOrder } from 'src/common/pagination/interfaces/pagination.interface';
import { IPaginationService } from 'src/common/pagination/interfaces/pagination.service.interface';
export declare class PaginationService implements IPaginationService {
    offset(page: number, perPage: number): number;
    totalPage(totalData: number, perPage: number): number;
    page(page?: number): number;
    perPage(perPage?: number): number;
    order(orderByValue?: string, orderDirectionValue?: import("../constants/pagination.enum.constant").ENUM_PAGINATION_ORDER_DIRECTION_TYPE, availableOrderBy?: string[]): IPaginationOrder;
    search(searchValue: string, availableSearch: string[]): Record<string, any>;
    filterEqual<T = string>(field: string, filterValue: T): Record<string, T>;
    filterNotEqual<T = string>(field: string, filterValue: T): Record<string, T>;
    filterContain(field: string, filterValue: string): Record<string, any>;
    filterContainFullMatch(field: string, filterValue: string): Record<string, any>;
    filterIn<T = string>(field: string, filterValue: T[]): Record<string, any>;
    filterNin<T = string>(field: string, filterValue: T[]): Record<string, any>;
    filterDate(field: string, filterValue: Date): Record<string, Date>;
}
