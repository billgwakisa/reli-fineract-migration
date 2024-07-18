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
exports.RoleParsePipe = void 0;
const common_1 = require("@nestjs/common");
const role_status_code_constant_1 = require("../constants/role.status-code.constant");
const role_service_1 = require("../services/role.service");
let RoleParsePipe = class RoleParsePipe {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async transform(value) {
        const role = await this.roleService.findOneById(value);
        if (!role) {
            throw new common_1.NotFoundException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.NOT_FOUND_ERROR,
                message: 'role.error.notFound',
            });
        }
        return role;
    }
};
exports.RoleParsePipe = RoleParsePipe;
exports.RoleParsePipe = RoleParsePipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleParsePipe);
//# sourceMappingURL=role.parse.pipe.js.map