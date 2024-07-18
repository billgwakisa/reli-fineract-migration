import { PipeTransform } from '@nestjs/common';
import { CountryDoc } from 'src/modules/country/repository/entities/country.entity';
import { CountryService } from 'src/modules/country/services/country.service';
export declare class CountryParsePipe implements PipeTransform {
    private readonly countryService;
    constructor(countryService: CountryService);
    transform(value: any): Promise<CountryDoc>;
}
