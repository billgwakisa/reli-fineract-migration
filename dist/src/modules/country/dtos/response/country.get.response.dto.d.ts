import { AwsS3Dto } from 'src/common/aws/dtos/aws.s3.dto';
import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
export declare class CountryGetResponseDto extends DatabaseIdResponseDto {
    readonly name: string;
    readonly alpha2Code: string;
    readonly alpha3Code: string;
    readonly numericCode: string;
    readonly fipsCode: string;
    readonly phoneCode: string[];
    readonly continent: string;
    readonly timeZone: string;
    readonly domain?: string;
    readonly image?: AwsS3Dto;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
