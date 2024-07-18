import { PipeTransform } from '@nestjs/common';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
export declare class UserNotBlockedPipe implements PipeTransform {
    transform(value: UserDoc): Promise<UserDoc>;
}
