"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserProtected = void 0;
const common_1 = require("@nestjs/common");
const user_guard_1 = require("../guards/user.guard");
function UserProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_guard_1.UserGuard));
}
exports.UserProtected = UserProtected;
exports.User = (0, common_1.createParamDecorator)((_, ctx) => {
    const { __user } = ctx
        .switchToHttp()
        .getRequest();
    return __user;
});
//# sourceMappingURL=user.decorator.js.map