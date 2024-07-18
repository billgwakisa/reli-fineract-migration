import { PipeTransform } from '@nestjs/common';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
export declare class UserStatusActivePipe implements PipeTransform {
    transform(value: UserDoc): Promise<UserDoc>;
}
export declare class UserStatusInactivePipe implements PipeTransform {
    transform(value: UserDoc): Promise<UserDoc>;
}
