"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleInactivePipe = exports.RoleActivePipe = void 0;
const common_1 = require("@nestjs/common");
const role_status_code_constant_1 = require("../constants/role.status-code.constant");
let RoleActivePipe = class RoleActivePipe {
    async transform(value) {
        if (!value.isActive) {
            throw new common_1.BadRequestException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
                message: 'role.error.isActiveInvalid',
            });
        }
        return value;
    }
};
exports.RoleActivePipe = RoleActivePipe;
exports.RoleActivePipe = RoleActivePipe = __decorate([
    (0, common_1.Injectable)()
], RoleActivePipe);
let RoleInactivePipe = class RoleInactivePipe {
    async transform(value) {
        if (value.isActive) {
            throw new common_1.BadRequestException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.IS_ACTIVE_ERROR,
                message: 'role.error.isActiveInvalid',
            });
        }
        return value;
    }
};
exports.RoleInactivePipe = RoleInactivePipe;
exports.RoleInactivePipe = RoleInactivePipe = __decorate([
    (0, common_1.Injectable)()
], RoleInactivePipe);
//# sourceMappingURL=role.is-active.pipe.js.map