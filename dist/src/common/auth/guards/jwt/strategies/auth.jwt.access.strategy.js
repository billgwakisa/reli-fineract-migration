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
exports.AuthJwtAccessStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AuthJwtAccessStrategy = class AuthJwtAccessStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwtAccess') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderWithScheme(configService.get('auth.jwt.prefixAuthorization')),
            ignoreExpiration: false,
            jsonWebTokenOptions: {
                ignoreNotBefore: true,
                audience: configService.get('auth.jwt.audience'),
                issuer: configService.get('auth.jwt.issuer'),
                subject: configService.get('auth.jwt.subject'),
            },
            secretOrKey: configService.get('auth.jwt.accessToken.secretKey'),
        });
        this.configService = configService;
    }
    async validate(data) {
        return data;
    }
};
exports.AuthJwtAccessStrategy = AuthJwtAccessStrategy;
exports.AuthJwtAccessStrategy = AuthJwtAccessStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AuthJwtAccessStrategy);
//# sourceMappingURL=auth.jwt.access.strategy.js.map