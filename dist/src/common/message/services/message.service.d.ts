import { ConfigService } from '@nestjs/config';
import { ValidationError } from 'class-validator';
import { I18nService } from 'nestjs-i18n';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
import { ENUM_MESSAGE_LANGUAGE } from 'src/common/message/constants/message.enum.constant';
import { IMessageErrorOptions, IMessageSetOptions, IMessageValidationError, IMessageValidationImportError, IMessageValidationImportErrorParam } from 'src/common/message/interfaces/message.interface';
import { IMessageService } from 'src/common/message/interfaces/message.service.interface';
export declare class MessageService implements IMessageService {
    private readonly i18n;
    private readonly configService;
    private readonly helperArrayService;
    private readonly defaultLanguage;
    private readonly availableLanguage;
    private readonly debug;
    constructor(i18n: I18nService, configService: ConfigService, helperArrayService: HelperArrayService);
    getAvailableLanguages(): ENUM_MESSAGE_LANGUAGE[];
    getLanguage(): ENUM_MESSAGE_LANGUAGE;
    filterLanguage(customLanguage: string): string[];
    setMessage(path: string, options?: IMessageSetOptions): string;
    setValidationMessage(errors: ValidationError[], options?: IMessageErrorOptions): IMessageValidationError[];
    setValidationImportMessage(errors: IMessageValidationImportErrorParam[], options?: IMessageErrorOptions): IMessageValidationImportError[];
}
