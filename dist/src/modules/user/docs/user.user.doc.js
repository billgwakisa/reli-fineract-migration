"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUserDeleteSelfDoc = exports.UserAuthUpdateMobileNumberDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_enum_constant_1 = require("../../../common/doc/constants/doc.enum.constant");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const user_update_mobile_number_request_dto_1 = require("../dtos/request/user.update-mobile-number.request.dto");
function UserAuthUpdateMobileNumberDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'user update mobile number',
    }), (0, doc_decorator_1.DocRequest)({
        bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.JSON,
        dto: user_update_mobile_number_request_dto_1.UserUpdateMobileNumberRequestDto,
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true }), (0, doc_decorator_1.DocResponse)('user.updateMobileNumber'));
}
exports.UserAuthUpdateMobileNumberDoc = UserAuthUpdateMobileNumberDoc;
function UserUserDeleteSelfDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)({
        summary: 'user delete their account',
    }), (0, doc_decorator_1.DocAuth)({
        xApiKey: true,
        jwtAccessToken: true,
    }), (0, doc_decorator_1.DocGuard)({ role: true }), (0, doc_decorator_1.DocResponse)('user.deleteSelf'));
}
exports.UserUserDeleteSelfDoc = UserUserDeleteSelfDoc;
//# sourceMappingURL=user.user.doc.js.map