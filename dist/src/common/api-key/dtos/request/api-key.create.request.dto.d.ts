import { ENUM_API_KEY_TYPE } from 'src/common/api-key/constants/api-key.enum.constant';
import { ApiKeyUpdateDateRequestDto } from 'src/common/api-key/dtos/request/api-key.update-date.request.dto';
import { ApiKeyUpdateRequestDto } from 'src/common/api-key/dtos/request/api-key.update.request.dto';
declare const ApiKeyCreateRequestDto_base: import("@nestjs/common").Type<ApiKeyUpdateRequestDto & Partial<ApiKeyUpdateDateRequestDto>>;
export declare class ApiKeyCreateRequestDto extends ApiKeyCreateRequestDto_base {
    type: ENUM_API_KEY_TYPE;
}
export declare class ApiKeyCreateRawRequestDto extends ApiKeyCreateRequestDto {
    key: string;
    secret: string;
}
export {};
