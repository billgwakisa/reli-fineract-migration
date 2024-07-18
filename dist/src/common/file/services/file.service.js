"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const helper_enum_constant_1 = require("../../helper/constants/helper.enum.constant");
const xlsx_1 = require("xlsx");
let FileService = class FileService {
    writeCsv(rows) {
        const worksheet = xlsx_1.utils.json_to_sheet(rows.data);
        const csv = xlsx_1.utils.sheet_to_csv(worksheet, { FS: ';' });
        const buff = Buffer.from(csv, 'utf8');
        return buff;
    }
    writeCsvFromArray(rows) {
        const worksheet = xlsx_1.utils.aoa_to_sheet(rows);
        const csv = xlsx_1.utils.sheet_to_csv(worksheet, { FS: ';' });
        const buff = Buffer.from(csv, 'utf8');
        return buff;
    }
    writeExcel(rows, options) {
        const workbook = xlsx_1.utils.book_new();
        for (const [index, row] of rows.entries()) {
            const worksheet = xlsx_1.utils.json_to_sheet(row.data);
            xlsx_1.utils.book_append_sheet(workbook, worksheet, row.sheetName ?? `Sheet${index + 1}`);
        }
        const buff = (0, xlsx_1.write)(workbook, {
            type: 'buffer',
            bookType: helper_enum_constant_1.ENUM_HELPER_FILE_EXCEL_TYPE.XLSX,
            password: options?.password,
        });
        return buff;
    }
    writeExcelFromArray(rows, options) {
        const workbook = xlsx_1.utils.book_new();
        const worksheet = xlsx_1.utils.aoa_to_sheet(rows);
        xlsx_1.utils.book_append_sheet(workbook, worksheet, `Sheet1`);
        const buff = (0, xlsx_1.write)(workbook, {
            type: 'buffer',
            bookType: helper_enum_constant_1.ENUM_HELPER_FILE_EXCEL_TYPE.XLSX,
            password: options?.password,
        });
        return buff;
    }
    readCsv(file) {
        const workbook = (0, xlsx_1.read)(file, {
            type: 'buffer',
        });
        const worksheetsName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetsName];
        const rows = xlsx_1.utils.sheet_to_json(worksheet);
        return {
            data: rows,
            sheetName: worksheetsName,
        };
    }
    readExcel(file, options) {
        const workbook = (0, xlsx_1.read)(file, {
            type: 'buffer',
            password: options?.password,
        });
        const worksheetsName = workbook.SheetNames;
        const sheets = [];
        for (let i = 0; i < worksheetsName.length; i++) {
            const worksheet = workbook.Sheets[worksheetsName[i]];
            const rows = xlsx_1.utils.sheet_to_json(worksheet);
            sheets.push({
                data: rows,
                sheetName: worksheetsName[i],
            });
        }
        return sheets;
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map