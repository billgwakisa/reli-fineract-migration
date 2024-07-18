"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocResponseFile = exports.DocResponsePaging = exports.DocErrorGroup = exports.DocResponse = exports.DocAuth = exports.DocGuard = exports.DocRequestFile = exports.DocRequest = exports.Doc = exports.DocAllOf = exports.DocAnyOf = exports.DocOneOf = exports.DocDefault = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const doc_enum_constant_1 = require("../constants/doc.enum.constant");
const file_enum_constant_1 = require("../../file/constants/file.enum.constant");
const message_enum_constant_1 = require("../../message/constants/message.enum.constant");
const pagination_enum_constant_1 = require("../../pagination/constants/pagination.enum.constant");
const request_status_code_constant_1 = require("../../request/constants/request.status-code.constant");
const response_dto_1 = require("../../response/dtos/response.dto");
const response_paging_dto_1 = require("../../response/dtos/response.paging.dto");
const api_key_status_code_constant_1 = require("../../api-key/constants/api-key.status-code.constant");
const auth_status_code_constant_1 = require("../../auth/constants/auth.status-code.constant");
const policy_status_code_constant_1 = require("../../policy/constants/policy.status-code.constant");
const app_status_code_constant_1 = require("../../../app/constants/app.status-code.constant");
function DocDefault(options) {
    const docs = [];
    const schema = {
        allOf: [{ $ref: (0, swagger_1.getSchemaPath)(response_dto_1.ResponseDto) }],
        properties: {
            message: {
                example: options.messagePath,
            },
            statusCode: {
                type: 'number',
                example: options.statusCode,
            },
        },
    };
    if (options.dto) {
        docs.push((0, swagger_1.ApiExtraModels)(options.dto));
        schema.properties = {
            ...schema.properties,
            data: {
                $ref: (0, swagger_1.getSchemaPath)(options.dto),
            },
        };
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(response_dto_1.ResponseDto), (0, swagger_1.ApiResponse)({
        description: options.httpStatus.toString(),
        status: options.httpStatus,
        schema,
    }), ...docs);
}
exports.DocDefault = DocDefault;
function DocOneOf(httpStatus, ...documents) {
    const docs = [];
    const oneOf = [];
    for (const doc of documents) {
        const oneOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(response_dto_1.ResponseDto) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode ?? common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.dto) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.dto));
            oneOfSchema.properties = {
                ...oneOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.dto),
                },
            };
        }
        oneOf.push(oneOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(response_dto_1.ResponseDto), (0, swagger_1.ApiResponse)({
        description: httpStatus.toString(),
        status: httpStatus,
        schema: {
            oneOf,
        },
    }), ...docs);
}
exports.DocOneOf = DocOneOf;
function DocAnyOf(httpStatus, ...documents) {
    const docs = [];
    const anyOf = [];
    for (const doc of documents) {
        const anyOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(response_dto_1.ResponseDto) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode ?? common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.dto) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.dto));
            anyOfSchema.properties = {
                ...anyOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.dto),
                },
            };
        }
        anyOf.push(anyOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(response_dto_1.ResponseDto), (0, swagger_1.ApiResponse)({
        description: httpStatus.toString(),
        status: httpStatus,
        schema: {
            anyOf,
        },
    }), ...docs);
}
exports.DocAnyOf = DocAnyOf;
function DocAllOf(httpStatus, ...documents) {
    const docs = [];
    const allOf = [];
    for (const doc of documents) {
        const allOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(response_dto_1.ResponseDto) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode ?? common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.dto) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.dto));
            allOfSchema.properties = {
                ...allOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.dto),
                },
            };
        }
        allOf.push(allOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(response_dto_1.ResponseDto), (0, swagger_1.ApiResponse)({
        description: httpStatus.toString(),
        status: httpStatus,
        schema: {
            allOf,
        },
    }), ...docs);
}
exports.DocAllOf = DocAllOf;
function Doc(options) {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
        summary: options?.summary,
        deprecated: options?.deprecated,
        description: options?.description,
        operationId: options?.operation,
    }), (0, swagger_1.ApiHeaders)([
        {
            name: 'x-custom-lang',
            description: 'Custom language header',
            required: false,
            schema: {
                default: message_enum_constant_1.ENUM_MESSAGE_LANGUAGE.EN,
                example: message_enum_constant_1.ENUM_MESSAGE_LANGUAGE.EN,
                type: 'string',
            },
        },
    ]), DocDefault({
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        messagePath: 'http.serverError.internalServerError',
        statusCode: app_status_code_constant_1.ENUM_APP_STATUS_CODE_ERROR.UNKNOWN_ERROR,
    }), DocDefault({
        httpStatus: common_1.HttpStatus.REQUEST_TIMEOUT,
        messagePath: 'http.serverError.requestTimeout',
        statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.TIMEOUT_ERROR,
    }));
}
exports.Doc = Doc;
function DocRequest(options) {
    const docs = [];
    if (options?.bodyType === doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.FORM_DATA) {
        docs.push((0, swagger_1.ApiConsumes)('multipart/form-data'));
    }
    else if (options?.bodyType === doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.TEXT) {
        docs.push((0, swagger_1.ApiConsumes)('text/plain'));
    }
    else if (options?.bodyType === doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON) {
        docs.push((0, swagger_1.ApiConsumes)('application/json'));
    }
    if (options?.bodyType) {
        docs.push(DocDefault({
            httpStatus: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.VALIDATION_ERROR,
            messagePath: 'request.validation',
        }));
    }
    if (options?.params) {
        const params = options?.params?.map(param => (0, swagger_1.ApiParam)(param));
        docs.push(...params);
    }
    if (options?.queries) {
        const queries = options?.queries?.map(query => (0, swagger_1.ApiQuery)(query));
        docs.push(...queries);
    }
    if (options?.dto) {
        docs.push((0, swagger_1.ApiBody)({ type: options?.dto }));
    }
    return (0, common_1.applyDecorators)(...docs);
}
exports.DocRequest = DocRequest;
function DocRequestFile(options) {
    const docs = [];
    if (options?.params) {
        const params = options?.params.map(param => (0, swagger_1.ApiParam)(param));
        docs.push(...params);
    }
    if (options?.queries) {
        const queries = options?.queries?.map(query => (0, swagger_1.ApiQuery)(query));
        docs.push(...queries);
    }
    if (options?.dto) {
        docs.push((0, swagger_1.ApiBody)({ type: options?.dto }));
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiConsumes)('multipart/form-data'), ...docs);
}
exports.DocRequestFile = DocRequestFile;
function DocGuard(options) {
    const oneOfForbidden = [];
    if (options?.role) {
        oneOfForbidden.push({
            statusCode: policy_status_code_constant_1.ENUM_POLICY_STATUS_CODE_ERROR.ROLE_FORBIDDEN_ERROR,
            messagePath: 'policy.error.roleForbidden',
        });
    }
    if (options?.policy) {
        oneOfForbidden.push({
            statusCode: policy_status_code_constant_1.ENUM_POLICY_STATUS_CODE_ERROR.ABILITY_FORBIDDEN_ERROR,
            messagePath: 'policy.error.abilityForbidden',
        });
    }
    return (0, common_1.applyDecorators)(DocOneOf(common_1.HttpStatus.FORBIDDEN, ...oneOfForbidden));
}
exports.DocGuard = DocGuard;
function DocAuth(options) {
    const docs = [];
    const oneOfUnauthorized = [];
    if (options?.jwtRefreshToken) {
        docs.push((0, swagger_1.ApiBearerAuth)('refreshToken'));
        oneOfUnauthorized.push({
            messagePath: 'auth.error.refreshTokenUnauthorized',
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.JWT_REFRESH_TOKEN_ERROR,
        });
    }
    if (options?.jwtAccessToken) {
        docs.push((0, swagger_1.ApiBearerAuth)('accessToken'));
        oneOfUnauthorized.push({
            messagePath: 'auth.error.accessTokenUnauthorized',
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.JWT_ACCESS_TOKEN_ERROR,
        });
    }
    if (options?.google) {
        docs.push((0, swagger_1.ApiBearerAuth)('google'));
        oneOfUnauthorized.push({
            messagePath: 'auth.error.socialGoogle',
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.SOCIAL_GOOGLE_ERROR,
        });
    }
    if (options?.apple) {
        docs.push((0, swagger_1.ApiBearerAuth)('apple'));
        oneOfUnauthorized.push({
            messagePath: 'auth.error.socialApple',
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.SOCIAL_APPLE_ERROR,
        });
    }
    if (options?.xApiKey) {
        docs.push((0, swagger_1.ApiSecurity)('xApiKey'));
        oneOfUnauthorized.push({
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_REQUIRED_ERROR,
            messagePath: 'apiKey.error.xApiKey.required',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.xApiKey.notFound',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_EXPIRED_ERROR,
            messagePath: 'apiKey.error.xApiKey.expired',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_INVALID_ERROR,
            messagePath: 'apiKey.error.xApiKey.invalid',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.X_API_KEY_FORBIDDEN_ERROR,
            messagePath: 'apiKey.error.xApiKey.forbidden',
        });
    }
    return (0, common_1.applyDecorators)(...docs, DocOneOf(common_1.HttpStatus.UNAUTHORIZED, ...oneOfUnauthorized));
}
exports.DocAuth = DocAuth;
function DocResponse(messagePath, options) {
    const docs = {
        httpStatus: options?.httpStatus ?? common_1.HttpStatus.OK,
        messagePath,
        statusCode: options?.statusCode ?? options?.httpStatus ?? common_1.HttpStatus.OK,
    };
    if (options?.dto) {
        docs.dto = options?.dto;
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProduces)('application/json'), DocDefault(docs));
}
exports.DocResponse = DocResponse;
function DocErrorGroup(docs) {
    return (0, common_1.applyDecorators)(...docs);
}
exports.DocErrorGroup = DocErrorGroup;
function DocResponsePaging(messagePath, options) {
    const docs = {
        httpStatus: options?.httpStatus ?? common_1.HttpStatus.OK,
        messagePath,
        statusCode: options?.statusCode ?? options?.httpStatus ?? common_1.HttpStatus.OK,
    };
    if (options?.dto) {
        docs.dto = options?.dto;
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProduces)('application/json'), (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        allowEmptyValue: true,
        type: 'string',
        description: 'Search will base on _metadata.pagination._availableSearch with rule contains, and case insensitive',
    }), (0, swagger_1.ApiQuery)({
        name: 'perPage',
        required: false,
        allowEmptyValue: true,
        example: 20,
        type: 'number',
        description: 'Data per page, max 100',
    }), (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        allowEmptyValue: true,
        example: 1,
        type: 'number',
        description: 'page number, max 20',
    }), (0, swagger_1.ApiQuery)({
        name: 'orderBy',
        required: false,
        allowEmptyValue: true,
        example: 'createdAt',
        type: 'string',
        description: 'Order by base on _metadata.pagination.availableOrderBy',
    }), (0, swagger_1.ApiQuery)({
        name: 'orderDirection',
        required: false,
        allowEmptyValue: true,
        example: pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC,
        enum: pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE,
        type: 'string',
        description: 'Order direction base on _metadata.pagination.availableOrderDirection',
    }), (0, swagger_1.ApiExtraModels)(response_paging_dto_1.ResponsePagingDto), (0, swagger_1.ApiExtraModels)(options.dto), (0, swagger_1.ApiResponse)({
        description: docs.httpStatus.toString(),
        status: docs.httpStatus,
        schema: {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(response_paging_dto_1.ResponsePagingDto) }],
            properties: {
                message: {
                    example: messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: docs.statusCode,
                },
                data: {
                    type: 'array',
                    items: {
                        $ref: (0, swagger_1.getSchemaPath)(docs.dto),
                    },
                },
            },
        },
    }));
}
exports.DocResponsePaging = DocResponsePaging;
function DocResponseFile(options) {
    const httpStatus = options?.httpStatus ?? common_1.HttpStatus.OK;
    return (0, common_1.applyDecorators)((0, swagger_1.ApiProduces)(options?.fileType ?? file_enum_constant_1.ENUM_FILE_MIME.CSV), (0, swagger_1.ApiResponse)({
        description: httpStatus.toString(),
        status: httpStatus,
    }));
}
exports.DocResponseFile = DocResponseFile;
//# sourceMappingURL=doc.decorator.js.map