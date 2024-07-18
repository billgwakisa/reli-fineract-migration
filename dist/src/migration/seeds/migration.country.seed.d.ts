import { CountryService } from 'src/modules/country/services/country.service';
export declare class MigrationCountrySeed {
    private readonly countryService;
    constructor(countryService: CountryService);
    seeds(): Promise<void>;
    remove(): Promise<void>;
}
