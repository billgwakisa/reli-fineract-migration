"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusInactivePipe = exports.UserStatusActivePipe = void 0;
const common_1 = require("@nestjs/common");
const user_enum_constant_1 = require("../constants/user.enum.constant");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
let UserStatusActivePipe = class UserStatusActivePipe {
    async transform(value) {
        if (value.status === user_enum_constant_1.ENUM_USER_STATUS.ACTIVE) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.STATUS_INVALID_ERROR,
                message: 'user.error.statusInvalid',
            });
        }
        return value;
    }
};
exports.UserStatusActivePipe = UserStatusActivePipe;
exports.UserStatusActivePipe = UserStatusActivePipe = __decorate([
    (0, common_1.Injectable)()
], UserStatusActivePipe);
let UserStatusInactivePipe = class UserStatusInactivePipe {
    async transform(value) {
        if (value.status === user_enum_constant_1.ENUM_USER_STATUS.ACTIVE) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.STATUS_INVALID_ERROR,
                message: 'user.error.statusInvalid',
            });
        }
        return value;
    }
};
exports.UserStatusInactivePipe = UserStatusInactivePipe;
exports.UserStatusInactivePipe = UserStatusInactivePipe = __decorate([
    (0, common_1.Injectable)()
], UserStatusInactivePipe);
//# sourceMappingURL=user.status.pipe.js.map