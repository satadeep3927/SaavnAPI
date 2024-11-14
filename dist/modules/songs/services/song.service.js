"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongService = void 0;
const use_cases_1 = require("#modules/songs/use-cases");
class SongService {
    getSongByIdUseCase;
    getSongByLinkUseCase;
    getSongLyricsUseCase;
    getSongSuggestionsUseCase;
    constructor() {
        this.getSongByIdUseCase = new use_cases_1.GetSongByIdUseCase();
        this.getSongByLinkUseCase = new use_cases_1.GetSongByLinkUseCase();
        this.getSongLyricsUseCase = new use_cases_1.GetSongLyricsUseCase();
        this.getSongSuggestionsUseCase = new use_cases_1.GetSongSuggestionsUseCase();
    }
    getSongByIds = (args) => {
        return this.getSongByIdUseCase.execute(args);
    };
    getSongByLink = (token) => {
        return this.getSongByLinkUseCase.execute(token);
    };
    getSongLyrics = (songId) => {
        return this.getSongLyricsUseCase.execute(songId);
    };
    getSongSuggestions = (args) => {
        return this.getSongSuggestionsUseCase.execute(args);
    };
}
exports.SongService = SongService;
