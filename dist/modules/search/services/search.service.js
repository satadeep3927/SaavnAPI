"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const use_cases_1 = require("#modules/search/use-cases");
class SearchService {
    searchAllUseCase;
    searchSongsUseCase;
    searchAlbumsUseCase;
    searchArtistsUseCase;
    searchPlaylistsUseCase;
    constructor() {
        this.searchAllUseCase = new use_cases_1.SearchAllUseCase();
        this.searchSongsUseCase = new use_cases_1.SearchSongsUseCase();
        this.searchAlbumsUseCase = new use_cases_1.SearchAlbumsUseCase();
        this.searchArtistsUseCase = new use_cases_1.SearchArtistsUseCase();
        this.searchPlaylistsUseCase = new use_cases_1.SearchPlaylistsUseCase();
    }
    searchAll = (query) => {
        return this.searchAllUseCase.execute(query);
    };
    searchSongs = (args) => {
        return this.searchSongsUseCase.execute(args);
    };
    searchAlbums = (args) => {
        return this.searchAlbumsUseCase.execute(args);
    };
    searchArtists = (args) => {
        return this.searchArtistsUseCase.execute(args);
    };
    searchPlaylists = (args) => {
        return this.searchPlaylistsUseCase.execute(args);
    };
}
exports.SearchService = SearchService;
