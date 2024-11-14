"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const artist_service_1 = require("./artist.service");
test("[ArtistService] getArtistById", async () => {
    let artist = await new artist_service_1.ArtistService().getArtistById({
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
    let artist = await new artist_service_1.ArtistService().getArtistByLink({
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
    let artist = await new artist_service_1.ArtistService().getArtistSongs({
        artistId: "1274170",
        page: 1,
        sortBy: "popularity",
        sortOrder: "desc",
    });
    expect(artist).not.toBeNull();
});
test("[ArtistService] getArtistAlbums", async () => {
    let artist = await new artist_service_1.ArtistService().getArtistAlbums({
        artistId: "1274170",
        page: 1,
        sortBy: "popularity",
        sortOrder: "desc",
    });
    expect(artist).not.toBeNull();
});
