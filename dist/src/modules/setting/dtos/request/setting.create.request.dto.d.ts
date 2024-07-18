import { ENUM_SETTING_DATA_TYPE } from 'src/modules/setting/constants/setting.enum.constant';
export declare class SettingCreateRequestDto {
    readonly name: string;
    readonly description?: string;
    readonly type: ENUM_SETTING_DATA_TYPE;
    readonly value: string;
}
