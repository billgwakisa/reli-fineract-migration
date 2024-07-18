import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
export declare class UserPasswordHistoryListResponseDto extends DatabaseIdResponseDto {
    readonly user: string;
    readonly password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
