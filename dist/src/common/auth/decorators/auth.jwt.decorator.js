"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthJwtRefreshProtected = exports.AuthJwtAccessProtected = exports.AuthJwtToken = exports.AuthJwtPayload = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const auth_jwt_access_guard_1 = require("../guards/jwt/auth.jwt.access.guard");
const auth_jwt_refresh_guard_1 = require("../guards/jwt/auth.jwt.refresh.guard");
exports.AuthJwtPayload = (0, common_2.createParamDecorator)((data, ctx) => {
    const { user } = ctx
        .switchToHttp()
        .getRequest();
    return data ? user[data] : user;
});
exports.AuthJwtToken = (0, common_2.createParamDecorator)((_, ctx) => {
    const { headers } = ctx.switchToHttp().getRequest();
    const { authorization } = headers;
    const authorizations = authorization?.split(' ') ?? [];
    return authorizations.length >= 2 ? authorizations[1] : undefined;
});
function AuthJwtAccessProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_jwt_access_guard_1.AuthJwtAccessGuard));
}
exports.AuthJwtAccessProtected = AuthJwtAccessProtected;
function AuthJwtRefreshProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_jwt_refresh_guard_1.AuthJwtRefreshGuard));
}
exports.AuthJwtRefreshProtected = AuthJwtRefreshProtected;
//# sourceMappingURL=auth.jwt.decorator.js.map