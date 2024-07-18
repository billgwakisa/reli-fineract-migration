import { EmailService } from 'src/modules/email/services/email.service';
export declare class MigrationEmailSeed {
    private readonly emailService;
    constructor(emailService: EmailService);
    migrate(): Promise<void>;
}
