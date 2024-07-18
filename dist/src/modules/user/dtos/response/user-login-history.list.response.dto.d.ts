import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
export declare class UserLoginHistoryListResponseDto extends DatabaseIdResponseDto {
    readonly user: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
