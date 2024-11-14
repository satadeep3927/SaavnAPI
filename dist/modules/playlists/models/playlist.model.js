"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistModel = exports.PlaylistAPIResponseModel = void 0;
const models_1 = require("#common/models");
const models_2 = require("#modules/artists/models");
const models_3 = require("#modules/songs/models");
const zod_1 = require("zod");
exports.PlaylistAPIResponseModel = zod_1.z
    .object({
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
    list: zod_1.z.array(models_3.SongAPIResponseModel),
    more_info: zod_1.z.object({
        uid: zod_1.z.string(),
        is_dolby_content: zod_1.z.boolean(),
        subtype: zod_1.z.array(zod_1.z.string()).default([]),
        last_updated: zod_1.z.string(),
        username: zod_1.z.string(),
        firstname: zod_1.z.string(),
        lastname: zod_1.z.string(),
        is_followed: zod_1.z.string(),
        isFY: zod_1.z.boolean(),
        follower_count: zod_1.z.string(),
        fan_count: zod_1.z.string(),
        playlist_type: zod_1.z.string(),
        share: zod_1.z.string(),
        sub_types: zod_1.z.array(zod_1.z.string()),
        images: zod_1.z.array(zod_1.z.string()),
        H2: zod_1.z.string().nullable(),
        subheading: zod_1.z.string(),
        video_count: zod_1.z.string(),
        artists: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string(),
            name: zod_1.z.string(),
            role: zod_1.z.string(),
            image: zod_1.z.string(),
            type: zod_1.z.string(),
            perma_url: zod_1.z.string()
        }))
    })
})
    .extend({
    description: zod_1.z.string()
});
exports.PlaylistModel = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string().nullable(),
    year: zod_1.z.number().nullable(),
    type: zod_1.z.string(),
    playCount: zod_1.z.number().nullable(),
    language: zod_1.z.string(),
    explicitContent: zod_1.z.boolean(),
    songCount: zod_1.z.number().nullable(),
    url: zod_1.z.string(),
    image: zod_1.z.array(models_1.DownloadLinkModel),
    songs: zod_1.z.array(models_3.SongModel).nullable(),
    artists: zod_1.z.array(models_2.ArtistMapModel).nullable()
});
