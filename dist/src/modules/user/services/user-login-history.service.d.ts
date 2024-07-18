import { Request } from 'express';
import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseGetTotalOptions } from 'src/common/database/interfaces/database.interface';
import { UserLoginHistoryCreateRequest } from 'src/modules/user/dtos/request/user-login-history.create.request.dto';
import { UserLoginHistoryListResponseDto } from 'src/modules/user/dtos/response/user-login-history.list.response.dto';
import { IUserLoginHistoryService } from 'src/modules/user/interfaces/user-login-history.service.interface';
import { UserLoginHistoryDoc } from 'src/modules/user/repository/entities/user-login-history.entity';
import { UserLoginHistoryRepository } from 'src/modules/user/repository/repositories/user-login-history.repository';
export declare class UserLoginHistoryService implements IUserLoginHistoryService {
    private readonly userLoginHistoryRepository;
    constructor(userLoginHistoryRepository: UserLoginHistoryRepository);
    findAll(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<UserLoginHistoryDoc[]>;
    findAllByUser(user: string, find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<UserLoginHistoryDoc[]>;
    findOneById(_id: string, options?: IDatabaseFindOneOptions): Promise<UserLoginHistoryDoc>;
    findOne(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<UserLoginHistoryDoc>;
    getTotal(find?: Record<string, any>, options?: IDatabaseGetTotalOptions): Promise<number>;
    getTotalByUser(user: string, options?: IDatabaseGetTotalOptions): Promise<number>;
    create(request: Request, { user }: UserLoginHistoryCreateRequest, options?: IDatabaseCreateOptions): Promise<UserLoginHistoryDoc>;
    mapList(userHistories: UserLoginHistoryDoc[]): Promise<UserLoginHistoryListResponseDto[]>;
}
