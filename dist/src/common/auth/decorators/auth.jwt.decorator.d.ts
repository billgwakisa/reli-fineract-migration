import { AuthJwtAccessPayloadDto } from 'src/common/auth/dtos/jwt/auth.jwt.access-payload.dto';
export declare const AuthJwtPayload: <T = AuthJwtAccessPayloadDto>(...dataOrPipes: (string | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
export declare const AuthJwtToken: (...dataOrPipes: unknown[]) => ParameterDecorator;
export declare function AuthJwtAccessProtected(): MethodDecorator;
export declare function AuthJwtRefreshProtected(): MethodDecorator;
