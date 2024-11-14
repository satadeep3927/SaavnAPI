import { AlbumService } from "./album.service";

test("[AlbumServuce] getAlbumById", async () => {
  let album = await new AlbumService().getAlbumById("51871958");
  expect(album).not.toBeNull();
});

test("[AlbumService] getAlbumByLink", async () => {
  let album = await new AlbumService().getAlbumByLink(
    "https://www.jiosaavn.com/album/future-nostalgia/ITIyo-GDr7A_"
  );
  expect(album).not.toBeNull();
});
