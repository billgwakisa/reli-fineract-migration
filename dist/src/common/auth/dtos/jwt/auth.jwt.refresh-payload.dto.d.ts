import { AuthJwtAccessPayloadDto } from 'src/common/auth/dtos/jwt/auth.jwt.access-payload.dto';
declare const AuthJwtRefreshPayloadDto_base: import("@nestjs/common").Type<Omit<AuthJwtAccessPayloadDto, "type" | "email" | "role" | "permissions">>;
export declare class AuthJwtRefreshPayloadDto extends AuthJwtRefreshPayloadDto_base {
}
export {};
