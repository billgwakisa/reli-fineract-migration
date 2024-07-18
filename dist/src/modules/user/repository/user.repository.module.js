"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../../common/database/constants/database.constant");
const user_login_history_entity_1 = require("./entities/user-login-history.entity");
const user_password_history_entity_1 = require("./entities/user-password-history.entity");
const user_state_history_entity_1 = require("./entities/user-state-history.entity");
const user_entity_1 = require("./entities/user.entity");
const user_login_history_repository_1 = require("./repositories/user-login-history.repository");
const user_password_history_repository_1 = require("./repositories/user-password-history.repository");
const user_state_history_repository_1 = require("./repositories/user-state-history.repository");
const user_repository_1 = require("./repositories/user.repository");
let UserRepositoryModule = class UserRepositoryModule {
};
exports.UserRepositoryModule = UserRepositoryModule;
exports.UserRepositoryModule = UserRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [
            user_repository_1.UserRepository,
            user_state_history_repository_1.UserStateHistoryRepository,
            user_password_history_repository_1.UserPasswordHistoryRepository,
            user_login_history_repository_1.UserLoginHistoryRepository,
        ],
        exports: [
            user_repository_1.UserRepository,
            user_state_history_repository_1.UserStateHistoryRepository,
            user_password_history_repository_1.UserPasswordHistoryRepository,
            user_login_history_repository_1.UserLoginHistoryRepository,
        ],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_entity_1.UserEntity.name,
                    schema: user_entity_1.UserSchema,
                },
                {
                    name: user_state_history_entity_1.UserStateHistoryEntity.name,
                    schema: user_state_history_entity_1.UserStateHistorySchema,
                },
                {
                    name: user_login_history_entity_1.UserLoginHistoryEntity.name,
                    schema: user_login_history_entity_1.UserLoginHistorySchema,
                },
                {
                    name: user_password_history_entity_1.UserPasswordHistoryEntity.name,
                    schema: user_password_history_entity_1.UserPasswordHistorySchema,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], UserRepositoryModule);
//# sourceMappingURL=user.repository.module.js.map