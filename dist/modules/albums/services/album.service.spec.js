"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_service_1 = require("./album.service");
test("[AlbumServuce] getAlbumById", async () => {
    let album = await new album_service_1.AlbumService().getAlbumById("51871958");
    expect(album).not.toBeNull();
});
test("[AlbumService] getAlbumByLink", async () => {
    let album = await new album_service_1.AlbumService().getAlbumByLink("https://www.jiosaavn.com/album/future-nostalgia/ITIyo-GDr7A_");
    expect(album).not.toBeNull();
});
