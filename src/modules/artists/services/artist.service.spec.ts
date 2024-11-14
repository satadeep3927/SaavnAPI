import { ArtistService } from "./artist.service";

test("[ArtistService] getArtistById", async () => {
  let artist = await new ArtistService().getArtistById({
    artistId: "1274170",
    page: 1,
    songCount: 10,
    albumCount: 10,
    sortBy: "popularity",
    sortOrder: "desc",
  });

  expect(artist).not.toBeNull();
});
test("[ArtistService] getArtistByLink", async () => {
  let artist = await new ArtistService().getArtistByLink({
    token: "r-OWIKgpX2I_",
    page: 1,
    songCount: 10,
    albumCount: 10,
    sortBy: "popularity",
    sortOrder: "desc",
  });

  expect(artist).not.toBeNull();
});
test("[ArtistService] getArtistSongs", async () => {
  let artist = await new ArtistService().getArtistSongs({
    artistId: "1274170",
    page: 1,
    sortBy: "popularity",
    sortOrder: "desc",
  });

  expect(artist).not.toBeNull();
});
test("[ArtistService] getArtistAlbums", async () => {
  let artist = await new ArtistService().getArtistAlbums({
    artistId: "1274170",
    page: 1,
    sortBy: "popularity",
    sortOrder: "desc",
  });

  expect(artist).not.toBeNull();
});
