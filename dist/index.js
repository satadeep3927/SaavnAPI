"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("./modules");
class SaavnAPI {
    static albums = new modules_1.AlbumService();
    static artists = new modules_1.ArtistService();
    static playlists = new modules_1.PlaylistService();
    static search = new modules_1.SearchService();
    static songs = new modules_1.SongService();
}
exports.default = SaavnAPI;
