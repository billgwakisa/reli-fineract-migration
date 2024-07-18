/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { UpdateQuery, UpdateWithAggregationPipeline } from 'mongoose';
import { ClientSession, Model, PipelineStage, Document } from 'mongoose';
import { DatabaseRepositoryAbstract } from 'src/common/database/abstracts/base/database.repository.abstract';
import { IDatabaseCreateOptions, IDatabaseExistOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseGetTotalOptions, IDatabaseCreateManyOptions, IDatabaseManyOptions, IDatabaseSoftDeleteManyOptions, IDatabaseRestoreManyOptions, IDatabaseRawOptions, IDatabaseSaveOptions, IDatabaseFindOneLockOptions, IDatabaseRawFindAllOptions, IDatabaseRawGetTotalOptions, IDatabaseJoin } from 'src/common/database/interfaces/database.interface';
export declare abstract class DatabaseMongoUUIDRepositoryAbstract<Entity, EntityDocument> extends DatabaseRepositoryAbstract<EntityDocument> {
    protected _repository: Model<Entity>;
    protected _joinOnFind?: IDatabaseJoin | IDatabaseJoin[];
    constructor(repository: Model<Entity>, options?: IDatabaseJoin | IDatabaseJoin[]);
    findAll<T = EntityDocument>(find?: Record<string, any>, options?: IDatabaseFindAllOptions<ClientSession>): Promise<T[]>;
    findAllDistinct<T = EntityDocument>(fieldDistinct: string, find?: Record<string, any>, options?: IDatabaseFindAllOptions<ClientSession>): Promise<T[]>;
    findOne<T = EntityDocument>(find: Record<string, any>, options?: IDatabaseFindOneOptions<ClientSession>): Promise<T>;
    findOneById<T = EntityDocument>(_id: string, options?: IDatabaseFindOneOptions<ClientSession>): Promise<T>;
    findOneAndLock<T = EntityDocument>(find: Record<string, any>, options?: IDatabaseFindOneLockOptions<ClientSession>): Promise<T>;
    findOneByIdAndLock<T = EntityDocument>(_id: string, options?: IDatabaseFindOneLockOptions<ClientSession>): Promise<T>;
    getTotal(find?: Record<string, any>, options?: IDatabaseGetTotalOptions<ClientSession>): Promise<number>;
    exists(find: Record<string, any>, options?: IDatabaseExistOptions<ClientSession>): Promise<boolean>;
    create<Dto = any>(data: Dto, options?: IDatabaseCreateOptions<ClientSession>): Promise<EntityDocument>;
    save(repository: EntityDocument & Document<string>, options?: IDatabaseSaveOptions): Promise<EntityDocument>;
    delete(repository: EntityDocument & Document<string>, options?: IDatabaseSaveOptions): Promise<EntityDocument>;
    softDelete(repository: EntityDocument & Document<string> & {
        deletedAt?: Date;
    }, options?: IDatabaseSaveOptions): Promise<EntityDocument>;
    restore(repository: EntityDocument & Document<string> & {
        deletedAt?: Date;
    }, options?: IDatabaseSaveOptions): Promise<EntityDocument>;
    createMany<Dto>(data: Dto[], options?: IDatabaseCreateManyOptions<ClientSession>): Promise<boolean>;
    deleteManyByIds(_id: string[], options?: IDatabaseManyOptions<ClientSession>): Promise<boolean>;
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions<ClientSession>): Promise<boolean>;
    softDeleteManyByIds(_id: string[], options?: IDatabaseSoftDeleteManyOptions<ClientSession>): Promise<boolean>;
    softDeleteMany(find: Record<string, any>, options?: IDatabaseSoftDeleteManyOptions<ClientSession>): Promise<boolean>;
    restoreManyByIds(_id: string[], options?: IDatabaseRestoreManyOptions<ClientSession>): Promise<boolean>;
    restoreMany(find: Record<string, any>, options?: IDatabaseRestoreManyOptions<ClientSession>): Promise<boolean>;
    updateMany<Dto>(find: Record<string, any>, data: Dto, options?: IDatabaseManyOptions<ClientSession>): Promise<boolean>;
    join<T = any>(repository: EntityDocument & Document<string>, joins: IDatabaseJoin | IDatabaseJoin[]): Promise<T>;
    updateManyRaw(find: Record<string, any>, data: UpdateWithAggregationPipeline | UpdateQuery<Entity>, options?: IDatabaseManyOptions<ClientSession>): Promise<boolean>;
    raw<RawResponse, RawQuery = PipelineStage[]>(rawOperation: RawQuery, options?: IDatabaseRawOptions): Promise<RawResponse[]>;
    rawFindAll<RawResponse, RawQuery = PipelineStage[]>(rawOperation: RawQuery, options?: IDatabaseRawFindAllOptions): Promise<RawResponse[]>;
    rawGetTotal<RawQuery = PipelineStage[]>(rawOperation: RawQuery, options?: IDatabaseRawGetTotalOptions): Promise<number>;
    model(): Promise<Model<Entity>>;
    private _convertJoinOption;
}
