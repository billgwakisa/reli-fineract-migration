import { PipeTransform } from '@nestjs/common';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
export declare class UserNotSelfPipe implements PipeTransform {
    protected readonly request: IRequestApp;
    constructor(request: IRequestApp);
    transform(value: string): Promise<string>;
}
