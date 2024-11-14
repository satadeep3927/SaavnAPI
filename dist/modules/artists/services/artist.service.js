"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistService = void 0;
const use_cases_1 = require("#modules/artists/use-cases");
class ArtistService {
    getArtistByIdUseCase;
    getArtistByLinkUseCase;
    getArtistSongsUseCase;
    getArtistAlbumsUseCase;
    constructor() {
        this.getArtistByIdUseCase = new use_cases_1.GetArtistByIdUseCase();
        this.getArtistByLinkUseCase = new use_cases_1.GetArtistByLinkUseCase();
        this.getArtistSongsUseCase = new use_cases_1.GetArtistSongsUseCase();
        this.getArtistAlbumsUseCase = new use_cases_1.GetArtistAlbumsUseCase();
    }
    getArtistById = (args) => {
        return this.getArtistByIdUseCase.execute(args);
    };
    getArtistByLink = (args) => {
        return this.getArtistByLinkUseCase.execute(args);
    };
    getArtistSongs = (args) => {
        return this.getArtistSongsUseCase.execute(args);
    };
    getArtistAlbums = (args) => {
        return this.getArtistAlbumsUseCase.execute(args);
    };
}
exports.ArtistService = ArtistService;
