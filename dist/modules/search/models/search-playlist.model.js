"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchPlaylistModel = exports.SearchPlaylistAPIResponseModel = void 0;
const models_1 = require("#common/models");
const zod_1 = require("zod");
exports.SearchPlaylistAPIResponseModel = zod_1.z.object({
    total: zod_1.z.number(),
    start: zod_1.z.number(),
    results: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        subtitle: zod_1.z.string(),
        type: zod_1.z.string(),
        image: zod_1.z.string(),
        perma_url: zod_1.z.string(),
        more_info: zod_1.z.object({
            uid: zod_1.z.string(),
            firstname: zod_1.z.string(),
            artist_name: zod_1.z.any(),
            entity_type: zod_1.z.string(),
            entity_sub_type: zod_1.z.string(),
            video_available: zod_1.z.boolean(),
            is_dolby_content: zod_1.z.any(),
            sub_types: zod_1.z.any(),
            images: zod_1.z.any(),
            lastname: zod_1.z.string(),
            song_count: zod_1.z.string(),
            language: zod_1.z.string()
        }),
        explicit_content: zod_1.z.string(),
        mini_obj: zod_1.z.boolean(),
        numsongs: zod_1.z.any()
    }))
});
exports.SearchPlaylistModel = zod_1.z.object({
    total: zod_1.z.number(),
    start: zod_1.z.number(),
    results: zod_1.z.array(
    // TODO: Do this for all search models
    zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
        type: zod_1.z.string(),
        image: zod_1.z.array(models_1.DownloadLinkModel),
        url: zod_1.z.string(),
        songCount: zod_1.z.number().nullable(),
        language: zod_1.z.string(),
        explicitContent: zod_1.z.boolean()
    }))
});
