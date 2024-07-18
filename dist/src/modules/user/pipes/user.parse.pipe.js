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
exports.UserParsePipe = void 0;
const common_1 = require("@nestjs/common");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_service_1 = require("../services/user.service");
let UserParsePipe = class UserParsePipe {
    constructor(userService) {
        this.userService = userService;
    }
    async transform(value) {
        const user = await this.userService.findOneById(value);
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        return user;
    }
};
exports.UserParsePipe = UserParsePipe;
exports.UserParsePipe = UserParsePipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserParsePipe);
//# sourceMappingURL=user.parse.pipe.js.map