import { SettingFileResponseDto } from 'src/modules/setting/dtos/response/setting.file.response.dto';
import { SettingLanguageResponseDto } from 'src/modules/setting/dtos/response/setting.language.response.dto';
import { SettingTimezoneResponseDto } from 'src/modules/setting/dtos/response/setting.timezone.response.dto';
export declare class SettingCoreResponseDto {
    file: SettingFileResponseDto;
    language: SettingLanguageResponseDto;
    timezone: SettingTimezoneResponseDto;
}
