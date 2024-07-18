import { PipeTransform } from '@nestjs/common';
import { SettingDoc } from 'src/modules/setting/repository/entities/setting.entity';
import { SettingService } from 'src/modules/setting/services/setting.service';
export declare class SettingParsePipe implements PipeTransform {
    private readonly settingService;
    constructor(settingService: SettingService);
    transform(value: any): Promise<SettingDoc>;
}
