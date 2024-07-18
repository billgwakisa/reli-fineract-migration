import { ConfigService } from '@nestjs/config';
import { CreateTemplateCommandOutput, DeleteTemplateCommandOutput, GetTemplateCommandOutput, ListTemplatesCommandOutput, SendBulkTemplatedEmailCommandOutput, SendTemplatedEmailCommandOutput, UpdateTemplateCommandOutput } from '@aws-sdk/client-ses';
import { AwsSESCreateTemplateDto, AwsSESGetTemplateDto, AwsSESSendBulkDto, AwsSESSendDto, AwsSESUpdateTemplateDto } from 'src/common/aws/dtos/aws.ses.dto';
import { IAwsSESService } from 'src/common/aws/interfaces/aws.ses-service.interface';
export declare class AwsSESService implements IAwsSESService {
    private readonly configService;
    private readonly sesClient;
    constructor(configService: ConfigService);
    listTemplates(nextToken?: string): Promise<ListTemplatesCommandOutput>;
    getTemplate({ name, }: AwsSESGetTemplateDto): Promise<GetTemplateCommandOutput>;
    createTemplate({ name, subject, htmlBody, plainTextBody, }: AwsSESCreateTemplateDto): Promise<CreateTemplateCommandOutput>;
    updateTemplate({ name, subject, htmlBody, plainTextBody, }: AwsSESUpdateTemplateDto): Promise<UpdateTemplateCommandOutput>;
    deleteTemplate({ name, }: AwsSESGetTemplateDto): Promise<DeleteTemplateCommandOutput>;
    send<T>({ recipients, sender, replyTo, bcc, cc, templateName, templateData, }: AwsSESSendDto<T>): Promise<SendTemplatedEmailCommandOutput>;
    sendBulk({ recipients, sender, replyTo, bcc, cc, templateName, }: AwsSESSendBulkDto): Promise<SendBulkTemplatedEmailCommandOutput>;
}
