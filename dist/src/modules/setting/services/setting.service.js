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
exports.SettingService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_enum_constant_1 = require("../../../common/helper/constants/helper.enum.constant");
const helper_date_service_1 = require("../../../common/helper/services/helper.date.service");
const helper_number_service_1 = require("../../../common/helper/services/helper.number.service");
const setting_enum_constant_1 = require("../constants/setting.enum.constant");
const setting_entity_1 = require("../repository/entities/setting.entity");
const setting_repository_1 = require("../repository/repositories/setting.repository");
let SettingService = class SettingService {
    constructor(settingRepository, helperNumberService, configService, helperDateService) {
        this.settingRepository = settingRepository;
        this.helperNumberService = helperNumberService;
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.timezone = this.configService.get('app.timezone');
        this.timezoneOffset = this.helperDateService.format(this.helperDateService.create(), { format: helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.TIMEZONE });
    }
    async findAll(find, options) {
        return this.settingRepository.findAll(find, options);
    }
    async findOne(find, options) {
        return this.settingRepository.findOne(find, options);
    }
    async findOneById(_id, options) {
        return this.settingRepository.findOneById(_id, options);
    }
    async findOneByName(name, options) {
        return this.settingRepository.findOne({ name }, options);
    }
    async getTotal(find, options) {
        return this.settingRepository.getTotal(find, options);
    }
    async create({ name, description, type, value }, options) {
        const create = new setting_entity_1.SettingEntity();
        create.name = name;
        create.description = description ?? undefined;
        create.value = value;
        create.type = type;
        return this.settingRepository.create(create, options);
    }
    async update(repository, { description, value }, options) {
        repository.description = description;
        repository.value = value;
        return this.settingRepository.save(repository, options);
    }
    async delete(repository, options) {
        return this.settingRepository.softDelete(repository, options);
    }
    async deleteMany(find, options) {
        return this.settingRepository.deleteMany(find, options);
    }
    getValue(type, value) {
        if (type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.BOOLEAN &&
            (value === 'true' || value === 'false')) {
            return (value === 'true');
        }
        else if (type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.NUMBER &&
            this.helperNumberService.check(value)) {
            return Number.parseInt(value);
        }
        return value;
    }
    checkValue(type, value) {
        if (type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.BOOLEAN &&
            (value === 'true' || value === 'false')) {
            return true;
        }
        else if (type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.NUMBER &&
            this.helperNumberService.check(value)) {
            return true;
        }
        else if (type === setting_enum_constant_1.ENUM_SETTING_DATA_TYPE.STRING &&
            typeof value === 'string') {
            return true;
        }
        return false;
    }
    async getTimezone() {
        return this.timezone;
    }
    async getTimezoneOffset() {
        return this.timezoneOffset;
    }
    async mapList(settings) {
        return settings.map(e => {
            const parseValue = this.getValue(e.type, e.value);
            return { ...e.toObject(), value: parseValue };
        });
    }
    async mapGet(setting) {
        const parseValue = this.getValue(setting.type, setting.value);
        return { ...setting.toObject(), value: parseValue };
    }
};
exports.SettingService = SettingService;
exports.SettingService = SettingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_repository_1.SettingRepository,
        helper_number_service_1.HelperNumberService,
        config_1.ConfigService,
        helper_date_service_1.HelperDateService])
], SettingService);
//# sourceMappingURL=setting.service.js.map