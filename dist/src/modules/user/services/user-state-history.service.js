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
exports.UserStateHistoryService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const user_history_enum_constant_1 = require("../constants/user-history.enum.constant");
const user_enum_constant_1 = require("../constants/user.enum.constant");
const user_state_history_list_response_dto_1 = require("../dtos/response/user-state-history.list.response.dto");
const user_state_history_entity_1 = require("../repository/entities/user-state-history.entity");
const user_state_history_repository_1 = require("../repository/repositories/user-state-history.repository");
let UserStateHistoryService = class UserStateHistoryService {
    constructor(userStateHistoryRepository) {
        this.userStateHistoryRepository = userStateHistoryRepository;
    }
    async findAll(find, options) {
        return this.userStateHistoryRepository.findAll(find, options);
    }
    async findAllByUser(user, find, options) {
        return this.userStateHistoryRepository.findAll({ ...find, user }, options);
    }
    async findOneById(_id, options) {
        return this.userStateHistoryRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.userStateHistoryRepository.findOne(find, options);
    }
    async getTotal(find, options) {
        return this.userStateHistoryRepository.getTotal(find, options);
    }
    async getTotalByUser(user, find, options) {
        return this.userStateHistoryRepository.getTotal({ ...find, user }, options);
    }
    async setState(user) {
        if (user.blocked) {
            return user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.BLOCKED;
        }
        switch (user.status) {
            case user_enum_constant_1.ENUM_USER_STATUS.DELETED:
                return user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.DELETED;
            case user_enum_constant_1.ENUM_USER_STATUS.ACTIVE:
                return user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.ACTIVE;
            case user_enum_constant_1.ENUM_USER_STATUS.INACTIVE:
            default:
                return user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.INACTIVE;
        }
    }
    async createCreated(user, by, options) {
        const create = new user_state_history_entity_1.UserStateHistoryEntity();
        create.afterState = user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.ACTIVE;
        create.beforeState = user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.CREATED;
        create.user = user._id;
        create.by = by;
        return this.userStateHistoryRepository.create(create, options);
    }
    async createActive(user, by, options) {
        const beforeState = await this.setState(user);
        const create = new user_state_history_entity_1.UserStateHistoryEntity();
        create.afterState = user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.ACTIVE;
        create.beforeState = beforeState;
        create.user = user._id;
        create.by = by;
        return this.userStateHistoryRepository.create(create, options);
    }
    async createInactive(user, by, options) {
        const beforeState = await this.setState(user);
        const create = new user_state_history_entity_1.UserStateHistoryEntity();
        create.afterState = user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.INACTIVE;
        create.beforeState = beforeState;
        create.user = user._id;
        create.by = by;
        return this.userStateHistoryRepository.create(create, options);
    }
    async createBlocked(user, by, options) {
        const beforeState = await this.setState(user);
        const create = new user_state_history_entity_1.UserStateHistoryEntity();
        create.afterState = user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.BLOCKED;
        create.beforeState = beforeState;
        create.user = user._id;
        create.by = by;
        return this.userStateHistoryRepository.create(create, options);
    }
    async createDeleted(user, by, options) {
        const beforeState = await this.setState(user);
        const create = new user_state_history_entity_1.UserStateHistoryEntity();
        create.afterState = user_history_enum_constant_1.ENUM_USER_HISTORY_STATE.DELETED;
        create.beforeState = beforeState;
        create.user = user._id;
        create.by = by;
        return this.userStateHistoryRepository.create(create, options);
    }
    async mapList(userHistories) {
        return (0, class_transformer_1.plainToInstance)(user_state_history_list_response_dto_1.UserStateHistoryListResponseDto, userHistories);
    }
};
exports.UserStateHistoryService = UserStateHistoryService;
exports.UserStateHistoryService = UserStateHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_state_history_repository_1.UserStateHistoryRepository])
], UserStateHistoryService);
//# sourceMappingURL=user-state-history.service.js.map