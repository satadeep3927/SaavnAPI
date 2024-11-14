"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
const use_cases_1 = require("#modules/albums/use-cases");
class AlbumService {
    getAlbumByIdUseCase;
    getAlbumByLinkUseCase;
    constructor() {
        this.getAlbumByIdUseCase = new use_cases_1.GetAlbumByIdUseCase();
        this.getAlbumByLinkUseCase = new use_cases_1.GetAlbumByLinkUseCase();
    }
    getAlbumById = (albumId) => {
        return this.getAlbumByIdUseCase.execute(albumId);
    };
    getAlbumByLink = (albumLink) => {
        return this.getAlbumByLinkUseCase.execute(albumLink);
    };
}
exports.AlbumService = AlbumService;
