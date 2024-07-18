import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthJwtRefreshPayloadDto } from 'src/common/auth/dtos/jwt/auth.jwt.refresh-payload.dto';
declare const AuthJwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class AuthJwtRefreshStrategy extends AuthJwtRefreshStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(data: AuthJwtRefreshPayloadDto): Promise<AuthJwtRefreshPayloadDto>;
}
export {};
