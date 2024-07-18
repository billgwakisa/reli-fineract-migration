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
import { Connection } from 'mongoose';
import { AuthService } from 'src/common/auth/services/auth.service';
import { CountryService } from 'src/modules/country/services/country.service';
import { EmailService } from 'src/modules/email/services/email.service';
import { RoleService } from 'src/modules/role/services/role.service';
import { UserSignUpRequestDto } from 'src/modules/user/dtos/request/user.sign-up.request.dto';
import { UserPasswordHistoryService } from 'src/modules/user/services/user-password-history.service';
import { UserStateHistoryService } from 'src/modules/user/services/user-state-history.service';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserPublicController {
    private readonly databaseConnection;
    private readonly userService;
    private readonly userStateHistoryService;
    private readonly userPasswordHistoryService;
    private readonly authService;
    private readonly roleService;
    private readonly emailService;
    private readonly countryService;
    constructor(databaseConnection: Connection, userService: UserService, userStateHistoryService: UserStateHistoryService, userPasswordHistoryService: UserPasswordHistoryService, authService: AuthService, roleService: RoleService, emailService: EmailService, countryService: CountryService);
    signUp({ email, name, password: passwordString, country }: UserSignUpRequestDto): Promise<void>;
}
