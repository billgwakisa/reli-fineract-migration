import { ENUM_PAGINATION_ORDER_DIRECTION_TYPE } from 'src/common/pagination/constants/pagination.enum.constant';
import { ResponseDto, ResponseMetadataDto } from 'src/common/response/dtos/response.dto';
export declare class ResponsePagingMetadataCursorDto {
    nextPage: string;
    previousPage: string;
    firstPage: string;
    lastPage: string;
}
export declare class ResponsePagingMetadataRequestDto {
    search: string;
    filters: Record<string, string | number | boolean | Array<string | number | boolean>>;
    page: number;
    perPage: number;
    orderBy: string;
    orderDirection: ENUM_PAGINATION_ORDER_DIRECTION_TYPE;
    availableSearch: string[];
    availableOrderBy: string[];
    availableOrderDirection: ENUM_PAGINATION_ORDER_DIRECTION_TYPE[];
}
export declare class ResponsePagingMetadataPaginationDto extends ResponsePagingMetadataRequestDto {
    total?: number;
    totalPage?: number;
}
export declare class ResponsePagingMetadataDto extends ResponseMetadataDto {
    cursor?: ResponsePagingMetadataCursorDto;
    pagination?: ResponsePagingMetadataPaginationDto;
}
declare const ResponsePagingDto_base: import("@nestjs/common").Type<Pick<ResponseDto, "statusCode" | "message">>;
export declare class ResponsePagingDto extends ResponsePagingDto_base {
    readonly _metadata: ResponsePagingMetadataDto;
    data?: Record<string, any>[];
}
export {};
