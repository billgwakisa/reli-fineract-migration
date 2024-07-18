"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseQueryAnd = exports.DatabaseQueryOr = exports.DatabaseQueryContain = exports.DatabaseQueryNotEqual = exports.DatabaseQueryEqual = exports.DatabaseQueryNin = exports.DatabaseQueryIn = exports.DatabaseSchema = exports.DatabaseProp = exports.DatabaseEntity = exports.DatabaseModel = exports.DatabaseConnection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../constants/database.constant");
function DatabaseConnection(connectionName) {
    return (0, mongoose_1.InjectConnection)(connectionName ?? database_constant_1.DATABASE_CONNECTION_NAME);
}
exports.DatabaseConnection = DatabaseConnection;
function DatabaseModel(entity, connectionName) {
    return (0, mongoose_1.InjectModel)(entity, connectionName ?? database_constant_1.DATABASE_CONNECTION_NAME);
}
exports.DatabaseModel = DatabaseModel;
function DatabaseEntity(options) {
    return (0, mongoose_1.Schema)({
        ...options,
        versionKey: false,
        autoCreate: false,
        autoIndex: false,
        timestamps: options?.timestamps ?? {
            createdAt: database_constant_1.DATABASE_CREATED_AT_FIELD_NAME,
            updatedAt: database_constant_1.DATABASE_UPDATED_AT_FIELD_NAME,
        },
    });
}
exports.DatabaseEntity = DatabaseEntity;
function DatabaseProp(options) {
    return (0, mongoose_1.Prop)(options);
}
exports.DatabaseProp = DatabaseProp;
function DatabaseSchema(entity) {
    return mongoose_1.SchemaFactory.createForClass(entity);
}
exports.DatabaseSchema = DatabaseSchema;
function DatabaseQueryIn(field, values) {
    return {
        [field]: {
            $in: values,
        },
    };
}
exports.DatabaseQueryIn = DatabaseQueryIn;
function DatabaseQueryNin(field, values) {
    return {
        [field]: {
            $nin: values,
        },
    };
}
exports.DatabaseQueryNin = DatabaseQueryNin;
function DatabaseQueryEqual(field, value) {
    return {
        [field]: value,
    };
}
exports.DatabaseQueryEqual = DatabaseQueryEqual;
function DatabaseQueryNotEqual(field, value) {
    return {
        [field]: {
            $ne: value,
        },
    };
}
exports.DatabaseQueryNotEqual = DatabaseQueryNotEqual;
function DatabaseQueryContain(field, value, options) {
    if (options?.fullWord) {
        return {
            [field]: {
                $regex: new RegExp(`\\b${value}\\b`),
                $options: 'i',
            },
        };
    }
    return {
        [field]: {
            $regex: new RegExp(value),
            $options: 'i',
        },
    };
}
exports.DatabaseQueryContain = DatabaseQueryContain;
function DatabaseQueryOr(queries) {
    return {
        $or: queries,
    };
}
exports.DatabaseQueryOr = DatabaseQueryOr;
function DatabaseQueryAnd(queries) {
    return {
        $and: queries,
    };
}
exports.DatabaseQueryAnd = DatabaseQueryAnd;
//# sourceMappingURL=database.decorator.js.map