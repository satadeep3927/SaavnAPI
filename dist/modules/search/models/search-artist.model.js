"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchArtistModel = exports.SearchArtistAPIResponseModel = void 0;
const models_1 = require("#common/models");
const zod_1 = require("zod");
exports.SearchArtistAPIResponseModel = zod_1.z.object({
    total: zod_1.z.number(),
    start: zod_1.z.number(),
    results: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        id: zod_1.z.string(),
        ctr: zod_1.z.number(),
        entity: zod_1.z.number(),
        image: zod_1.z.string().url(),
        role: zod_1.z.string(),
        perma_url: zod_1.z.string().url(),
        type: zod_1.z.string(),
        mini_obj: zod_1.z.boolean(),
        isRadioPresent: zod_1.z.boolean(),
        is_followed: zod_1.z.boolean()
    }))
});
exports.SearchArtistModel = zod_1.z.object({
    total: zod_1.z.number(),
    start: zod_1.z.number(),
    results: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
        role: zod_1.z.string(),
        type: zod_1.z.string(),
        image: zod_1.z.array(models_1.DownloadLinkModel),
        url: zod_1.z.string()
    }))
});
