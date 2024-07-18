import { AwsSESService } from 'src/common/aws/services/aws.ses.service';
import { ConfigService } from '@nestjs/config';
import { IEmailService } from 'src/modules/email/interfaces/email.service.interface';
import { GetTemplateCommandOutput } from '@aws-sdk/client-ses';
import { EmailSendDto } from 'src/modules/email/dtos/email.send.dto';
import { EmailSendTempPasswordDto } from 'src/modules/email/dtos/email.send-temp-password.dto';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class EmailService implements IEmailService {
    private readonly awsSESService;
    private readonly helperDateService;
    private readonly configService;
    private readonly fromEmail;
    constructor(awsSESService: AwsSESService, helperDateService: HelperDateService, configService: ConfigService);
    createChangePassword(): Promise<boolean>;
    getChangePassword(): Promise<GetTemplateCommandOutput>;
    deleteChangePassword(): Promise<boolean>;
    sendChangePassword({ name, email }: EmailSendDto): Promise<boolean>;
    createWelcome(): Promise<boolean>;
    getWelcome(): Promise<GetTemplateCommandOutput>;
    deleteWelcome(): Promise<boolean>;
    sendWelcome({ name, email }: EmailSendDto): Promise<boolean>;
    createTempPassword(): Promise<boolean>;
    getTempPassword(): Promise<GetTemplateCommandOutput>;
    deleteTempPassword(): Promise<boolean>;
    sendTempPassword({ name, email }: EmailSendDto, { password, expiredAt }: EmailSendTempPasswordDto): Promise<boolean>;
}
