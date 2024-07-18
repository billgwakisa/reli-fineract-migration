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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../repository/entities/user.entity");
const user_repository_1 = require("../repository/repositories/user.repository");
const helper_date_service_1 = require("../../../common/helper/services/helper.date.service");
const config_1 = require("@nestjs/config");
const class_transformer_1 = require("class-transformer");
const role_entity_1 = require("../../role/repository/entities/role.entity");
const user_enum_constant_1 = require("../constants/user.enum.constant");
const user_get_response_dto_1 = require("../dtos/response/user.get.response.dto");
const user_list_response_dto_1 = require("../dtos/response/user.list.response.dto");
const user_profile_response_dto_1 = require("../dtos/response/user.profile.response.dto");
const country_entity_1 = require("../../country/repository/entities/country.entity");
let UserService = class UserService {
    constructor(userRepository, helperDateService, configService) {
        this.userRepository = userRepository;
        this.helperDateService = helperDateService;
        this.configService = configService;
        this.uploadPath = this.configService.get('user.uploadPath');
    }
    async findAll(find, options) {
        return this.userRepository.findAll(find, options);
    }
    async findAllWithRoleAndCountry(find, options) {
        return this.userRepository.findAll(find, {
            ...options,
            join: true,
        });
    }
    async findOneById(_id, options) {
        return this.userRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.userRepository.findOne(find, options);
    }
    async findOneByEmail(email, options) {
        return this.userRepository.findOne({ email }, options);
    }
    async findOneByMobileNumber(mobileNumber, options) {
        return this.userRepository.findOne({ mobileNumber }, options);
    }
    async getTotal(find, options) {
        return this.userRepository.getTotal(find, options);
    }
    async create({ email, name, role, country }, { passwordExpired, passwordHash, salt, passwordCreated }, signUpFrom, options) {
        const create = new user_entity_1.UserEntity();
        create.name = name;
        create.email = email;
        create.role = role;
        create.status = user_enum_constant_1.ENUM_USER_STATUS.ACTIVE;
        create.blocked = false;
        create.password = passwordHash;
        create.salt = salt;
        create.passwordExpired = passwordExpired;
        create.passwordCreated = passwordCreated;
        create.passwordAttempt = 0;
        create.signUpDate = this.helperDateService.create();
        create.signUpFrom = signUpFrom;
        create.country = country;
        return this.userRepository.create(create, options);
    }
    async signUp(role, { email, name, country }, { passwordExpired, passwordHash, salt, passwordCreated }, options) {
        const create = new user_entity_1.UserEntity();
        create.name = name;
        create.email = email;
        create.role = role;
        create.status = user_enum_constant_1.ENUM_USER_STATUS.ACTIVE;
        create.blocked = false;
        create.password = passwordHash;
        create.salt = salt;
        create.passwordExpired = passwordExpired;
        create.passwordCreated = passwordCreated;
        create.passwordAttempt = 0;
        create.signUpDate = this.helperDateService.create();
        create.signUpFrom = user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.PUBLIC;
        create.country = country;
        return this.userRepository.create(create, options);
    }
    async existByEmail(email, options) {
        return this.userRepository.exists({
            email: {
                $regex: new RegExp(`\\b${email}\\b`),
                $options: 'i',
            },
        }, { ...options, withDeleted: true });
    }
    async existByMobileNumber(mobileNumber, options) {
        return this.userRepository.exists({
            mobileNumber,
        }, { ...options, withDeleted: true });
    }
    async updatePhoto(repository, photo, options) {
        repository.photo = photo;
        return this.userRepository.save(repository, options);
    }
    async updatePassword(repository, { passwordHash, passwordExpired, salt, passwordCreated }, options) {
        repository.password = passwordHash;
        repository.passwordExpired = passwordExpired;
        repository.passwordCreated = passwordCreated;
        repository.salt = salt;
        return this.userRepository.save(repository, options);
    }
    async active(repository, options) {
        repository.status = user_enum_constant_1.ENUM_USER_STATUS.ACTIVE;
        return this.userRepository.save(repository, options);
    }
    async inactive(repository, options) {
        repository.status = user_enum_constant_1.ENUM_USER_STATUS.INACTIVE;
        return this.userRepository.save(repository, options);
    }
    async selfDelete(repository, options) {
        repository.status = user_enum_constant_1.ENUM_USER_STATUS.DELETED;
        repository.selfDeletion = true;
        return this.userRepository.save(repository, options);
    }
    async blocked(repository, options) {
        repository.blocked = true;
        return this.userRepository.save(repository, options);
    }
    async unblocked(repository, options) {
        repository.blocked = false;
        return this.userRepository.save(repository, options);
    }
    async updatePasswordAttempt(repository, { passwordAttempt }, options) {
        repository.passwordAttempt = passwordAttempt;
        return this.userRepository.save(repository, options);
    }
    async increasePasswordAttempt(repository, options) {
        repository.passwordAttempt = ++repository.passwordAttempt;
        return this.userRepository.save(repository, options);
    }
    async resetPasswordAttempt(repository, options) {
        repository.passwordAttempt = 0;
        return this.userRepository.save(repository, options);
    }
    async updatePasswordExpired(repository, passwordExpired, options) {
        repository.passwordExpired = passwordExpired;
        return this.userRepository.save(repository, options);
    }
    async join(repository) {
        return this.userRepository.join(repository, [
            {
                field: 'role',
                localKey: 'role',
                foreignKey: '_id',
                model: role_entity_1.RoleEntity.name,
                justOne: true,
            },
            {
                field: 'country',
                localKey: 'country',
                foreignKey: '_id',
                model: country_entity_1.CountryEntity.name,
                justOne: true,
            },
            {
                field: 'mobileNumber.country',
                localKey: 'mobileNumber.country',
                foreignKey: '_id',
                model: country_entity_1.CountryEntity.name,
                justOne: true,
            },
        ]);
    }
    async getPhotoUploadPath(user) {
        return this.uploadPath.replace('{user}', user);
    }
    async deleteMany(find, options) {
        return this.userRepository.deleteMany(find, options);
    }
    async findOneByIdAndActive(_id, options) {
        return this.userRepository.findOne({ _id, status: user_enum_constant_1.ENUM_USER_STATUS.ACTIVE, blocked: false }, {
            ...options,
            join: [
                {
                    field: 'role',
                    localKey: 'role',
                    foreignKey: '_id',
                    model: role_entity_1.RoleEntity.name,
                    justOne: true,
                    condition: {
                        isActive: true,
                    },
                },
                {
                    field: 'country',
                    localKey: 'country',
                    foreignKey: '_id',
                    model: country_entity_1.CountryEntity.name,
                    justOne: true,
                },
                {
                    field: 'mobileNumber.country',
                    localKey: 'mobileNumber.country',
                    foreignKey: '_id',
                    model: country_entity_1.CountryEntity.name,
                    justOne: true,
                },
            ],
        });
    }
    async findOneByEmailAndActive(email, options) {
        return this.userRepository.findOne({ email, status: user_enum_constant_1.ENUM_USER_STATUS.ACTIVE, blocked: false }, {
            ...options,
            join: [
                {
                    field: 'role',
                    localKey: 'role',
                    foreignKey: '_id',
                    model: role_entity_1.RoleEntity.name,
                    justOne: true,
                    condition: {
                        isActive: true,
                    },
                },
                {
                    field: 'country',
                    localKey: 'country',
                    foreignKey: '_id',
                    model: country_entity_1.CountryEntity.name,
                    justOne: true,
                },
                {
                    field: 'mobileNumber.country',
                    localKey: 'mobileNumber.country',
                    foreignKey: '_id',
                    model: country_entity_1.CountryEntity.name,
                    justOne: true,
                },
            ],
        });
    }
    async findOneByMobileNumberAndActive(mobileNumber, options) {
        return this.userRepository.findOne({
            mobileNumber,
            status: user_enum_constant_1.ENUM_USER_STATUS.ACTIVE,
            blocked: false,
        }, {
            ...options,
            join: [
                {
                    field: 'role',
                    localKey: 'role',
                    foreignKey: '_id',
                    model: role_entity_1.RoleEntity.name,
                    justOne: true,
                    condition: {
                        isActive: true,
                    },
                },
                {
                    field: 'country',
                    localKey: 'country',
                    foreignKey: '_id',
                    model: country_entity_1.CountryEntity.name,
                    justOne: true,
                },
                {
                    field: 'mobileNumber.country',
                    localKey: 'mobileNumber.country',
                    foreignKey: '_id',
                    model: country_entity_1.CountryEntity.name,
                    justOne: true,
                },
            ],
        });
    }
    async mapProfile(user) {
        return (0, class_transformer_1.plainToInstance)(user_profile_response_dto_1.UserProfileResponseDto, user.toObject());
    }
    async updateProfile(repository, { name, familyName, address }, options) {
        repository.name = name;
        repository.familyName = familyName;
        repository.address = address;
        return this.userRepository.save(repository, options);
    }
    async updateMobileNumber(repository, { country, number }, options) {
        repository.mobileNumber = {
            country,
            number,
        };
        return this.userRepository.save(repository, options);
    }
    async deleteMobileNumber(repository, options) {
        repository.mobileNumber = undefined;
        return this.userRepository.save(repository, options);
    }
    async mapList(user) {
        return (0, class_transformer_1.plainToInstance)(user_list_response_dto_1.UserListResponseDto, user.map(u => u.toObject()));
    }
    async mapGet(user) {
        return (0, class_transformer_1.plainToInstance)(user_get_response_dto_1.UserGetResponseDto, user.toObject());
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        helper_date_service_1.HelperDateService,
        config_1.ConfigService])
], UserService);
//# sourceMappingURL=user.service.js.map