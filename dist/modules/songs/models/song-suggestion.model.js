"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongSuggestionAPIResponseModel = void 0;
const zod_1 = require("zod");
const song_model_1 = require("./song.model");
const SongStationAPIResponseModel = zod_1.z.record(zod_1.z.string(), zod_1.z.object({
    song: song_model_1.SongAPIResponseModel
}));
exports.SongSuggestionAPIResponseModel = zod_1.z
    .object({
    stationid: zod_1.z.string()
})
    .and(SongStationAPIResponseModel);
