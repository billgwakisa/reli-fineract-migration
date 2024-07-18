"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyPublicProtected = exports.ApiKeyPrivateProtected = exports.ApiKeyPayload = void 0;
const common_1 = require("@nestjs/common");
const api_key_constant_1 = require("../constants/api-key.constant");
const api_key_enum_constant_1 = require("../constants/api-key.enum.constant");
const api_key_x_api_key_guard_1 = require("../guards/x-api-key/api-key.x-api-key.guard");
const api_key_x_api_key_type_guard_1 = require("../guards/x-api-key/api-key.x-api-key.type.guard");
exports.ApiKeyPayload = (0, common_1.createParamDecorator)((data, ctx) => {
    const { apiKey } = ctx
        .switchToHttp()
        .getRequest();
    return data ? apiKey[data] : apiKey;
});
function ApiKeyPrivateProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_x_api_key_guard_1.ApiKeyXApiKeyGuard, api_key_x_api_key_type_guard_1.ApiKeyXApiKeyTypeGuard), (0, common_1.SetMetadata)(api_key_constant_1.API_KEY_X_TYPE_META_KEY, [api_key_enum_constant_1.ENUM_API_KEY_TYPE.PRIVATE]));
}
exports.ApiKeyPrivateProtected = ApiKeyPrivateProtected;
function ApiKeyPublicProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_x_api_key_guard_1.ApiKeyXApiKeyGuard, api_key_x_api_key_type_guard_1.ApiKeyXApiKeyTypeGuard), (0, common_1.SetMetadata)(api_key_constant_1.API_KEY_X_TYPE_META_KEY, [api_key_enum_constant_1.ENUM_API_KEY_TYPE.PUBLIC]));
}
exports.ApiKeyPublicProtected = ApiKeyPublicProtected;
//# sourceMappingURL=api-key.decorator.js.map