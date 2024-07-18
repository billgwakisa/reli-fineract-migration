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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3Service = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const helper_string_service_1 = require("../../helper/services/helper.string.service");
const aws_constant_1 = require("../constants/aws.constant");
let AwsS3Service = class AwsS3Service {
    constructor(configService, helperStringService) {
        this.configService = configService;
        this.helperStringService = helperStringService;
        this.s3Client = new client_s3_1.S3Client({
            credentials: {
                accessKeyId: this.configService.get('aws.s3.credential.key'),
                secretAccessKey: this.configService.get('aws.s3.credential.secret'),
            },
            region: this.configService.get('aws.s3.region'),
        });
        this.bucket = this.configService.get('aws.s3.bucket');
        this.baseUrl = this.configService.get('aws.s3.baseUrl');
    }
    async checkBucketExistence() {
        const command = new client_s3_1.HeadBucketCommand({
            Bucket: this.bucket,
        });
        try {
            const check = await this.s3Client.send(command);
            return check;
        }
        catch (err) {
            throw err;
        }
    }
    async listBucket() {
        const command = new client_s3_1.ListBucketsCommand({});
        try {
            const listBucket = await this.s3Client.send(command);
            const mapList = listBucket.Buckets.map((val) => val.Name);
            return mapList;
        }
        catch (err) {
            throw err;
        }
    }
    async listItemInBucket(prefix) {
        const command = new client_s3_1.ListObjectsV2Command({
            Bucket: this.bucket,
            Prefix: prefix,
        });
        try {
            const listItems = await this.s3Client.send(command);
            const mapList = listItems.Contents.map((val) => {
                const lastIndex = val.Key.lastIndexOf('/');
                const path = val.Key.substring(0, lastIndex);
                const filename = val.Key.substring(lastIndex + 1, val.Key.length);
                const mime = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
                return {
                    bucket: this.bucket,
                    path,
                    pathWithFilename: val.Key,
                    filename: filename,
                    completedUrl: `${this.baseUrl}/${val.Key}`,
                    baseUrl: this.baseUrl,
                    mime,
                    size: val.Size,
                };
            });
            return mapList;
        }
        catch (err) {
            throw err;
        }
    }
    async getItemInBucket(pathWithFilename) {
        const command = new client_s3_1.GetObjectCommand({
            Bucket: this.bucket,
            Key: pathWithFilename,
        });
        try {
            const item = await this.s3Client.send(command);
            return item.Body;
        }
        catch (err) {
            throw err;
        }
    }
    async putItemInBucket(file, options) {
        let path = options?.path;
        path = path?.startsWith('/') ? path.replace('/', '') : path;
        const mime = file.originalname.substring(file.originalname.lastIndexOf('.') + 1, file.originalname.length);
        const filename = options?.customFilename
            ? `${options?.customFilename}.${mime}`
            : file.originalname;
        const content = file.buffer;
        const key = path ? `${path}/${filename}` : filename;
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: content,
        });
        try {
            await this.s3Client.send(command);
            return {
                bucket: this.bucket,
                path,
                pathWithFilename: key,
                filename: filename,
                completedUrl: `${this.baseUrl}/${key}`,
                baseUrl: this.baseUrl,
                mime,
                size: file.size,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async putItemInBucketWithAcl(file, options) {
        let path = options?.path;
        path = path?.startsWith('/') ? path.replace('/', '') : path;
        const acl = options?.acl
            ? options.acl
            : client_s3_1.ObjectCannedACL.public_read;
        const mime = file.originalname.substring(file.originalname.lastIndexOf('.') + 1, file.originalname.length);
        const filename = options?.customFilename
            ? `${options?.customFilename}.${mime}`
            : file.originalname;
        const content = file.buffer;
        const key = path ? `${path}/${filename}` : filename;
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: content,
            ACL: acl,
        });
        try {
            await this.s3Client.send(command);
            return {
                bucket: this.bucket,
                path,
                pathWithFilename: key,
                filename: filename,
                completedUrl: `${this.baseUrl}/${key}`,
                baseUrl: this.baseUrl,
                mime,
                size: file.size,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async deleteItemInBucket(pathWithFilename) {
        const command = new client_s3_1.DeleteObjectCommand({
            Bucket: this.bucket,
            Key: pathWithFilename,
        });
        try {
            await this.s3Client.send(command);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteItemsInBucket(pathWithFilename) {
        const keys = pathWithFilename.map((val) => ({
            Key: val,
        }));
        const command = new client_s3_1.DeleteObjectsCommand({
            Bucket: this.bucket,
            Delete: {
                Objects: keys,
            },
        });
        try {
            await this.s3Client.send(command);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteFolder(dir) {
        const commandList = new client_s3_1.ListObjectsV2Command({
            Bucket: this.bucket,
            Prefix: dir,
        });
        const lists = await this.s3Client.send(commandList);
        try {
            const listItems = lists.Contents.map(val => ({
                Key: val.Key,
            }));
            const commandDeleteItems = new client_s3_1.DeleteObjectsCommand({
                Bucket: this.bucket,
                Delete: {
                    Objects: listItems,
                },
            });
            await this.s3Client.send(commandDeleteItems);
            const commandDelete = new client_s3_1.DeleteObjectCommand({
                Bucket: this.bucket,
                Key: dir,
            });
            await this.s3Client.send(commandDelete);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async createMultiPart(file, maxPartNumber, options) {
        if (maxPartNumber > aws_constant_1.AWS_S3_MAX_PART_NUMBER) {
            throw new Error(`Max part number is greater than ${aws_constant_1.AWS_S3_MAX_PART_NUMBER}`);
        }
        let path = options?.path ?? '/';
        path = path.startsWith('/') ? path.replace('/', '') : path;
        const mime = file.originalname.substring(file.originalname.lastIndexOf('.') + 1, file.originalname.length);
        const filename = options?.customFilename
            ? `${options?.customFilename}.${mime}`
            : file.originalname;
        const key = path ? `${path}/${filename}` : filename;
        const multiPartCommand = new client_s3_1.CreateMultipartUploadCommand({
            Bucket: this.bucket,
            Key: key,
        });
        try {
            const response = await this.s3Client.send(multiPartCommand);
            return {
                bucket: this.bucket,
                uploadId: response.UploadId,
                path,
                pathWithFilename: key,
                filename: filename,
                completedUrl: `${this.baseUrl}/${key}`,
                baseUrl: this.baseUrl,
                mime,
                size: 0,
                lastPartNumber: 0,
                maxPartNumber: maxPartNumber,
                parts: [],
            };
        }
        catch (err) {
            throw err;
        }
    }
    async createMultiPartWithAcl(file, maxPartNumber, options) {
        let path = options?.path ?? '/';
        path = path.startsWith('/') ? path.replace('/', '') : path;
        const acl = options?.acl
            ? options.acl
            : client_s3_1.ObjectCannedACL.public_read;
        const mime = file.originalname.substring(file.originalname.lastIndexOf('.') + 1, file.originalname.length);
        const filename = options?.customFilename
            ? `${options?.customFilename}.${mime}`
            : file.originalname;
        const key = path ? `${path}/${filename}` : filename;
        const multiPartCommand = new client_s3_1.CreateMultipartUploadCommand({
            Bucket: this.bucket,
            Key: key,
            ACL: acl,
        });
        try {
            const response = await this.s3Client.send(multiPartCommand);
            return {
                bucket: this.bucket,
                uploadId: response.UploadId,
                path,
                pathWithFilename: key,
                filename: filename,
                completedUrl: `${this.baseUrl}/${key}`,
                baseUrl: this.baseUrl,
                mime,
                size: 0,
                lastPartNumber: 0,
                maxPartNumber: maxPartNumber,
                parts: [],
            };
        }
        catch (err) {
            throw err;
        }
    }
    async uploadPart(multipart, partNumber, content) {
        const uploadPartCommand = new client_s3_1.UploadPartCommand({
            Bucket: this.bucket,
            Key: multipart.path,
            Body: content,
            PartNumber: partNumber,
            UploadId: multipart.uploadId,
        });
        try {
            const { ETag } = await this.s3Client.send(uploadPartCommand);
            return {
                eTag: ETag,
                partNumber: partNumber,
                size: content.length,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async updateMultiPart({ size, parts, ...others }, part) {
        parts.push(part);
        return {
            ...others,
            size: size + part.size,
            lastPartNumber: part.partNumber,
            parts,
        };
    }
    async completeMultipart(multipart) {
        const completeMultipartCommand = new client_s3_1.CompleteMultipartUploadCommand({
            Bucket: this.bucket,
            Key: multipart.path,
            UploadId: multipart.uploadId,
            MultipartUpload: {
                Parts: multipart.parts,
            },
        });
        try {
            await this.s3Client.send(completeMultipartCommand);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async abortMultipart(multipart) {
        const abortMultipartCommand = new client_s3_1.AbortMultipartUploadCommand({
            Bucket: this.bucket,
            Key: multipart.path,
            UploadId: multipart.uploadId,
        });
        try {
            await this.s3Client.send(abortMultipartCommand);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async getFilenameFromCompletedUrl(completedUrl) {
        return completedUrl.replace(`${this.baseUrl}`, '');
    }
    async createRandomFilename(path) {
        const filename = this.helperStringService.random(20);
        return {
            path: path ?? '/',
            customFilename: filename,
        };
    }
};
exports.AwsS3Service = AwsS3Service;
exports.AwsS3Service = AwsS3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        helper_string_service_1.HelperStringService])
], AwsS3Service);
//# sourceMappingURL=aws.s3.service.js.map