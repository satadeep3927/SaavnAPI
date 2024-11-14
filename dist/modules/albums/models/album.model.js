"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumModel = exports.AlbumAPIResponseModel = void 0;
const models_1 = require("#common/models");
const models_2 = require("#modules/songs/models");
const zod_1 = require("zod");
exports.AlbumAPIResponseModel = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    subtitle: zod_1.z.string(),
    header_desc: zod_1.z.string(),
    type: zod_1.z.string(),
    perma_url: zod_1.z.string(),
    image: zod_1.z.string(),
    language: zod_1.z.string(),
    year: zod_1.z.string(),
    play_count: zod_1.z.string(),
    explicit_content: zod_1.z.string(),
    list_count: zod_1.z.string(),
    list_type: zod_1.z.string(),
    list: zod_1.z.array(models_2.SongAPIResponseModel),
    more_info: zod_1.z.object({
        artistMap: models_2.SongAPIResponseModel.shape.more_info.shape.artistMap,
        song_count: zod_1.z.string(),
        copyright_text: zod_1.z.string(),
        is_dolby_content: zod_1.z.boolean(),
        label_url: zod_1.z.string(),
    }),
});
exports.AlbumModel = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    year: zod_1.z.number().nullable(),
    type: zod_1.z.string(),
    playCount: zod_1.z.number().nullable(),
    language: zod_1.z.string(),
    explicitContent: zod_1.z.boolean(),
    artists: zod_1.z.object(models_2.SongModel.shape.artists.shape),
    songCount: zod_1.z.number().nullable(),
    url: zod_1.z.string(),
    image: zod_1.z.array(models_1.DownloadLinkModel),
    songs: zod_1.z.array(models_2.SongModel).nullable(),
});
