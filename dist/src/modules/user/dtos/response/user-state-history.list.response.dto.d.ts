import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
import { ENUM_USER_HISTORY_STATE } from 'src/modules/user/constants/user-history.enum.constant';
export declare class UserStateHistoryListResponseDto extends DatabaseIdResponseDto {
    readonly user: string;
    readonly beforeState: ENUM_USER_HISTORY_STATE;
    readonly afterState: ENUM_USER_HISTORY_STATE;
    readonly by: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
