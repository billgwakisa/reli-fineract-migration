import { IResponseOptions, IResponseFileExcelOptions } from 'src/common/response/interfaces/response.interface';
export declare function Response(messagePath: string, options?: IResponseOptions): MethodDecorator;
export declare function ResponseFileExcel(options?: IResponseFileExcelOptions): MethodDecorator;
export declare function ResponsePaging(messagePath: string, options?: IResponseOptions): MethodDecorator;
