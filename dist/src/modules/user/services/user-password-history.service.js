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
exports.UserPasswordHistoryService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const class_transformer_1 = require("class-transformer");
const helper_date_service_1 = require("../../../common/helper/services/helper.date.service");
const user_password_history_list_response_dto_1 = require("../dtos/response/user-password-history.list.response.dto");
const user_password_history_entity_1 = require("../repository/entities/user-password-history.entity");
const user_password_history_repository_1 = require("../repository/repositories/user-password-history.repository");
let UserPasswordHistoryService = class UserPasswordHistoryService {
    constructor(configService, helperDateService, userPasswordHistoryRepository) {
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.userPasswordHistoryRepository = userPasswordHistoryRepository;
        this.passwordPeriod = this.configService.get('auth.password.period');
    }
    async findAll(find, options) {
        return this.userPasswordHistoryRepository.findAll(find, options);
    }
    async findAllByUser(user, find, options) {
        return this.userPasswordHistoryRepository.findAll({ ...find, user }, options);
    }
    async findOneById(_id, options) {
        return this.userPasswordHistoryRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.userPasswordHistoryRepository.findOne(find, options);
    }
    async findOneByUser(user, password, options) {
        return this.userPasswordHistoryRepository.findOne({
            user: user._id,
            password: password.passwordHash,
        }, options);
    }
    async getTotal(find, options) {
        return this.userPasswordHistoryRepository.getTotal(find, options);
    }
    async getTotalByUser(user, find, options) {
        return this.userPasswordHistoryRepository.getTotal({ ...find, user }, options);
    }
    async createByUser(user, options) {
        const create = new user_password_history_entity_1.UserPasswordHistoryEntity();
        create.user = user._id;
        create.by = user._id;
        create.password = user.password;
        return this.userPasswordHistoryRepository.create(create, options);
    }
    async createByAdmin(user, by, options) {
        const create = new user_password_history_entity_1.UserPasswordHistoryEntity();
        create.user = user._id;
        create.by = by;
        create.password = user.password;
        return this.userPasswordHistoryRepository.create(create, options);
    }
    async mapList(userHistories) {
        return (0, class_transformer_1.plainToInstance)(user_password_history_list_response_dto_1.UserPasswordHistoryListResponseDto, userHistories);
    }
    async checkPasswordPeriodByUser(user, password, options) {
        const pass = await this.userPasswordHistoryRepository.findOne({
            user: user._id,
            password: password.passwordHash,
        }, options);
        const today = this.helperDateService.create();
        const passwordPeriod = this.helperDateService.forwardInSeconds(this.passwordPeriod, { fromDate: pass.createdAt });
        return today > passwordPeriod;
    }
    async getPasswordPeriod() {
        return this.passwordPeriod;
    }
};
exports.UserPasswordHistoryService = UserPasswordHistoryService;
exports.UserPasswordHistoryService = UserPasswordHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        helper_date_service_1.HelperDateService,
        user_password_history_repository_1.UserPasswordHistoryRepository])
], UserPasswordHistoryService);
//# sourceMappingURL=user-password-history.service.js.map