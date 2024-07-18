import { HttpService } from '@nestjs/axios';
import {
    Controller,
    ForbiddenException,
    Get,
    Logger,
    Post,
    VERSION_NEUTRAL,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { Model } from 'mongoose';
import { catchError, map } from 'rxjs';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { Response } from 'src/common/response/decorators/response.decorator';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { LoansimportDoc } from 'src/modules/loansimport/docs/loansimport.doc';
import { LoansimportResponseDto } from 'src/modules/loansimport/dtos/response/loansimport.response.dto';
import { LoanImportEntity } from 'src/modules/loansimport/repository/entities/loanimport.entity';
import { LoanImportRepository } from 'src/modules/loansimport/repository/repositories/loanimport.repository';

@ApiTags('modules.public.hello')
@Controller({
    version: VERSION_NEUTRAL,
    path: '/loans-import',
})
export class LoansimportPublicController {
    constructor(
        private readonly loanImportRepository: LoanImportRepository,
        private readonly helperDateService: HelperDateService,
        private http: HttpService
    ) {}

    @LoansimportDoc()
    @Response('hello.hello')
    @Post('/')
    async postLoans(): Promise<IResponse<LoansimportResponseDto>> {
        const newDate = this.helperDateService.create();
        const logger = new Logger();
        const headers = { 'Fineract-Platform-TenantId': 'default' };
        const authHeader = {
            username: 'admin',
            password: 'Test@1234',
        };
        logger.log('Initiating loan import');

        try {
            const createLoan = async loan => {
                logger.log(`Creating loan for ${loan.principal}`);

                axios({
                    method: 'POST',
                    url: 'https://fineractxbmtest.usereli.tech/fineract-provider/api/v1/loans',
                    data: loan,
                    headers: headers,
                    auth: authHeader,
                })
                    .then(function (response) {
                        logger.log(response.status);
                        if ((response.status = 200)) {
                            const resourceId = response.data.resourceId;
                            logger.log(
                                `01. Created loan with id ${resourceId} and ${loan.principal}`
                            );
                            approveLoan(resourceId, loan);
                        }
                    })
                    .catch(e => {
                        logger.error(e);
                    });
            };

            const approveLoan = (resourceId, loan) => {
                logger.log(`Approving loan with id ${resourceId}`);

                const approval = {
                    approvedOnDate: loan.submittedOnDate,
                    expectedDisbursementDate: loan.submittedOnDate,
                    approvedLoanAmount: loan.principal,
                    note: '',
                    dateFormat: 'dd MMMM yyyy',
                    locale: 'en',
                };

                axios({
                    method: 'POST',
                    url: `https://fineractxbmtest.usereli.tech/fineract-provider/api/v1/loans/${resourceId}?command=approve`,
                    data: approval,
                    headers: headers,
                    auth: authHeader,
                })
                    .then(function (response) {
                        logger.log(response.status);
                        if ((response.status = 200)) {
                            const resourceId = response.data.resourceId;
                            logger.log(
                                `02. Approved loan with id ${resourceId}`
                            );

                            disburseLoan(resourceId, loan);
                        }
                    })
                    .catch(e => {
                        logger.error(e);
                    });
            };

            const disburseLoan = (resourceId, loan) => {
                logger.log(`Disbursing loan with id ${resourceId}`);

                const disbursal = {
                    actualDisbursementDate: loan.submittedOnDate,
                    transactionAmount: loan.principal,
                    externalId: '',
                    paymentTypeId: 1,
                    note: '',
                    dateFormat: 'dd MMMM yyyy',
                    locale: 'en',
                };

                axios({
                    method: 'POST',
                    url: `https://fineractxbmtest.usereli.tech/fineract-provider/api/v1/loans/${resourceId}?command=disburse`,
                    data: disbursal,
                    headers: headers,
                    auth: authHeader,
                })
                    .then(function (response) {
                        logger.log(response.status);
                        if ((response.status = 200)) {
                            const resourceId = response.data.resourceId;
                            logger.log(
                                `03. Disbursed loan with id ${resourceId}`
                            );
                        }
                    })
                    .catch(e => {
                        logger.error(e);
                    });
            };

            logger.log('Set up functions');

            //Read the input data

            //loop through all the loans
            // const loans = require('src/data/loans-data.json');
            var loans = JSON.parse(
                require('fs').readFileSync('src/data/loans-data.json', 'utf8')
            );

            // for(let loan of loans) {
            loans.forEach((loan, index) => {
                const loanRequestData = {
                    productId: loan.productId,
                    loanOfficerId: loan.officerId,
                    loanPurposeId: '',
                    fundId: 1,
                    submittedOnDate: loan.loanDate,
                    expectedDisbursementDate: loan.loanDate,
                    externalId: loan.loanId,
                    linkAccountId: '',
                    createStandingInstructionAtDisbursement: '',
                    loanTermFrequency: 1,
                    loanTermFrequencyType: loan.loanTermFrequencyType,
                    numberOfRepayments: loan.numberOfRepayments,
                    repaymentEvery: 1,
                    repaymentFrequencyType: loan.loanTermFrequencyType,
                    repaymentFrequencyNthDayType: '',
                    repaymentFrequencyDayOfWeekType: '',
                    repaymentsStartingFromDate: null,
                    interestChargedFromDate: null,
                    interestType: 1,
                    isEqualAmortization: false,
                    amortizationType: 1,
                    interestCalculationPeriodType: 1, //this should be annual
                    loanIdToClose: '',
                    isTopup: '',
                    transactionProcessingStrategyCode:
                        'mifos-standard-strategy',
                    interestRatePerPeriod: loan.interestRate,
                    charges: [],
                    collateral: [],
                    dateFormat: 'dd MMMM yyyy',
                    locale: 'en',
                    clientId: loan.clientId,
                    loanType: 'individual',
                    principal: loan.principal,
                };

                logger.log(`In loop for loop ${loanRequestData.principal}`);
                //create a loop of requests, spaced out by 3 seconds each

                //create the loan
                // setTimeout(() => {
                //     createLoan(loanRequestData);
                // }, 5000 * index);

                const create: LoanImportEntity = new LoanImportEntity();
                create.status = 'testing';
                create.resourceId = 2;
                create.response = 'The resource na?';
                create.message = 'This is the message';
                this.loanImportRepository.create<LoanImportEntity>(create);
            });

            //update mongo tracker

            //approve the loan(approvedOnDate, expectedDisbursementDate, approvedLoanAmount)
            //update mongo tracker

            //disburse the loan (actualDisbursementDate, transactionAmount)
            //update mongo tracker
        } catch (e) {
            logger.log(e);
        }

        return {
            data: {
                date: newDate,
                format: this.helperDateService.format(newDate),
                timestamp: this.helperDateService.createTimestamp(newDate),
            },
        };
    }

    @LoansimportDoc()
    @Response('We have the report')
    @Get('/report')
    async getReport(): Promise<IResponse<LoansimportResponseDto>> {
        const newDate = this.helperDateService.create();

        return {
            data: {
                date: newDate,
                format: this.helperDateService.format(newDate),
                timestamp: this.helperDateService.createTimestamp(newDate),
            },
        };
    }
}
