import { PlaylistService } from "./playlist.service";

test("[PlaylistService] getPlaylistById", async () => {
  let playlist = await new PlaylistService().getPlaylistById({
    id: "82914609",
    page: 0,
    limit: 10,
  });

  expect(playlist).not.toBeNull();
});
test("[PlaylistService] getPlaylistByLink", async () => {
  let playlist = await new PlaylistService().getPlaylistByLink({
    token: "AMoxtXyKHoU_",
    page: 0,
    limit: 10,
  });

  expect(playlist).not.toBeNull();
});
