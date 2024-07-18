"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTimeout = exports.RequestLanguage = void 0;
const common_1 = require("@nestjs/common");
const request_constant_1 = require("../constants/request.constant");
exports.RequestLanguage = (0, common_1.createParamDecorator)((_, ctx) => {
    const { __language } = ctx.switchToHttp().getRequest();
    return __language;
});
function RequestTimeout(seconds) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(request_constant_1.REQUEST_CUSTOM_TIMEOUT_META_KEY, true), (0, common_1.SetMetadata)(request_constant_1.REQUEST_CUSTOM_TIMEOUT_VALUE_META_KEY, seconds));
}
exports.RequestTimeout = RequestTimeout;
//# sourceMappingURL=request.decorator.js.map