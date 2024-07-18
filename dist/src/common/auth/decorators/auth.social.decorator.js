"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSocialAppleProtected = exports.AuthSocialGoogleProtected = void 0;
const common_1 = require("@nestjs/common");
const auth_social_apple_guard_1 = require("../guards/social/auth.social.apple.guard");
const auth_social_google_guard_1 = require("../guards/social/auth.social.google.guard");
function AuthSocialGoogleProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_social_google_guard_1.AuthSocialGoogleGuard));
}
exports.AuthSocialGoogleProtected = AuthSocialGoogleProtected;
function AuthSocialAppleProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_social_apple_guard_1.AuthSocialAppleGuard));
}
exports.AuthSocialAppleProtected = AuthSocialAppleProtected;
//# sourceMappingURL=auth.social.decorator.js.map