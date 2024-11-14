"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSongModel = exports.SearchSongAPIResponseModel = void 0;
const models_1 = require("#modules/songs/models");
const zod_1 = require("zod");
exports.SearchSongAPIResponseModel = zod_1.z.object({
    total: zod_1.z.number(),
    start: zod_1.z.number(),
    results: zod_1.z.array(models_1.SongAPIResponseModel)
});
exports.SearchSongModel = zod_1.z.object({
    total: zod_1.z.number(),
    start: zod_1.z.number(),
    results: zod_1.z.array(models_1.SongModel)
});
