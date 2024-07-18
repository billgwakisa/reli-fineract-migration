import { ApiKeyGetResponseDto } from 'src/common/api-key/dtos/response/api-key.get.response.dto';
declare const ApiKeyCreateResponseDto_base: import("@nestjs/common").Type<Pick<ApiKeyGetResponseDto, "_id" | "key">>;
export declare class ApiKeyCreateResponseDto extends ApiKeyCreateResponseDto_base {
    secret: string;
}
export {};
