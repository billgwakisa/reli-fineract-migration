import { IFileUploadMultiple, IFileUploadMultipleField, IFileUploadMultipleFieldOptions, IFileUploadSingle } from 'src/common/file/interfaces/file.interface';
export declare function FileUploadSingle(options?: IFileUploadSingle): MethodDecorator;
export declare function FileUploadMultiple(options?: IFileUploadMultiple): MethodDecorator;
export declare function FileUploadMultipleFields(fields: IFileUploadMultipleField[], options?: IFileUploadMultipleFieldOptions): MethodDecorator;
export declare const FilePartNumber: () => ParameterDecorator;
