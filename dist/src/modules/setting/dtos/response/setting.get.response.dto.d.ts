import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
import { ENUM_SETTING_DATA_TYPE } from 'src/modules/setting/constants/setting.enum.constant';
export declare class SettingGetResponseDto<T = any> extends DatabaseIdResponseDto {
    readonly name: string;
    readonly description?: string;
    readonly type: ENUM_SETTING_DATA_TYPE;
    readonly value: T;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
