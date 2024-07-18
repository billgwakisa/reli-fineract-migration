export declare class ResponseMetadataDto {
    language: string;
    timestamp: number;
    timezone: string;
    path: string;
    version: string;
    repoVersion: string;
    [key: string]: any;
}
export declare class ResponseDto {
    statusCode: number;
    message: string;
    _metadata: ResponseMetadataDto;
    data?: Record<string, any>;
}
