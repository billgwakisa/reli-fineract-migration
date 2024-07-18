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
exports.MigrationUserSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../common/auth/services/auth.service");
const user_service_1 = require("../../modules/user/services/user.service");
const role_service_1 = require("../../modules/role/services/role.service");
const user_enum_constant_1 = require("../../modules/user/constants/user.enum.constant");
const country_service_1 = require("../../modules/country/services/country.service");
const message_enum_constant_1 = require("../../common/message/constants/message.enum.constant");
const user_password_history_service_1 = require("../../modules/user/services/user-password-history.service");
const user_state_history_service_1 = require("../../modules/user/services/user-state-history.service");
let MigrationUserSeed = class MigrationUserSeed {
    constructor(authService, userService, userPasswordHistoryService, userStateHistoryService, roleService, countryService) {
        this.authService = authService;
        this.userService = userService;
        this.userPasswordHistoryService = userPasswordHistoryService;
        this.userStateHistoryService = userStateHistoryService;
        this.roleService = roleService;
        this.countryService = countryService;
    }
    async seeds() {
        const password = 'aaAA@123';
        const passwordHash = await this.authService.createPassword(password);
        const superAdminRole = await this.roleService.findOneByName('superadmin');
        const adminRole = await this.roleService.findOneByName('admin');
        const memberRole = await this.roleService.findOneByName('member');
        const userRole = await this.roleService.findOneByName('user');
        const country = await this.countryService.findOneByAlpha2(message_enum_constant_1.ENUM_MESSAGE_LANGUAGE.EN);
        try {
            const user1 = await this.userService.create({
                role: superAdminRole._id,
                name: 'superadmin',
                email: 'superadmin@mail.com',
                country: country._id,
            }, passwordHash, user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.ADMIN);
            const user2 = await this.userService.create({
                role: adminRole._id,
                name: 'admin',
                email: 'admin@mail.com',
                country: country._id,
            }, passwordHash, user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.ADMIN);
            const user3 = await this.userService.create({
                role: userRole._id,
                name: 'user',
                email: 'user@mail.com',
                country: country._id,
            }, passwordHash, user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.ADMIN);
            const user4 = await this.userService.create({
                role: memberRole._id,
                name: 'member',
                email: 'member@mail.com',
                country: country._id,
            }, passwordHash, user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.ADMIN);
            await this.userStateHistoryService.createCreated(user1, user1._id);
            await this.userStateHistoryService.createCreated(user2, user2._id);
            await this.userStateHistoryService.createCreated(user3, user3._id);
            await this.userStateHistoryService.createCreated(user4, user4._id);
            await this.userPasswordHistoryService.createByAdmin(user1, user1._id);
            await this.userPasswordHistoryService.createByAdmin(user2, user1._id);
            await this.userPasswordHistoryService.createByAdmin(user3, user1._id);
            await this.userPasswordHistoryService.createByAdmin(user4, user1._id);
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.userService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
exports.MigrationUserSeed = MigrationUserSeed;
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:user',
        describe: 'seed users',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationUserSeed.prototype, "seeds", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:user',
        describe: 'remove users',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MigrationUserSeed.prototype, "remove", null);
exports.MigrationUserSeed = MigrationUserSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        user_password_history_service_1.UserPasswordHistoryService,
        user_state_history_service_1.UserStateHistoryService,
        role_service_1.RoleService,
        country_service_1.CountryService])
], MigrationUserSeed);
//# sourceMappingURL=migration.user.seed.js.map