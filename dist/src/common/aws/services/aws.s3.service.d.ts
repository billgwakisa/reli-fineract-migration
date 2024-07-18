/// <reference types="node" />
/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { IAwsS3PutItem, IAwsS3PutItemOptions, IAwsS3PutItemWithAclOptions, IAwsS3RandomFilename } from 'src/common/aws/interfaces/aws.interface';
import { IAwsS3Service } from 'src/common/aws/interfaces/aws.s3-service.interface';
import { Readable } from 'stream';
import { HeadBucketCommandOutput } from '@aws-sdk/client-s3';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';
import { AwsS3Dto } from 'src/common/aws/dtos/aws.s3.dto';
import { AwsS3MultipartDto, AwsS3MultipartPartDto } from 'src/common/aws/dtos/aws.s3-multipart.dto';
export declare class AwsS3Service implements IAwsS3Service {
    private readonly configService;
    private readonly helperStringService;
    private readonly s3Client;
    private readonly bucket;
    private readonly baseUrl;
    constructor(configService: ConfigService, helperStringService: HelperStringService);
    checkBucketExistence(): Promise<HeadBucketCommandOutput>;
    listBucket(): Promise<string[]>;
    listItemInBucket(prefix?: string): Promise<AwsS3Dto[]>;
    getItemInBucket(pathWithFilename: string): Promise<Readable | ReadableStream<any> | Blob>;
    putItemInBucket(file: IAwsS3PutItem, options?: IAwsS3PutItemOptions): Promise<AwsS3Dto>;
    putItemInBucketWithAcl(file: IAwsS3PutItem, options?: IAwsS3PutItemWithAclOptions): Promise<AwsS3Dto>;
    deleteItemInBucket(pathWithFilename: string): Promise<void>;
    deleteItemsInBucket(pathWithFilename: string[]): Promise<void>;
    deleteFolder(dir: string): Promise<void>;
    createMultiPart(file: IAwsS3PutItem, maxPartNumber: number, options?: IAwsS3PutItemOptions): Promise<AwsS3MultipartDto>;
    createMultiPartWithAcl(file: IAwsS3PutItem, maxPartNumber: number, options?: IAwsS3PutItemWithAclOptions): Promise<AwsS3MultipartDto>;
    uploadPart(multipart: AwsS3MultipartDto, partNumber: number, content: string | Uint8Array | Buffer): Promise<AwsS3MultipartPartDto>;
    updateMultiPart({ size, parts, ...others }: AwsS3MultipartDto, part: AwsS3MultipartPartDto): Promise<AwsS3MultipartDto>;
    completeMultipart(multipart: AwsS3MultipartDto): Promise<void>;
    abortMultipart(multipart: AwsS3MultipartDto): Promise<void>;
    getFilenameFromCompletedUrl(completedUrl: string): Promise<string>;
    createRandomFilename(path?: string): Promise<IAwsS3RandomFilename>;
}
