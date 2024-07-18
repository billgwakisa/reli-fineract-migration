"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthUpdateProfileDoc = exports.UserAuthUploadProfileDoc = exports.UserAuthProfileDoc = exports.UserAuthChangePasswordDoc = exports.UserAuthRefreshDoc = exports.UserAuthLoginSocialAppleDoc = exports.UserAuthLoginSocialGoogleDoc = exports.UserAuthLoginCredentialDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_enum_constant_1 = require("../../../common/doc/constants/doc.enum.constant");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const file_single_dto_1 = require("../../../common/file/dtos/file.single.dto");
const user_change_password_request_dto_1 = require("../dtos/request/user.change-password.request.dto");
const user_login_request_dto_1 = require("../dtos/request/user.login.request.dto");
const user_update_profile_request_dto_1 = require("../dtos/request/user.update-profile.request.dto");
const user_login_response_dto_1 = require("../dtos/response/user.login.response.dto");
const user_profile_response_dto_1 = require("../dtos/response/user.profile.response.dto");
const user_refresh_response_dto_1 = require("../dtos/response/user.refresh.response.dto");
function UserAuthLoginCredentialDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'login with email and password',
    }), (0, doc_decorator_1.DocAuth)({ xApiKey: true }), (0, doc_decorator_1.DocRequest)({
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: user_login_request_dto_1.UserLoginRequestDto,
    }), (0, doc_decorator_1.DocResponse)('user.loginWithCredential', {
        dto: user_login_response_dto_1.UserLoginResponseDto,
    }));
}
exports.UserAuthLoginCredentialDoc = UserAuthLoginCredentialDoc;
function UserAuthLoginSocialGoogleDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'login with social google',
    }), (0, doc_decorator_1.DocAuth)({ xApiKey: true, google: true }), (0, doc_decorator_1.DocResponse)('user.loginWithSocialGoogle', {
        dto: user_login_response_dto_1.UserLoginResponseDto,
    }));
}
exports.UserAuthLoginSocialGoogleDoc = UserAuthLoginSocialGoogleDoc;
function UserAuthLoginSocialAppleDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'login with social apple',
    }), (0, doc_decorator_1.DocAuth)({ xApiKey: true, apple: true }), (0, doc_decorator_1.DocResponse)('user.loginWithSocialApple', {
        dto: user_login_response_dto_1.UserLoginResponseDto,
    }));
}
exports.UserAuthLoginSocialAppleDoc = UserAuthLoginSocialAppleDoc;
function UserAuthRefreshDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'refresh a token',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtRefreshToken: true,
    }), (0, doc_decorator_1.DocResponse)('user.refresh', {
        dto: user_refresh_response_dto_1.UserRefreshResponseDto,
    }));
}
exports.UserAuthRefreshDoc = UserAuthRefreshDoc;
function UserAuthChangePasswordDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'change password',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocRequest)({
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: user_change_password_request_dto_1.UserChangePasswordRequestDto,
    }), (0, doc_decorator_1.DocResponse)('user.changePassword'));
}
exports.UserAuthChangePasswordDoc = UserAuthChangePasswordDoc;
function UserAuthProfileDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'get profile',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocResponse)('user.profile', {
        dto: user_profile_response_dto_1.UserProfileResponseDto,
    }));
}
exports.UserAuthProfileDoc = UserAuthProfileDoc;
function UserAuthUploadProfileDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'update profile photo',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocRequestFile)({
        dto: file_single_dto_1.FileSingleDto,
    }), (0, doc_decorator_1.DocResponse)('user.upload', {
        httpStatus: common_1.HttpStatus.CREATED,
    }));
}
exports.UserAuthUploadProfileDoc = UserAuthUploadProfileDoc;
function UserAuthUpdateProfileDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'update profile',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocRequest)({
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: user_update_profile_request_dto_1.UserUpdateProfileRequestDto,
    }), (0, doc_decorator_1.DocResponse)('user.updateProfile'));
}
exports.UserAuthUpdateProfileDoc = UserAuthUpdateProfileDoc;
//# sourceMappingURL=user.auth.doc.js.map