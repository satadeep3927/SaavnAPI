"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistAlbumModel = exports.ArtistAlbumAPIResponseModel = void 0;
const models_1 = require("#modules/albums/models");
const zod_1 = require("zod");
exports.ArtistAlbumAPIResponseModel = zod_1.z.object({
    artistId: zod_1.z.string(),
    name: zod_1.z.string(),
    subtitle: zod_1.z.string(),
    image: zod_1.z.string(),
    follower_count: zod_1.z.string(),
    type: zod_1.z.string(),
    isVerified: zod_1.z.boolean(),
    dominantLanguage: zod_1.z.string(),
    dominantType: zod_1.z.string(),
    topAlbums: zod_1.z.object({
        albums: zod_1.z.array(models_1.AlbumAPIResponseModel),
        total: zod_1.z.number()
    })
});
exports.ArtistAlbumModel = zod_1.z.object({
    total: zod_1.z.number(),
    albums: zod_1.z.array(models_1.AlbumModel)
});
