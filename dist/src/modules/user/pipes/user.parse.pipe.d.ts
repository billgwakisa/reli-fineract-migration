import { PipeTransform } from '@nestjs/common';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserParsePipe implements PipeTransform {
    private readonly userService;
    constructor(userService: UserService);
    transform(value: any): Promise<UserDoc>;
}
