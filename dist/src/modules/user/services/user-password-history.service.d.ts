import { ConfigService } from '@nestjs/config';
import { IAuthPassword } from 'src/common/auth/interfaces/auth.interface';
import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseGetTotalOptions } from 'src/common/database/interfaces/database.interface';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { UserPasswordHistoryListResponseDto } from 'src/modules/user/dtos/response/user-password-history.list.response.dto';
import { IUserPasswordHistoryService } from 'src/modules/user/interfaces/user-password-history.service.interface';
import { UserPasswordHistoryDoc } from 'src/modules/user/repository/entities/user-password-history.entity';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
import { UserPasswordHistoryRepository } from 'src/modules/user/repository/repositories/user-password-history.repository';
export declare class UserPasswordHistoryService implements IUserPasswordHistoryService {
    private readonly configService;
    private readonly helperDateService;
    private readonly userPasswordHistoryRepository;
    private readonly passwordPeriod;
    constructor(configService: ConfigService, helperDateService: HelperDateService, userPasswordHistoryRepository: UserPasswordHistoryRepository);
    findAll(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<UserPasswordHistoryDoc[]>;
    findAllByUser(user: string, find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<UserPasswordHistoryDoc[]>;
    findOneById(_id: string, options?: IDatabaseFindOneOptions): Promise<UserPasswordHistoryDoc>;
    findOne(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<UserPasswordHistoryDoc>;
    findOneByUser(user: UserDoc, password: IAuthPassword, options?: IDatabaseFindOneOptions): Promise<UserPasswordHistoryDoc>;
    getTotal(find?: Record<string, any>, options?: IDatabaseGetTotalOptions): Promise<number>;
    getTotalByUser(user: string, find?: Record<string, any>, options?: IDatabaseGetTotalOptions): Promise<number>;
    createByUser(user: UserDoc, options?: IDatabaseCreateOptions): Promise<UserPasswordHistoryDoc>;
    createByAdmin(user: UserDoc, by: string, options?: IDatabaseCreateOptions): Promise<UserPasswordHistoryDoc>;
    mapList(userHistories: UserPasswordHistoryDoc[]): Promise<UserPasswordHistoryListResponseDto[]>;
    checkPasswordPeriodByUser(user: UserDoc, password: IAuthPassword, options?: IDatabaseFindOneOptions): Promise<boolean>;
    getPasswordPeriod(): Promise<number>;
}
