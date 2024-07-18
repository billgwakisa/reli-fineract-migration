export declare class CountryCreateRequestDto {
    readonly name: string;
    readonly alpha2Code: string;
    readonly alpha3Code: string;
    readonly numericCode: string;
    readonly fipsCode: string;
    readonly phoneCode: string[];
    readonly continent: string;
    readonly timeZone: string;
    readonly domain?: string;
}
