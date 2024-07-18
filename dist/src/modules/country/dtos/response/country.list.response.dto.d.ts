import { CountryGetResponseDto } from 'src/modules/country/dtos/response/country.get.response.dto';
declare const CountryListResponseDto_base: import("@nestjs/common").Type<Omit<CountryGetResponseDto, "alpha3Code" | "numericCode" | "fipsCode" | "continent" | "timeZone" | "domain">>;
export declare class CountryListResponseDto extends CountryListResponseDto_base {
    readonly alpha3Code: string;
    readonly fipsCode: string;
    readonly continent: string;
    readonly domain?: string;
    readonly timeZone: string;
    readonly numericCode: string;
}
export {};
