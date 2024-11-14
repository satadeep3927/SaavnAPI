import {
  AlbumService,
  ArtistService,
  SearchService,
  SongService,
  PlaylistService
} from "./modules";

export default class SaavnAPI {
  public static albums = new AlbumService();

  public static artists = new ArtistService();

  public static playlists = new PlaylistService();

  public static search = new SearchService();

  public static songs = new SongService();
}
