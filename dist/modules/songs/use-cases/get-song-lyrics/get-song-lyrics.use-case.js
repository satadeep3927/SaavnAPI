"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSongLyricsUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/songs/helpers");
class GetSongLyricsUseCase {
    constructor() { }
    async execute(songId) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.songs.lyrics,
            params: {
                lyrics_id: songId,
            },
        });
        if (!data.lyrics)
            return null;
        return (0, helpers_2.createSongLyricsPayload)(data);
    }
}
exports.GetSongLyricsUseCase = GetSongLyricsUseCase;
