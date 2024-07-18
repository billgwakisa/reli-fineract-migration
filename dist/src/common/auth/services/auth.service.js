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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const verify_apple_id_token_1 = __importDefault(require("verify-apple-id-token"));
const google_auth_library_1 = require("google-auth-library");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const helper_encryption_service_1 = require("../../helper/services/helper.encryption.service");
const helper_hash_service_1 = require("../../helper/services/helper.hash.service");
const helper_string_service_1 = require("../../helper/services/helper.string.service");
const auth_jwt_access_payload_dto_1 = require("../dtos/jwt/auth.jwt.access-payload.dto");
const class_transformer_1 = require("class-transformer");
let AuthService = class AuthService {
    constructor(helperHashService, helperDateService, helperStringService, helperEncryptionService, configService) {
        this.helperHashService = helperHashService;
        this.helperDateService = helperDateService;
        this.helperStringService = helperStringService;
        this.helperEncryptionService = helperEncryptionService;
        this.configService = configService;
        this.jwtAccessTokenSecretKey = this.configService.get('auth.jwt.accessToken.secretKey');
        this.jwtAccessTokenExpirationTime = this.configService.get('auth.jwt.accessToken.expirationTime');
        this.jwtRefreshTokenSecretKey = this.configService.get('auth.jwt.refreshToken.secretKey');
        this.jwtRefreshTokenExpirationTime = this.configService.get('auth.jwt.refreshToken.expirationTime');
        this.jwtPrefixAuthorization = this.configService.get('auth.jwt.prefixAuthorization');
        this.jwtSubject = this.configService.get('auth.jwt.subject');
        this.jwtAudience = this.configService.get('auth.jwt.audience');
        this.jwtIssuer = this.configService.get('auth.jwt.issuer');
        this.passwordExpiredIn = this.configService.get('auth.password.expiredIn');
        this.passwordSaltLength = this.configService.get('auth.password.saltLength');
        this.passwordAttempt = this.configService.get('auth.password.attempt');
        this.passwordMaxAttempt = this.configService.get('auth.password.maxAttempt');
        this.appleClientId = this.configService.get('auth.apple.clientId');
        this.appleSignInClientId = this.configService.get('auth.apple.signInClientId');
        this.googleClient = new google_auth_library_1.OAuth2Client(this.configService.get('auth.google.clientId'), this.configService.get('auth.google.clientSecret'));
    }
    async createAccessToken(payload) {
        return this.helperEncryptionService.jwtEncrypt({ ...payload }, {
            secretKey: this.jwtAccessTokenSecretKey,
            expiredIn: this.jwtAccessTokenExpirationTime,
            audience: this.jwtAudience,
            issuer: this.jwtIssuer,
            subject: this.jwtSubject,
        });
    }
    async validateAccessToken(token) {
        return this.helperEncryptionService.jwtVerify(token, {
            secretKey: this.jwtAccessTokenSecretKey,
            audience: this.jwtAudience,
            issuer: this.jwtIssuer,
            subject: this.jwtSubject,
        });
    }
    async payloadAccessToken(token) {
        return this.helperEncryptionService.jwtDecrypt(token);
    }
    async createRefreshToken(payload) {
        return this.helperEncryptionService.jwtEncrypt({ ...payload }, {
            secretKey: this.jwtRefreshTokenSecretKey,
            expiredIn: this.jwtRefreshTokenExpirationTime,
            audience: this.jwtAudience,
            issuer: this.jwtIssuer,
            subject: this.jwtSubject,
        });
    }
    async validateRefreshToken(token) {
        return this.helperEncryptionService.jwtVerify(token, {
            secretKey: this.jwtRefreshTokenSecretKey,
            audience: this.jwtAudience,
            issuer: this.jwtIssuer,
            subject: this.jwtSubject,
        });
    }
    async payloadRefreshToken(token) {
        return this.helperEncryptionService.jwtDecrypt(token);
    }
    async validateUser(passwordString, passwordHash) {
        return this.helperHashService.bcryptCompare(passwordString, passwordHash);
    }
    async createPayloadAccessToken(data, loginFrom) {
        const loginDate = this.helperDateService.create();
        const plainObject = data.toObject();
        return (0, class_transformer_1.plainToInstance)(auth_jwt_access_payload_dto_1.AuthJwtAccessPayloadDto, {
            _id: plainObject._id,
            type: plainObject.role.type,
            role: plainObject.role._id,
            email: plainObject.email,
            permissions: plainObject.role.permissions,
            loginDate,
            loginFrom,
        });
    }
    async createPayloadRefreshToken({ _id, loginFrom, loginDate, }) {
        return {
            _id,
            loginFrom,
            loginDate,
        };
    }
    async createSalt(length) {
        return this.helperHashService.randomSalt(length);
    }
    async createPassword(password) {
        const salt = await this.createSalt(this.passwordSaltLength);
        const passwordExpired = this.helperDateService.forwardInSeconds(this.passwordExpiredIn);
        const passwordCreated = this.helperDateService.create();
        const passwordHash = this.helperHashService.bcrypt(password, salt);
        return {
            passwordHash,
            passwordExpired,
            passwordCreated,
            salt,
        };
    }
    async createPasswordRandom() {
        return this.helperStringService.random(10);
    }
    async checkPasswordExpired(passwordExpired) {
        const today = this.helperDateService.create();
        const passwordExpiredConvert = this.helperDateService.create(passwordExpired);
        return today > passwordExpiredConvert;
    }
    async getTokenType() {
        return this.jwtPrefixAuthorization;
    }
    async getAccessTokenExpirationTime() {
        return this.jwtAccessTokenExpirationTime;
    }
    async getRefreshTokenExpirationTime() {
        return this.jwtRefreshTokenExpirationTime;
    }
    async getIssuer() {
        return this.jwtIssuer;
    }
    async getAudience() {
        return this.jwtAudience;
    }
    async getSubject() {
        return this.jwtSubject;
    }
    async getPasswordAttempt() {
        return this.passwordAttempt;
    }
    async getPasswordMaxAttempt() {
        return this.passwordMaxAttempt;
    }
    async appleGetTokenInfo(idToken) {
        const payload = await (0, verify_apple_id_token_1.default)({
            idToken,
            clientId: [this.appleClientId, this.appleSignInClientId],
        });
        return { email: payload.email };
    }
    async googleGetTokenInfo(idToken) {
        try {
            const login = await this.googleClient.verifyIdToken({
                idToken: idToken,
            });
            const payload = login.getPayload();
            return { email: payload.email };
        }
        catch (err) {
            throw err;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_hash_service_1.HelperHashService,
        helper_date_service_1.HelperDateService,
        helper_string_service_1.HelperStringService,
        helper_encryption_service_1.HelperEncryptionService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map