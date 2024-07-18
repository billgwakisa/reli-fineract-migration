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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const database_decorator_1 = require("../../../common/database/decorators/database.decorator");
const country_get_response_dto_1 = require("../dtos/response/country.get.response.dto");
const country_list_response_dto_1 = require("../dtos/response/country.list.response.dto");
const country_entity_1 = require("../repository/entities/country.entity");
const country_repository_1 = require("../repository/repositories/country.repository");
let CountryService = class CountryService {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
    }
    async findAll(find, options) {
        return this.countryRepository.findAll(find, options);
    }
    async findOne(find, options) {
        return this.countryRepository.findOne(find, options);
    }
    async findOneByName(name, options) {
        return this.countryRepository.findOne((0, database_decorator_1.DatabaseQueryContain)('name', name), options);
    }
    async findOneByAlpha2(alpha2, options) {
        return this.countryRepository.findOne((0, database_decorator_1.DatabaseQueryContain)('alpha2Code', alpha2), options);
    }
    async findOneActiveByPhoneCode(phoneCode, options) {
        return this.countryRepository.findOne({
            phoneCode,
            isActive: true,
        }, options);
    }
    async findOneById(_id, options) {
        return this.countryRepository.findOneById(_id, options);
    }
    async findOneActiveById(_id, options) {
        return this.countryRepository.findOne({ _id, isActive: true }, options);
    }
    async getTotal(find, options) {
        return this.countryRepository.getTotal(find, options);
    }
    async active(repository, options) {
        repository.isActive = true;
        return this.countryRepository.save(repository, options);
    }
    async inactive(repository, options) {
        repository.isActive = false;
        return this.countryRepository.save(repository, options);
    }
    async delete(repository, options) {
        return this.countryRepository.softDelete(repository, options);
    }
    async deleteMany(find, options) {
        return this.countryRepository.deleteMany(find, options);
    }
    async createMany(data, options) {
        return this.countryRepository.createMany(data.map(({ name, alpha2Code, alpha3Code, numericCode, continent, fipsCode, phoneCode, timeZone, domain, }) => {
            const create = new country_entity_1.CountryEntity();
            create.name = name;
            create.alpha2Code = alpha2Code;
            create.alpha3Code = alpha3Code;
            create.numericCode = numericCode;
            create.continent = continent;
            create.fipsCode = fipsCode;
            create.phoneCode = phoneCode;
            create.timeZone = timeZone;
            create.domain = domain;
            create.isActive = true;
            return create;
        }), options);
    }
    async mapList(countries) {
        return (0, class_transformer_1.plainToInstance)(country_list_response_dto_1.CountryListResponseDto, countries);
    }
    async mapGet(county) {
        return (0, class_transformer_1.plainToInstance)(country_get_response_dto_1.CountryGetResponseDto, county);
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [country_repository_1.CountryRepository])
], CountryService);
//# sourceMappingURL=country.service.js.map