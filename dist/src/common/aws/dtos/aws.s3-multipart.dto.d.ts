import { AwsS3Dto } from 'src/common/aws/dtos/aws.s3.dto';
export declare class AwsS3MultipartPartDto {
    eTag: string;
    partNumber: number;
    size: number;
}
export declare class AwsS3MultipartDto extends AwsS3Dto {
    uploadId: string;
    lastPartNumber: number;
    maxPartNumber: number;
    parts: AwsS3MultipartPartDto[];
}
