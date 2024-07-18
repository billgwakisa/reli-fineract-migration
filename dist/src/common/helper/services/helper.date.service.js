"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperDateService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const moment_timezone_1 = __importStar(require("moment-timezone"));
const helper_enum_constant_1 = require("../constants/helper.enum.constant");
let HelperDateService = class HelperDateService {
    constructor(configService) {
        this.configService = configService;
        this.defTz = this.configService.get('app.timezone');
    }
    calculateAge(dateOfBirth, year) {
        const m = (0, moment_timezone_1.default)().tz(this.defTz);
        if (year) {
            m.set('year', year);
        }
        return m.diff(dateOfBirth, 'years');
    }
    diff(dateOne, dateTwoMoreThanDateOne, options) {
        const mDateOne = (0, moment_timezone_1.default)(dateOne).tz(this.defTz);
        const mDateTwo = (0, moment_timezone_1.default)(dateTwoMoreThanDateOne).tz(this.defTz);
        const diff = moment_timezone_1.default.duration(mDateTwo.diff(mDateOne));
        if (options?.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.MILIS) {
            return diff.asMilliseconds();
        }
        else if (options?.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.SECONDS) {
            return diff.asSeconds();
        }
        else if (options?.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.HOURS) {
            return diff.asHours();
        }
        else if (options?.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.MINUTES) {
            return diff.asMinutes();
        }
        else {
            return diff.asDays();
        }
    }
    check(date) {
        return (0, moment_timezone_1.default)(date, 'YYYY-MM-DD', true).tz(this.defTz).isValid();
    }
    checkIso(date) {
        return (0, moment_timezone_1.default)(date, moment_timezone_1.ISO_8601, true).tz(this.defTz).isValid();
    }
    checkTimestamp(timestamp) {
        return (0, moment_timezone_1.default)(timestamp, true).tz(this.defTz).isValid();
    }
    create(date, options) {
        const mDate = (0, moment_timezone_1.default)(date ?? undefined).tz(this.defTz);
        if (options?.startOfDay) {
            mDate.startOf('day');
        }
        return mDate.toDate();
    }
    createTimestamp(date, options) {
        const mDate = (0, moment_timezone_1.default)(date ?? undefined).tz(this.defTz);
        if (options?.startOfDay) {
            mDate.startOf('day');
        }
        return mDate.valueOf();
    }
    format(date, options) {
        if (options?.locale) {
            moment_timezone_1.default.locale(options.locale);
        }
        return (0, moment_timezone_1.default)(date)
            .tz(this.defTz)
            .format(options?.format ?? helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.DATE);
    }
    formatIsoDurationFromMinutes(minutes) {
        return moment_timezone_1.default.duration(minutes, 'minutes').toISOString();
    }
    formatIsoDurationFromHours(hours) {
        return moment_timezone_1.default.duration(hours, 'hours').toISOString();
    }
    formatIsoDurationFromDays(days) {
        return moment_timezone_1.default.duration(days, 'days').toISOString();
    }
    forwardInSeconds(seconds, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .add(seconds, 'seconds')
            .toDate();
    }
    backwardInSeconds(seconds, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .subtract(seconds, 'seconds')
            .toDate();
    }
    forwardInMinutes(minutes, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .add(minutes, 'minutes')
            .toDate();
    }
    backwardInMinutes(minutes, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .subtract(minutes, 'minutes')
            .toDate();
    }
    forwardInHours(hours, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .add(hours, 'hours')
            .toDate();
    }
    backwardInHours(hours, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .subtract(hours, 'hours')
            .toDate();
    }
    forwardInDays(days, options) {
        return (0, moment_timezone_1.default)(options?.fromDate).tz(this.defTz).add(days, 'd').toDate();
    }
    backwardInDays(days, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .subtract(days, 'days')
            .toDate();
    }
    forwardInMonths(months, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .add(months, 'months')
            .toDate();
    }
    backwardInMonths(months, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .subtract(months, 'months')
            .toDate();
    }
    forwardInYears(years, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .add(years, 'years')
            .toDate();
    }
    backwardInYears(years, options) {
        return (0, moment_timezone_1.default)(options?.fromDate)
            .tz(this.defTz)
            .subtract(years, 'years')
            .toDate();
    }
    endOfMonth(date) {
        return (0, moment_timezone_1.default)(date).tz(this.defTz).endOf('month').toDate();
    }
    startOfMonth(date) {
        return (0, moment_timezone_1.default)(date).tz(this.defTz).startOf('month').toDate();
    }
    endOfYear(date) {
        return (0, moment_timezone_1.default)(date).tz(this.defTz).endOf('year').toDate();
    }
    startOfYear(date) {
        return (0, moment_timezone_1.default)(date).tz(this.defTz).startOf('year').toDate();
    }
    endOfDay(date) {
        return (0, moment_timezone_1.default)(date).tz(this.defTz).endOf('day').toDate();
    }
    startOfDay(date) {
        return (0, moment_timezone_1.default)(date).tz(this.defTz).startOf('day').toDate();
    }
    setTime(date, { hour, minute, second, millisecond }) {
        return (0, moment_timezone_1.default)(date)
            .tz(this.defTz)
            .set({
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond,
        })
            .toDate();
    }
    addTime(date, { hour, minute, second, millisecond }) {
        return (0, moment_timezone_1.default)(date)
            .tz(this.defTz)
            .add({
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond,
        })
            .toDate();
    }
    subtractTime(date, { hour, minute, second }) {
        return (0, moment_timezone_1.default)(date)
            .tz(this.defTz)
            .subtract({
            hour: hour,
            minute: minute,
            second: second,
        })
            .toDate();
    }
    roundDown(date, options) {
        const mDate = (0, moment_timezone_1.default)(date).tz(this.defTz);
        if (options?.hour) {
            mDate.set({ hour: 0 });
        }
        if (options?.minute) {
            mDate.set({ minute: 0 });
        }
        if (options?.second) {
            mDate.set({ second: 0 });
        }
        if (options?.millisecond) {
            mDate.set({ millisecond: 0 });
        }
        return mDate.toDate();
    }
};
exports.HelperDateService = HelperDateService;
exports.HelperDateService = HelperDateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], HelperDateService);
//# sourceMappingURL=helper.date.service.js.map