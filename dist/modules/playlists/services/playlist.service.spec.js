"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playlist_service_1 = require("./playlist.service");
test("[PlaylistService] getPlaylistById", async () => {
    let playlist = await new playlist_service_1.PlaylistService().getPlaylistById({
        id: "82914609",
        page: 0,
        limit: 10,
    });
    expect(playlist).not.toBeNull();
});
test("[PlaylistService] getPlaylistByLink", async () => {
    let playlist = await new playlist_service_1.PlaylistService().getPlaylistByLink({
        token: "AMoxtXyKHoU_",
        page: 0,
        limit: 10,
    });
    expect(playlist).not.toBeNull();
});
