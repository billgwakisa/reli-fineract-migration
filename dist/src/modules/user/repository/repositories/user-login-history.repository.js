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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginHistoryRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const database_mongo_uuid_repository_abstract_1 = require("../../../../common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
const user_login_history_entity_1 = require("../entities/user-login-history.entity");
let UserLoginHistoryRepository = class UserLoginHistoryRepository extends database_mongo_uuid_repository_abstract_1.DatabaseMongoUUIDRepositoryAbstract {
    constructor(userLoginHistoryModel) {
        super(userLoginHistoryModel);
        this.userLoginHistoryModel = userLoginHistoryModel;
    }
};
exports.UserLoginHistoryRepository = UserLoginHistoryRepository;
exports.UserLoginHistoryRepository = UserLoginHistoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(user_login_history_entity_1.UserLoginHistoryEntity.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserLoginHistoryRepository);
//# sourceMappingURL=user-login-history.repository.js.map