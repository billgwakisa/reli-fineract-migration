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
exports.AppEnvDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const app_enum_constant_1 = require("../constants/app.enum.constant");
const message_enum_constant_1 = require("../../common/message/constants/message.enum.constant");
class AppEnvDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { APP_NAME: { required: true, type: () => String }, APP_ENV: { required: true, enum: require("../constants/app.enum.constant").ENUM_APP_ENVIRONMENT }, APP_LANGUAGE: { required: true, enum: require("../../common/message/constants/message.enum.constant").ENUM_MESSAGE_LANGUAGE }, APP_TIMEZONE: { required: true, enum: require("../constants/app.enum.constant").ENUM_APP_TIMEZONE }, APP_DEBUG: { required: true, type: () => Boolean }, HTTP_ENABLE: { required: true, type: () => Boolean }, HTTP_HOST: { required: true, type: () => String }, HTTP_PORT: { required: true, type: () => Number }, URL_VERSIONING_ENABLE: { required: true, type: () => Boolean }, URL_VERSION: { required: true, type: () => Number }, JOB_ENABLE: { required: true, type: () => Boolean }, DATABASE_URI: { required: true, type: () => String }, DATABASE_DEBUG: { required: true, type: () => Boolean }, AUTH_JWT_SUBJECT: { required: true, type: () => String }, AUTH_JWT_AUDIENCE: { required: true, type: () => String }, AUTH_JWT_ISSUER: { required: true, type: () => String }, AUTH_JWT_ACCESS_TOKEN_EXPIRED: { required: true, type: () => String }, AUTH_JWT_ACCESS_TOKEN_SECRET_KEY: { required: true, type: () => String }, AUTH_JWT_REFRESH_TOKEN_EXPIRED: { required: true, type: () => String }, AUTH_JWT_REFRESH_TOKEN_SECRET_KEY: { required: true, type: () => String }, AWS_S3_CREDENTIAL_KEY: { required: false, type: () => String }, AWS_S3_CREDENTIAL_SECRET: { required: false, type: () => String }, AWS_S3_REGION: { required: false, type: () => String }, AWS_S3_BUCKET: { required: false, type: () => String }, AWS_SES_CREDENTIAL_KEY: { required: false, type: () => String }, AWS_SES_CREDENTIAL_SECRET: { required: false, type: () => String }, AWS_SES_REGION: { required: false, type: () => String }, AUTH_SOCIAL_GOOGLE_CLIENT_ID: { required: false, type: () => String }, AUTH_SOCIAL_GOOGLE_CLIENT_SECRET: { required: false, type: () => String }, AUTH_SOCIAL_APPLE_CLIENT_ID: { required: false, type: () => String }, AUTH_SOCIAL_APPLE_SIGN_IN_CLIENT_ID: { required: false, type: () => String }, SENTRY_DSN: { required: false, type: () => String } };
    }
}
exports.AppEnvDto = AppEnvDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "APP_NAME", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(app_enum_constant_1.ENUM_APP_ENVIRONMENT),
    __metadata("design:type", String)
], AppEnvDto.prototype, "APP_ENV", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(message_enum_constant_1.ENUM_MESSAGE_LANGUAGE),
    __metadata("design:type", String)
], AppEnvDto.prototype, "APP_LANGUAGE", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(app_enum_constant_1.ENUM_APP_TIMEZONE),
    __metadata("design:type", String)
], AppEnvDto.prototype, "APP_TIMEZONE", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], AppEnvDto.prototype, "APP_DEBUG", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], AppEnvDto.prototype, "HTTP_ENABLE", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "HTTP_HOST", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AppEnvDto.prototype, "HTTP_PORT", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], AppEnvDto.prototype, "URL_VERSIONING_ENABLE", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AppEnvDto.prototype, "URL_VERSION", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], AppEnvDto.prototype, "JOB_ENABLE", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "DATABASE_URI", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], AppEnvDto.prototype, "DATABASE_DEBUG", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_JWT_SUBJECT", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_JWT_AUDIENCE", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_JWT_ISSUER", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_JWT_ACCESS_TOKEN_EXPIRED", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_JWT_ACCESS_TOKEN_SECRET_KEY", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_JWT_REFRESH_TOKEN_EXPIRED", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_JWT_REFRESH_TOKEN_SECRET_KEY", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AWS_S3_CREDENTIAL_KEY", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AWS_S3_CREDENTIAL_SECRET", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AWS_S3_REGION", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AWS_S3_BUCKET", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AWS_SES_CREDENTIAL_KEY", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AWS_SES_CREDENTIAL_SECRET", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AWS_SES_REGION", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_SOCIAL_GOOGLE_CLIENT_ID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_SOCIAL_GOOGLE_CLIENT_SECRET", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_SOCIAL_APPLE_CLIENT_ID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "AUTH_SOCIAL_APPLE_SIGN_IN_CLIENT_ID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppEnvDto.prototype, "SENTRY_DSN", void 0);
//# sourceMappingURL=app.env.dto.js.map