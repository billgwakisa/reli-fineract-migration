import { ApiKeyPayloadDto } from 'src/common/api-key/dtos/api-key.payload.dto';
export declare class ApiKeyGetResponseDto extends ApiKeyPayloadDto {
    hash: string;
    isActive: boolean;
    startDate?: Date;
    endDate?: Date;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
