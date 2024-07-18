import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthJwtAccessPayloadDto } from 'src/common/auth/dtos/jwt/auth.jwt.access-payload.dto';
declare const AuthJwtAccessStrategy_base: new (...args: any[]) => Strategy;
export declare class AuthJwtAccessStrategy extends AuthJwtAccessStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(data: AuthJwtAccessPayloadDto): Promise<AuthJwtAccessPayloadDto>;
}
export {};
