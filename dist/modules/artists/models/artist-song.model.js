"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistSongModel = exports.ArtistSongAPIResponseModel = void 0;
const models_1 = require("#modules/songs/models");
const zod_1 = require("zod");
exports.ArtistSongAPIResponseModel = zod_1.z.object({
    artistId: zod_1.z.string(),
    name: zod_1.z.string(),
    subtitle: zod_1.z.string(),
    image: zod_1.z.string(),
    follower_count: zod_1.z.string(),
    type: zod_1.z.string(),
    isVerified: zod_1.z.boolean(),
    dominantLanguage: zod_1.z.string(),
    dominantType: zod_1.z.string(),
    topSongs: zod_1.z.object({
        songs: zod_1.z.array(models_1.SongAPIResponseModel),
        total: zod_1.z.number()
    })
});
exports.ArtistSongModel = zod_1.z.object({
    total: zod_1.z.number(),
    songs: zod_1.z.array(models_1.SongModel)
});
