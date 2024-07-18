"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotBlockedPipe = void 0;
const common_1 = require("@nestjs/common");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
let UserNotBlockedPipe = class UserNotBlockedPipe {
    async transform(value) {
        if (value.blocked) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.BLOCKED_INVALID_ERROR,
                message: 'user.error.blockedInvalid',
            });
        }
        return value;
    }
};
exports.UserNotBlockedPipe = UserNotBlockedPipe;
exports.UserNotBlockedPipe = UserNotBlockedPipe = __decorate([
    (0, common_1.Injectable)()
], UserNotBlockedPipe);
//# sourceMappingURL=user.blocked.pipe.js.map