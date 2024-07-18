"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansimportPublicController = void 0;
const openapi = require("@nestjs/swagger");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const axios_2 = __importDefault(require("axios"));
const helper_date_service_1 = require("../../../common/helper/services/helper.date.service");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const loansimport_doc_1 = require("../docs/loansimport.doc");
const loanimport_entity_1 = require("../repository/entities/loanimport.entity");
const loanimport_repository_1 = require("../repository/repositories/loanimport.repository");
let LoansimportPublicController = class LoansimportPublicController {
    constructor(loanImportRepository, helperDateService, http) {
        this.loanImportRepository = loanImportRepository;
        this.helperDateService = helperDateService;
        this.http = http;
    }
    async postLoans() {
        const newDate = this.helperDateService.create();
        const logger = new common_1.Logger();
        const headers = { 'Fineract-Platform-TenantId': 'default' };
        const authHeader = {
            username: 'admin',
            password: 'Test@1234',
        };
        logger.log('Initiating loan import');
        try {
            const createLoan = async (loan) => {
                logger.log(`Creating loan for ${loan.principal}`);
                (0, axios_2.default)({
                    method: 'POST',
                    url: 'https://fineractxbmtest.usereli.tech/fineract-provider/api/v1/loans',
                    data: loan,
                    headers: headers,
                    auth: authHeader,
                })
                    .then(function (response) {
                    logger.log(response.status);
                    updateStatus(response);
                    if ((response.status = 200)) {
                        const resourceId = response.data.resourceId;
                        logger.log(`01. Created loan with id ${resourceId} and ${loan.principal}`);
                        approveLoan(resourceId, loan);
                    }
                })
                    .catch(e => {
                    logger.error(e);
                });
            };
            const updateStatus = responseData => {
                const create = new loanimport_entity_1.LoanImportEntity();
                create.status = responseData.status;
                create.resourceId = responseData.data?.resourceId;
                create.response = responseData.data;
                create.message = 'Creation';
                this.loanImportRepository.create(create);
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
                (0, axios_2.default)({
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
                        logger.log(`02. Approved loan with id ${resourceId}`);
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
                (0, axios_2.default)({
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
                        logger.log(`03. Disbursed loan with id ${resourceId}`);
                    }
                })
                    .catch(e => {
                    logger.error(e);
                });
            };
            logger.log('Set up functions');
            var loans = JSON.parse(require('fs').readFileSync('src/data/loans-data.json', 'utf8'));
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
                    interestCalculationPeriodType: 1,
                    loanIdToClose: '',
                    isTopup: '',
                    transactionProcessingStrategyCode: 'mifos-standard-strategy',
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
                setTimeout(() => {
                    createLoan(loanRequestData);
                }, 1200 * index);
            });
        }
        catch (e) {
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
    async getReport() {
        const newDate = this.helperDateService.create();
        return {
            data: {
                date: newDate,
                format: this.helperDateService.format(newDate),
                timestamp: this.helperDateService.createTimestamp(newDate),
            },
        };
    }
};
exports.LoansimportPublicController = LoansimportPublicController;
__decorate([
    (0, loansimport_doc_1.LoansimportDoc)(),
    (0, response_decorator_1.Response)('hello.hello'),
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoansimportPublicController.prototype, "postLoans", null);
__decorate([
    (0, loansimport_doc_1.LoansimportDoc)(),
    (0, response_decorator_1.Response)('We have the report'),
    (0, common_1.Get)('/report'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoansimportPublicController.prototype, "getReport", null);
exports.LoansimportPublicController = LoansimportPublicController = __decorate([
    (0, swagger_1.ApiTags)('modules.public.hello'),
    (0, common_1.Controller)({
        version: common_1.VERSION_NEUTRAL,
        path: '/loans-import',
    }),
    __metadata("design:paramtypes", [loanimport_repository_1.LoanImportRepository,
        helper_date_service_1.HelperDateService,
        axios_1.HttpService])
], LoansimportPublicController);
//# sourceMappingURL=loansimport.public.controller.js.map