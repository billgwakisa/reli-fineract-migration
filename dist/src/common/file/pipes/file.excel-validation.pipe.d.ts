import { PipeTransform } from '@nestjs/common/interfaces';
import { IFileRows } from 'src/common/file/interfaces/file.interface';
export declare class FileExcelValidationPipe<T> implements PipeTransform {
    private readonly dto;
    constructor(dto: any);
    transform(value: IFileRows<T>[]): Promise<IFileRows<T>[]>;
    validate(value: IFileRows<T>[]): Promise<void>;
    validateParse(value: IFileRows<T>[], classDtos: any): Promise<IFileRows<T>[]>;
}
