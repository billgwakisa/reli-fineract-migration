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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const role_get_response_dto_1 = require("../dtos/response/role.get.response.dto");
const role_list_response_dto_1 = require("../dtos/response/role.list.response.dto");
const role_entity_1 = require("../repository/entities/role.entity");
const role_repository_1 = require("../repository/repositories/role.repository");
let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async findAll(find, options) {
        return this.roleRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.roleRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.roleRepository.findOne(find, options);
    }
    async findOneByName(name, options) {
        return this.roleRepository.findOne({ name }, options);
    }
    async getTotal(find, options) {
        return this.roleRepository.getTotal(find, options);
    }
    async existByName(name, options) {
        return this.roleRepository.exists({
            name,
        }, options);
    }
    async create({ name, description, type, permissions }, options) {
        const create = new role_entity_1.RoleEntity();
        create.name = name;
        create.description = description;
        create.type = type;
        create.permissions = permissions;
        create.isActive = true;
        return this.roleRepository.create(create, options);
    }
    async update(repository, { permissions, type, description }, options) {
        repository.description = description;
        repository.type = type;
        repository.permissions = permissions;
        return this.roleRepository.save(repository, options);
    }
    async active(repository, options) {
        repository.isActive = true;
        return this.roleRepository.save(repository, options);
    }
    async inactive(repository, options) {
        repository.isActive = false;
        return this.roleRepository.save(repository, options);
    }
    async delete(repository, options) {
        return this.roleRepository.delete(repository, options);
    }
    async deleteMany(find, options) {
        return this.roleRepository.deleteMany(find, options);
    }
    async createMany(data, options) {
        const create = data.map(({ type, name, permissions }) => {
            const entity = new role_entity_1.RoleEntity();
            entity.type = type;
            entity.isActive = true;
            entity.name = name;
            entity.permissions = permissions;
            return entity;
        });
        return this.roleRepository.createMany(create, options);
    }
    async mapList(roles) {
        const plainObject = roles.map(e => e.toObject());
        return (0, class_transformer_1.plainToInstance)(role_list_response_dto_1.RoleListResponseDto, plainObject);
    }
    async mapGet(role) {
        return (0, class_transformer_1.plainToInstance)(role_get_response_dto_1.RoleGetResponseDto, role.toObject());
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository])
], RoleService);
//# sourceMappingURL=role.service.js.map