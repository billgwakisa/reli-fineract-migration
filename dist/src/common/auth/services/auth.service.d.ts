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
import { ConfigService } from '@nestjs/config';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { HelperEncryptionService } from 'src/common/helper/services/helper.encryption.service';
import { HelperHashService } from 'src/common/helper/services/helper.hash.service';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';
import { IAuthService } from 'src/common/auth/interfaces/auth.service.interface';
import { AuthJwtAccessPayloadDto } from 'src/common/auth/dtos/jwt/auth.jwt.access-payload.dto';
import { AuthJwtRefreshPayloadDto } from 'src/common/auth/dtos/jwt/auth.jwt.refresh-payload.dto';
import { IAuthPassword } from 'src/common/auth/interfaces/auth.interface';
import { AuthSocialApplePayloadDto } from 'src/common/auth/dtos/social/auth.social.apple-payload.dto';
import { AuthSocialGooglePayloadDto } from 'src/common/auth/dtos/social/auth.social.google-payload.dto';
import { ENUM_AUTH_LOGIN_FROM } from 'src/common/auth/constants/auth.enum.constant';
import { Document } from 'mongoose';
export declare class AuthService implements IAuthService {
    private readonly helperHashService;
    private readonly helperDateService;
    private readonly helperStringService;
    private readonly helperEncryptionService;
    private readonly configService;
    private readonly jwtAccessTokenSecretKey;
    private readonly jwtAccessTokenExpirationTime;
    private readonly jwtRefreshTokenSecretKey;
    private readonly jwtRefreshTokenExpirationTime;
    private readonly jwtPrefixAuthorization;
    private readonly jwtAudience;
    private readonly jwtIssuer;
    private readonly jwtSubject;
    private readonly passwordExpiredIn;
    private readonly passwordSaltLength;
    private readonly passwordAttempt;
    private readonly passwordMaxAttempt;
    private readonly appleClientId;
    private readonly appleSignInClientId;
    private readonly googleClient;
    constructor(helperHashService: HelperHashService, helperDateService: HelperDateService, helperStringService: HelperStringService, helperEncryptionService: HelperEncryptionService, configService: ConfigService);
    createAccessToken(payload: AuthJwtAccessPayloadDto): Promise<string>;
    validateAccessToken(token: string): Promise<boolean>;
    payloadAccessToken(token: string): Promise<AuthJwtAccessPayloadDto>;
    createRefreshToken(payload: AuthJwtRefreshPayloadDto): Promise<string>;
    validateRefreshToken(token: string): Promise<boolean>;
    payloadRefreshToken(token: string): Promise<AuthJwtRefreshPayloadDto>;
    validateUser(passwordString: string, passwordHash: string): Promise<boolean>;
    createPayloadAccessToken<T extends Document>(data: T, loginFrom: ENUM_AUTH_LOGIN_FROM): Promise<AuthJwtAccessPayloadDto>;
    createPayloadRefreshToken({ _id, loginFrom, loginDate, }: AuthJwtAccessPayloadDto): Promise<AuthJwtRefreshPayloadDto>;
    createSalt(length: number): Promise<string>;
    createPassword(password: string): Promise<IAuthPassword>;
    createPasswordRandom(): Promise<string>;
    checkPasswordExpired(passwordExpired: Date): Promise<boolean>;
    getTokenType(): Promise<string>;
    getAccessTokenExpirationTime(): Promise<number>;
    getRefreshTokenExpirationTime(): Promise<number>;
    getIssuer(): Promise<string>;
    getAudience(): Promise<string>;
    getSubject(): Promise<string>;
    getPasswordAttempt(): Promise<boolean>;
    getPasswordMaxAttempt(): Promise<number>;
    appleGetTokenInfo(idToken: string): Promise<AuthSocialApplePayloadDto>;
    googleGetTokenInfo(idToken: string): Promise<AuthSocialGooglePayloadDto>;
}
