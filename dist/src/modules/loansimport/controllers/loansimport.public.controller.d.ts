import { HttpService } from '@nestjs/axios';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { LoansimportResponseDto } from 'src/modules/loansimport/dtos/response/loansimport.response.dto';
import { LoanImportRepository } from 'src/modules/loansimport/repository/repositories/loanimport.repository';
export declare class LoansimportPublicController {
    private readonly loanImportRepository;
    private readonly helperDateService;
    private http;
    constructor(loanImportRepository: LoanImportRepository, helperDateService: HelperDateService, http: HttpService);
    postLoans(): Promise<IResponse<LoansimportResponseDto>>;
    getReport(): Promise<IResponse<LoansimportResponseDto>>;
}
