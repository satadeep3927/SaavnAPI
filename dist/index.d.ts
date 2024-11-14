import { AlbumService, ArtistService, SearchService, SongService, PlaylistService } from "./modules";
export default class SaavnAPI {
    static albums: AlbumService;
    static artists: ArtistService;
    static playlists: PlaylistService;
    static search: SearchService;
    static songs: SongService;
}
