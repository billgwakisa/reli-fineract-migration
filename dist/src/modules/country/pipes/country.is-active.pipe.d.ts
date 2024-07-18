import { PipeTransform } from '@nestjs/common';
import { CountryDoc } from 'src/modules/country/repository/entities/country.entity';
export declare class CountryActivePipe implements PipeTransform {
    transform(value: CountryDoc): Promise<CountryDoc>;
}
export declare class CountryInactivePipe implements PipeTransform {
    transform(value: CountryDoc): Promise<CountryDoc>;
}
