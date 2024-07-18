import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
import { ENUM_API_KEY_TYPE } from 'src/common/api-key/constants/api-key.enum.constant';
export declare class ApiKeyPayloadDto extends DatabaseIdResponseDto {
    name: string;
    type: ENUM_API_KEY_TYPE;
    key: string;
}
