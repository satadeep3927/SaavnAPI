"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadLinkModel = void 0;
const zod_1 = require("zod");
exports.DownloadLinkModel = zod_1.z.object({
    quality: zod_1.z.string(),
    url: zod_1.z.string()
});
