import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseGetTotalOptions } from 'src/common/database/interfaces/database.interface';
import { ENUM_USER_HISTORY_STATE } from 'src/modules/user/constants/user-history.enum.constant';
import { UserStateHistoryListResponseDto } from 'src/modules/user/dtos/response/user-state-history.list.response.dto';
import { IUserStateHistoryService } from 'src/modules/user/interfaces/user-state-history.service.interface';
import { UserStateHistoryDoc } from 'src/modules/user/repository/entities/user-state-history.entity';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
import { UserStateHistoryRepository } from 'src/modules/user/repository/repositories/user-state-history.repository';
export declare class UserStateHistoryService implements IUserStateHistoryService {
    private readonly userStateHistoryRepository;
    constructor(userStateHistoryRepository: UserStateHistoryRepository);
    findAll(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<UserStateHistoryDoc[]>;
    findAllByUser(user: string, find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<UserStateHistoryDoc[]>;
    findOneById(_id: string, options?: IDatabaseFindOneOptions): Promise<UserStateHistoryDoc>;
    findOne(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<UserStateHistoryDoc>;
    getTotal(find?: Record<string, any>, options?: IDatabaseGetTotalOptions): Promise<number>;
    getTotalByUser(user: string, find?: Record<string, any>, options?: IDatabaseGetTotalOptions): Promise<number>;
    setState(user: UserDoc): Promise<ENUM_USER_HISTORY_STATE>;
    createCreated(user: UserDoc, by: string, options?: IDatabaseCreateOptions): Promise<UserStateHistoryDoc>;
    createActive(user: UserDoc, by: string, options?: IDatabaseCreateOptions): Promise<UserStateHistoryDoc>;
    createInactive(user: UserDoc, by: string, options?: IDatabaseCreateOptions): Promise<UserStateHistoryDoc>;
    createBlocked(user: UserDoc, by: string, options?: IDatabaseCreateOptions): Promise<UserStateHistoryDoc>;
    createDeleted(user: UserDoc, by: string, options?: IDatabaseCreateOptions): Promise<UserStateHistoryDoc>;
    mapList(userHistories: UserStateHistoryDoc[]): Promise<UserStateHistoryListResponseDto[]>;
}
