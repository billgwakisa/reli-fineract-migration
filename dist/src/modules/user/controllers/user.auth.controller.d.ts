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
import { Request } from 'express';
import { Connection } from 'mongoose';
import { AuthJwtRefreshPayloadDto } from 'src/common/auth/dtos/jwt/auth.jwt.refresh-payload.dto';
import { AuthSocialApplePayloadDto } from 'src/common/auth/dtos/social/auth.social.apple-payload.dto';
import { AuthSocialGooglePayloadDto } from 'src/common/auth/dtos/social/auth.social.google-payload.dto';
import { AuthService } from 'src/common/auth/services/auth.service';
import { AwsS3Service } from 'src/common/aws/services/aws.s3.service';
import { IFile } from 'src/common/file/interfaces/file.interface';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { CountryService } from 'src/modules/country/services/country.service';
import { UserChangePasswordRequestDto } from 'src/modules/user/dtos/request/user.change-password.request.dto';
import { UserLoginRequestDto } from 'src/modules/user/dtos/request/user.login.request.dto';
import { UserUpdateProfileRequestDto } from 'src/modules/user/dtos/request/user.update-profile.request.dto';
import { UserLoginResponseDto } from 'src/modules/user/dtos/response/user.login.response.dto';
import { UserProfileResponseDto } from 'src/modules/user/dtos/response/user.profile.response.dto';
import { UserRefreshResponseDto } from 'src/modules/user/dtos/response/user.refresh.response.dto';
import { IUserDoc } from 'src/modules/user/interfaces/user.interface';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
import { UserLoginHistoryService } from 'src/modules/user/services/user-login-history.service';
import { UserPasswordHistoryService } from 'src/modules/user/services/user-password-history.service';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserAuthController {
    private readonly databaseConnection;
    private readonly userService;
    private readonly awsS3Service;
    private readonly authService;
    private readonly userPasswordHistoryService;
    private readonly countryService;
    private readonly userLoginHistoryService;
    constructor(databaseConnection: Connection, userService: UserService, awsS3Service: AwsS3Service, authService: AuthService, userPasswordHistoryService: UserPasswordHistoryService, countryService: CountryService, userLoginHistoryService: UserLoginHistoryService);
    loginWithCredential({ email, password }: UserLoginRequestDto, request: Request): Promise<IResponse<UserLoginResponseDto>>;
    loginWithGoogle({ email }: AuthSocialGooglePayloadDto, request: Request): Promise<IResponse<UserLoginResponseDto>>;
    loginWithApple({ email }: AuthSocialApplePayloadDto, request: Request): Promise<IResponse<UserLoginResponseDto>>;
    refresh(refreshToken: string, { loginFrom }: AuthJwtRefreshPayloadDto, user: IUserDoc): Promise<IResponse<UserRefreshResponseDto>>;
    changePassword(body: UserChangePasswordRequestDto, user: UserDoc): Promise<void>;
    profile(user: IUserDoc): Promise<IResponse<UserProfileResponseDto>>;
    updateProfile(user: UserDoc, { country, ...body }: UserUpdateProfileRequestDto): Promise<void>;
    updateProfileUpload(user: UserDoc, file: IFile): Promise<void>;
}
