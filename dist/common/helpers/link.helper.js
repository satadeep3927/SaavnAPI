"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImageLinks = exports.createDownloadLinks = void 0;
const node_forge_1 = __importDefault(require("node-forge"));
const createDownloadLinks = (encryptedMediaUrl) => {
    if (!encryptedMediaUrl)
        return [];
    const qualities = [
        { id: '_12', bitrate: '12kbps' },
        { id: '_48', bitrate: '48kbps' },
        { id: '_96', bitrate: '96kbps' },
        { id: '_160', bitrate: '160kbps' },
        { id: '_320', bitrate: '320kbps' }
    ];
    const key = '38346591';
    const iv = '00000000';
    const encrypted = node_forge_1.default.util.decode64(encryptedMediaUrl);
    const decipher = node_forge_1.default.cipher.createDecipher('DES-ECB', node_forge_1.default.util.createBuffer(key));
    decipher.start({ iv: node_forge_1.default.util.createBuffer(iv) });
    decipher.update(node_forge_1.default.util.createBuffer(encrypted));
    decipher.finish();
    const decryptedLink = decipher.output.getBytes();
    return qualities.map((quality) => ({
        quality: quality.bitrate,
        url: decryptedLink.replace('_96', quality.id)
    }));
};
exports.createDownloadLinks = createDownloadLinks;
const createImageLinks = (link) => {
    if (!link)
        return [];
    const qualities = ['50x50', '150x150', '500x500'];
    const qualityRegex = /150x150|50x50/;
    const protocolRegex = /^http:\/\//;
    return qualities.map((quality) => ({
        quality,
        url: link.replace(qualityRegex, quality).replace(protocolRegex, 'https://')
    }));
};
exports.createImageLinks = createImageLinks;
