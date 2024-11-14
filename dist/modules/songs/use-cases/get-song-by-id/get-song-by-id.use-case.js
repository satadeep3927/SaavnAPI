"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSongByIdUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/songs/helpers");
const use_cases_1 = require("#modules/songs/use-cases");
class GetSongByIdUseCase {
    getSongLyricsUseCase;
    constructor() {
        this.getSongLyricsUseCase = new use_cases_1.GetSongLyricsUseCase();
    }
    async execute({ songIds, includeLyrics }) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.songs.id,
            params: {
                pids: songIds.join(","),
            },
        });
        if (!data.songs?.length)
            return null;
        const songs = data.songs.map((song) => (0, helpers_2.createSongPayload)(song));
        if (includeLyrics) {
            await Promise.all(songs.map(async (song) => {
                song.lyrics = (await this.getSongLyricsUseCase.execute(song.id));
            }));
        }
        return songs;
    }
}
exports.GetSongByIdUseCase = GetSongByIdUseCase;
