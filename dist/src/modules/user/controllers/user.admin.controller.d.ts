/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { UserService } from 'src/modules/user/services/user.service';
import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
import { UserListResponseDto } from 'src/modules/user/dtos/response/user.list.response.dto';
import { UserProfileResponseDto } from 'src/modules/user/dtos/response/user.profile.response.dto';
import { DatabaseIdResponseDto } from 'src/common/database/dtos/response/database.id.response.dto';
import { UserCreateRequestDto } from 'src/modules/user/dtos/request/user.create.request.dto';
import { EmailService } from 'src/modules/email/services/email.service';
import { RoleService } from 'src/modules/role/services/role.service';
import { AuthService } from 'src/common/auth/services/auth.service';
import { Connection } from 'mongoose';
import { CountryService } from 'src/modules/country/services/country.service';
import { UserStateHistoryService } from 'src/modules/user/services/user-state-history.service';
import { UserPasswordHistoryService } from 'src/modules/user/services/user-password-history.service';
import { UserStateHistoryListResponseDto } from 'src/modules/user/dtos/response/user-state-history.list.response.dto';
import { UserPasswordHistoryListResponseDto } from 'src/modules/user/dtos/response/user-password-history.list.response.dto';
import { UserLoginHistoryListResponseDto } from 'src/modules/user/dtos/response/user-login-history.list.response.dto';
import { UserLoginHistoryService } from 'src/modules/user/services/user-login-history.service';
export declare class UserAdminController {
    private readonly databaseConnection;
    private readonly paginationService;
    private readonly roleService;
    private readonly emailService;
    private readonly authService;
    private readonly userService;
    private readonly userStateHistoryService;
    private readonly userPasswordHistoryService;
    private readonly userLoginHistoryService;
    private readonly countryService;
    constructor(databaseConnection: Connection, paginationService: PaginationService, roleService: RoleService, emailService: EmailService, authService: AuthService, userService: UserService, userStateHistoryService: UserStateHistoryService, userPasswordHistoryService: UserPasswordHistoryService, userLoginHistoryService: UserLoginHistoryService, countryService: CountryService);
    list({ _search, _limit, _offset, _order }: PaginationListDto, status: Record<string, any>, blocked: Record<string, any>, role: Record<string, any>): Promise<IResponsePaging<UserListResponseDto>>;
    get(user: UserDoc): Promise<IResponse<UserProfileResponseDto>>;
    stateHistoryList(user: UserDoc, { _search, _limit, _offset, _order }: PaginationListDto): Promise<IResponsePaging<UserStateHistoryListResponseDto>>;
    passwordHistoryList(user: UserDoc, { _search, _limit, _offset, _order }: PaginationListDto): Promise<IResponsePaging<UserPasswordHistoryListResponseDto>>;
    loginHistoryList(user: UserDoc, { _search, _limit, _offset, _order }: PaginationListDto): Promise<IResponsePaging<UserLoginHistoryListResponseDto>>;
    create({ email, role, name, country }: UserCreateRequestDto, _id: string): Promise<IResponse<DatabaseIdResponseDto>>;
    inactive(user: UserDoc, _id: string): Promise<void>;
    active(user: UserDoc, _id: string): Promise<void>;
    blocked(user: UserDoc, _id: string): Promise<void>;
    updatePassword(user: UserDoc, _id: string): Promise<void>;
}
