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
exports.UserLoginHistoryService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const user_login_history_list_response_dto_1 = require("../dtos/response/user-login-history.list.response.dto");
const user_login_history_entity_1 = require("../repository/entities/user-login-history.entity");
const user_login_history_repository_1 = require("../repository/repositories/user-login-history.repository");
let UserLoginHistoryService = class UserLoginHistoryService {
    constructor(userLoginHistoryRepository) {
        this.userLoginHistoryRepository = userLoginHistoryRepository;
    }
    async findAll(find, options) {
        return this.userLoginHistoryRepository.findAll(find, options);
    }
    async findAllByUser(user, find, options) {
        return this.userLoginHistoryRepository.findAll({ user, ...find }, options);
    }
    async findOneById(_id, options) {
        return this.userLoginHistoryRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.userLoginHistoryRepository.findOne(find, options);
    }
    async getTotal(find, options) {
        return this.userLoginHistoryRepository.getTotal(find, options);
    }
    async getTotalByUser(user, options) {
        return this.userLoginHistoryRepository.getTotal({ user }, options);
    }
    async create(request, { user }, options) {
        const create = new user_login_history_entity_1.UserLoginHistoryEntity();
        create.user = user;
        create.hostname = request.hostname;
        create.ip = request.ip;
        create.protocol = request.protocol;
        create.originalUrl = request.originalUrl;
        create.method = request.method;
        create.userAgent = request.headers['user-agent'];
        create.xForwardedFor = request.headers['x-forwarded-for'];
        create.xForwardedHost = request.headers['x-forwarded-host'];
        create.xForwardedPorto = request.headers['x-forwarded-porto'];
        return this.userLoginHistoryRepository.create(create, options);
    }
    async mapList(userHistories) {
        return (0, class_transformer_1.plainToInstance)(user_login_history_list_response_dto_1.UserLoginHistoryListResponseDto, userHistories);
    }
};
exports.UserLoginHistoryService = UserLoginHistoryService;
exports.UserLoginHistoryService = UserLoginHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_login_history_repository_1.UserLoginHistoryRepository])
], UserLoginHistoryService);
//# sourceMappingURL=user-login-history.service.js.map