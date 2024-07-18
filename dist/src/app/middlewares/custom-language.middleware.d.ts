import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response, NextFunction } from 'express';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
export declare class MessageCustomLanguageMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly helperArrayService;
    private readonly availableLanguage;
    constructor(configService: ConfigService, helperArrayService: HelperArrayService);
    use(req: IRequestApp, res: Response, next: NextFunction): Promise<void>;
    private filterLanguage;
}
