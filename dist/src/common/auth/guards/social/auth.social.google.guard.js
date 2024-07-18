"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSocialGoogleGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_status_code_constant_1 = require("../../constants/auth.status-code.constant");
const auth_service_1 = require("../../services/auth.service");
let AuthSocialGoogleGuard = class AuthSocialGoogleGuard {
    constructor(authService) {
        this.authService = authService;
    }
    async canActivate(context) {
        const request = context
            .switchToHttp()
            .getRequest();
        const { authorization } = request.headers;
        const acArr = authorization?.split('Bearer ') ?? [];
        if (acArr.length !== 2) {
            throw new common_1.UnauthorizedException({
                statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.SOCIAL_GOOGLE_ERROR,
                message: 'auth.error.socialGoogle',
            });
        }
        const accessToken = acArr[1];
        try {
            const payload = await this.authService.googleGetTokenInfo(accessToken);
            request.user = {
                email: payload.email,
            };
            return true;
        }
        catch (err) {
            throw new common_1.UnauthorizedException({
                statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.SOCIAL_GOOGLE_ERROR,
                message: 'auth.error.socialGoogle',
            });
        }
    }
};
exports.AuthSocialGoogleGuard = AuthSocialGoogleGuard;
exports.AuthSocialGoogleGuard = AuthSocialGoogleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthSocialGoogleGuard);
//# sourceMappingURL=auth.social.google.guard.js.map