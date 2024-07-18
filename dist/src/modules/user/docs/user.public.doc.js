"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPublicSignUpDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_enum_constant_1 = require("../../../common/doc/constants/doc.enum.constant");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const user_sign_up_request_dto_1 = require("../dtos/request/user.sign-up.request.dto");
function UserPublicSignUpDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'sign up',
    }), (0, doc_decorator_1.DocRequest)({
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: user_sign_up_request_dto_1.UserSignUpRequestDto,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
    }), (0, doc_decorator_1.DocResponse)('user.signUp', {
        httpStatus: common_1.HttpStatus.CREATED,
    }));
}
exports.UserPublicSignUpDoc = UserPublicSignUpDoc;
//# sourceMappingURL=user.public.doc.js.map