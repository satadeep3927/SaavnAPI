"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistMapModel = exports.ArtistMapAPIResponseModel = void 0;
const models_1 = require("#common/models");
const zod_1 = require("zod");
exports.ArtistMapAPIResponseModel = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    role: zod_1.z.string(),
    type: zod_1.z.string(),
    image: zod_1.z.string(),
    perma_url: zod_1.z.string()
});
exports.ArtistMapModel = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    role: zod_1.z.string(),
    type: zod_1.z.string(),
    image: zod_1.z.array(models_1.DownloadLinkModel),
    url: zod_1.z.string()
});
