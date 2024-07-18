"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM_FILE_MIME = exports.ENUM_FILE_MIME_VIDEO = exports.ENUM_FILE_MIME_AUDIO = exports.ENUM_FILE_MIME_EXCEL = exports.ENUM_FILE_MIME_DOCUMENT = exports.ENUM_FILE_MIME_IMAGE = exports.ENUM_FILE_TYPE = void 0;
var ENUM_FILE_TYPE;
(function (ENUM_FILE_TYPE) {
    ENUM_FILE_TYPE["AUDIO"] = "audio";
    ENUM_FILE_TYPE["IMAGE"] = "image";
    ENUM_FILE_TYPE["EXCEL"] = "excel";
    ENUM_FILE_TYPE["VIDEO"] = "video";
})(ENUM_FILE_TYPE || (exports.ENUM_FILE_TYPE = ENUM_FILE_TYPE = {}));
var ENUM_FILE_MIME_IMAGE;
(function (ENUM_FILE_MIME_IMAGE) {
    ENUM_FILE_MIME_IMAGE["JPG"] = "image/jpg";
    ENUM_FILE_MIME_IMAGE["JPEG"] = "image/jpeg";
    ENUM_FILE_MIME_IMAGE["PNG"] = "image/png";
})(ENUM_FILE_MIME_IMAGE || (exports.ENUM_FILE_MIME_IMAGE = ENUM_FILE_MIME_IMAGE = {}));
var ENUM_FILE_MIME_DOCUMENT;
(function (ENUM_FILE_MIME_DOCUMENT) {
    ENUM_FILE_MIME_DOCUMENT["PDF"] = "application/pdf";
})(ENUM_FILE_MIME_DOCUMENT || (exports.ENUM_FILE_MIME_DOCUMENT = ENUM_FILE_MIME_DOCUMENT = {}));
var ENUM_FILE_MIME_EXCEL;
(function (ENUM_FILE_MIME_EXCEL) {
    ENUM_FILE_MIME_EXCEL["XLSX"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    ENUM_FILE_MIME_EXCEL["CSV"] = "text/csv";
})(ENUM_FILE_MIME_EXCEL || (exports.ENUM_FILE_MIME_EXCEL = ENUM_FILE_MIME_EXCEL = {}));
var ENUM_FILE_MIME_AUDIO;
(function (ENUM_FILE_MIME_AUDIO) {
    ENUM_FILE_MIME_AUDIO["MPEG"] = "audio/mpeg";
    ENUM_FILE_MIME_AUDIO["MP3"] = "audio/mp3";
})(ENUM_FILE_MIME_AUDIO || (exports.ENUM_FILE_MIME_AUDIO = ENUM_FILE_MIME_AUDIO = {}));
var ENUM_FILE_MIME_VIDEO;
(function (ENUM_FILE_MIME_VIDEO) {
    ENUM_FILE_MIME_VIDEO["M4A"] = "audio/x-m4a";
    ENUM_FILE_MIME_VIDEO["MP4"] = "video/mp4";
})(ENUM_FILE_MIME_VIDEO || (exports.ENUM_FILE_MIME_VIDEO = ENUM_FILE_MIME_VIDEO = {}));
exports.ENUM_FILE_MIME = {
    ...ENUM_FILE_MIME_IMAGE,
    ...ENUM_FILE_MIME_DOCUMENT,
    ...ENUM_FILE_MIME_EXCEL,
    ...ENUM_FILE_MIME_AUDIO,
    ...ENUM_FILE_MIME_VIDEO,
};
//# sourceMappingURL=file.enum.constant.js.map