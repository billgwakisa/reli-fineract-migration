"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMongoUUIDRepositoryAbstract = void 0;
const database_repository_abstract_1 = require("../../base/database.repository.abstract");
const database_constant_1 = require("../../../constants/database.constant");
const pagination_enum_constant_1 = require("../../../../pagination/constants/pagination.enum.constant");
class DatabaseMongoUUIDRepositoryAbstract extends database_repository_abstract_1.DatabaseRepositoryAbstract {
    constructor(repository, options) {
        super();
        this._repository = repository;
        this._joinOnFind = options;
    }
    async findAll(find, options) {
        const findAll = this._repository.find(find);
        if (!options?.withDeleted) {
            findAll.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findAll.select(options.select);
        }
        if (options?.paging) {
            findAll.limit(options.paging.limit).skip(options.paging.offset);
        }
        if (options?.order) {
            findAll.sort(options.order);
        }
        if (options?.join) {
            findAll.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        if (options?.session) {
            findAll.session(options.session);
        }
        return findAll.exec();
    }
    async findAllDistinct(fieldDistinct, find, options) {
        const findAll = this._repository.distinct(fieldDistinct, find);
        if (!options?.withDeleted) {
            findAll.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findAll.select(options.select);
        }
        if (options?.paging) {
            findAll.limit(options.paging.limit).skip(options.paging.offset);
        }
        if (options?.order) {
            findAll.sort(options.order);
        }
        if (options?.join) {
            findAll.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        if (options?.session) {
            findAll.session(options.session);
        }
        return findAll.exec();
    }
    async findOne(find, options) {
        const findOne = this._repository.findOne(find);
        if (!options?.withDeleted) {
            findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findOne.select(options.select);
        }
        if (options?.join) {
            findOne.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        if (options?.session) {
            findOne.session(options.session);
        }
        return findOne.exec();
    }
    async findOneById(_id, options) {
        const findOne = this._repository.findById(_id);
        if (!options?.withDeleted) {
            findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findOne.select(options.select);
        }
        if (options?.join) {
            findOne.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        if (options?.session) {
            findOne.session(options.session);
        }
        return findOne.exec();
    }
    async findOneAndLock(find, options) {
        const findOne = this._repository.findOneAndUpdate(find, {
            new: true,
            useFindAndModify: false,
        });
        if (!options?.withDeleted) {
            findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findOne.select(options.select);
        }
        if (options?.join) {
            findOne.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        if (options?.session) {
            findOne.session(options.session);
        }
        return findOne.exec();
    }
    async findOneByIdAndLock(_id, options) {
        const findOne = this._repository.findByIdAndUpdate(_id, {
            new: true,
            useFindAndModify: false,
        });
        if (!options?.withDeleted) {
            findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.select) {
            findOne.select(options.select);
        }
        if (options?.join) {
            findOne.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        if (options?.session) {
            findOne.session(options.session);
        }
        return findOne.exec();
    }
    async getTotal(find, options) {
        const count = this._repository.countDocuments(find);
        if (!options?.withDeleted) {
            count.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.session) {
            count.session(options.session);
        }
        if (options?.join) {
            count.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        return count;
    }
    async exists(find, options) {
        if (options?.excludeId) {
            find = {
                ...find,
                _id: {
                    $nin: options?.excludeId ?? [],
                },
            };
        }
        const exist = this._repository.exists(find);
        if (!options?.withDeleted) {
            exist.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options?.session) {
            exist.session(options.session);
        }
        if (options?.join) {
            exist.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        const result = await exist;
        return result ? true : false;
    }
    async create(data, options) {
        const dataCreate = data;
        if (options?._id) {
            dataCreate._id = options._id;
        }
        const created = await this._repository.create([dataCreate], {
            session: options ? options.session : undefined,
        });
        return created[0];
    }
    async save(repository, options) {
        return repository.save(options);
    }
    async delete(repository, options) {
        return repository.deleteOne(options);
    }
    async softDelete(repository, options) {
        repository.deletedAt = new Date();
        return repository.save(options);
    }
    async restore(repository, options) {
        repository.deletedAt = undefined;
        return repository.save(options);
    }
    async createMany(data, options) {
        const create = this._repository.insertMany(data, {
            session: options ? options.session : undefined,
        });
        try {
            await create;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteManyByIds(_id, options) {
        const del = this._repository.deleteMany({
            _id: {
                $in: _id,
            },
        });
        if (options?.session) {
            del.session(options.session);
        }
        if (options?.join) {
            del.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        try {
            await del;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteMany(find, options) {
        const del = this._repository.deleteMany(find);
        if (options?.session) {
            del.session(options.session);
        }
        if (options?.join) {
            del.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        try {
            await del;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async softDeleteManyByIds(_id, options) {
        const softDel = this._repository
            .updateMany({
            _id: {
                $in: _id,
            },
        }, {
            $set: {
                deletedAt: new Date(),
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options?.session) {
            softDel.session(options.session);
        }
        if (options?.join) {
            softDel.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        try {
            await softDel;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async softDeleteMany(find, options) {
        const softDel = this._repository
            .updateMany(find, {
            $set: {
                deletedAt: new Date(),
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options?.session) {
            softDel.session(options.session);
        }
        if (options?.join) {
            softDel.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        try {
            await softDel;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async restoreManyByIds(_id, options) {
        const rest = this._repository
            .updateMany({
            _id: {
                $in: _id,
            },
        }, {
            $set: {
                deletedAt: undefined,
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(true);
        if (options?.session) {
            rest.session(options.session);
        }
        if (options?.join) {
            rest.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        try {
            await rest;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async restoreMany(find, options) {
        const rest = this._repository
            .updateMany(find, {
            $set: {
                deletedAt: undefined,
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(true);
        if (options?.session) {
            rest.session(options.session);
        }
        if (options?.join) {
            rest.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        try {
            await rest;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async updateMany(find, data, options) {
        const update = this._repository
            .updateMany(find, {
            $set: data,
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options?.session) {
            update.session(options.session);
        }
        if (options?.join) {
            update.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        try {
            await update;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async join(repository, joins) {
        const cOptions = this._convertJoinOption(joins);
        return repository.populate(cOptions);
    }
    async updateManyRaw(find, data, options) {
        const update = this._repository
            .updateMany(find, data)
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options?.session) {
            update.session(options.session);
        }
        if (options?.join) {
            update.populate(typeof options.join === 'boolean'
                ? this._convertJoinOption(this._joinOnFind)
                : this._convertJoinOption(options.join));
        }
        try {
            await update;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async raw(rawOperation, options) {
        if (!Array.isArray(rawOperation)) {
            throw new Error('Must in array');
        }
        const pipeline = rawOperation;
        if (!options?.withDeleted) {
            pipeline.push({
                $match: {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
            });
        }
        const aggregate = this._repository.aggregate(pipeline);
        if (options?.session) {
            aggregate.session(options?.session);
        }
        return aggregate;
    }
    async rawFindAll(rawOperation, options) {
        if (!Array.isArray(rawOperation)) {
            throw new Error('Must in array');
        }
        const pipeline = rawOperation;
        if (!options?.withDeleted) {
            pipeline.push({
                $match: {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: {
                        $exists: false,
                    },
                },
            });
        }
        if (options?.order) {
            const keysOrder = Object.keys(options?.order);
            pipeline.push({
                $sort: keysOrder.reduce((a, b) => ({
                    ...a,
                    [b]: options?.order[b] ===
                        pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC
                        ? 1
                        : -1,
                }), {}),
            });
        }
        if (options?.paging) {
            pipeline.push({
                $limit: options.paging.limit + options.paging.offset,
            }, { $skip: options.paging.offset });
        }
        const aggregate = this._repository.aggregate(pipeline);
        if (options?.session) {
            aggregate.session(options?.session);
        }
        return aggregate;
    }
    async rawGetTotal(rawOperation, options) {
        if (!Array.isArray(rawOperation)) {
            throw new Error('Must in array');
        }
        const pipeline = rawOperation;
        pipeline.push({
            $group: {
                _id: null,
                count: { $sum: 1 },
            },
        });
        const aggregate = this._repository.aggregate(pipeline);
        if (options?.session) {
            aggregate.session(options?.session);
        }
        const raw = await aggregate;
        return raw && raw.length > 0 ? raw[0].count : 0;
    }
    async model() {
        return this._repository;
    }
    _convertJoinOption(options) {
        if (Array.isArray(options)) {
            const cOptions = options.map(e => {
                const aOptions = {
                    path: e.field,
                    foreignField: e.foreignKey,
                    localField: e.localKey,
                    model: e.model,
                    match: e.condition,
                };
                if (e.justOne) {
                    aOptions.justOne = true;
                    aOptions.perDocumentLimit = 1;
                }
                return aOptions;
            });
            return cOptions;
        }
        const cOptions = {
            path: options.field,
            foreignField: options.foreignKey,
            localField: options.localKey,
            model: options.model,
            match: options.condition,
        };
        if (options.justOne) {
            cOptions.justOne = true;
            cOptions.perDocumentLimit = 1;
        }
        return cOptions;
    }
}
exports.DatabaseMongoUUIDRepositoryAbstract = DatabaseMongoUUIDRepositoryAbstract;
//# sourceMappingURL=database.mongo.uuid.repository.abstract.js.map