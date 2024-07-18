export declare enum ENUM_FILE_TYPE {
    AUDIO = "audio",
    IMAGE = "image",
    EXCEL = "excel",
    VIDEO = "video"
}
export declare enum ENUM_FILE_MIME_IMAGE {
    JPG = "image/jpg",
    JPEG = "image/jpeg",
    PNG = "image/png"
}
export declare enum ENUM_FILE_MIME_DOCUMENT {
    PDF = "application/pdf"
}
export declare enum ENUM_FILE_MIME_EXCEL {
    XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    CSV = "text/csv"
}
export declare enum ENUM_FILE_MIME_AUDIO {
    MPEG = "audio/mpeg",
    MP3 = "audio/mp3"
}
export declare enum ENUM_FILE_MIME_VIDEO {
    M4A = "audio/x-m4a",
    MP4 = "video/mp4"
}
export declare const ENUM_FILE_MIME: {
    M4A: ENUM_FILE_MIME_VIDEO.M4A;
    MP4: ENUM_FILE_MIME_VIDEO.MP4;
    MPEG: ENUM_FILE_MIME_AUDIO.MPEG;
    MP3: ENUM_FILE_MIME_AUDIO.MP3;
    XLSX: ENUM_FILE_MIME_EXCEL.XLSX;
    CSV: ENUM_FILE_MIME_EXCEL.CSV;
    PDF: ENUM_FILE_MIME_DOCUMENT.PDF;
    JPG: ENUM_FILE_MIME_IMAGE.JPG;
    JPEG: ENUM_FILE_MIME_IMAGE.JPEG;
    PNG: ENUM_FILE_MIME_IMAGE.PNG;
};
export type ENUM_FILE_MIME = ENUM_FILE_MIME_IMAGE | ENUM_FILE_MIME_DOCUMENT | ENUM_FILE_MIME_EXCEL | ENUM_FILE_MIME_AUDIO | ENUM_FILE_MIME_VIDEO;
