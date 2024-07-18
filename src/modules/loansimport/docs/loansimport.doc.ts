import { applyDecorators } from '@nestjs/common';
import { Doc, DocResponse } from 'src/common/doc/decorators/doc.decorator';
import { LoansimportResponseDto } from 'src/modules/loansimport/dtos/response/loansimport.response.dto';

export function LoansimportDoc(): MethodDecorator {
    return applyDecorators(
        Doc({
            summary: 'Loans import test api',
        }),
        DocResponse<LoansimportResponseDto>('app.loansimport', {
            dto: LoansimportResponseDto,
        })
    );
}
