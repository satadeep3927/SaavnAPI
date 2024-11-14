"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistService = void 0;
const use_cases_1 = require("#modules/playlists/use-cases");
class PlaylistService {
    getPlaylistByIdUseCase;
    getPlaylistByLinkUseCase;
    constructor() {
        this.getPlaylistByIdUseCase = new use_cases_1.GetPlaylistByIdUseCase();
        this.getPlaylistByLinkUseCase = new use_cases_1.GetPlaylistByLinkUseCase();
    }
    getPlaylistById = (args) => {
        return this.getPlaylistByIdUseCase.execute(args);
    };
    getPlaylistByLink = (args) => {
        return this.getPlaylistByLinkUseCase.execute(args);
    };
}
exports.PlaylistService = PlaylistService;
