"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const song_service_1 = require("./song.service");
test("[SongService] getSongByIds", async () => {
    let result = await new song_service_1.SongService().getSongByIds({
        songIds: ["3IoDK8qI", "4IoDK8qI", "5IoDK8qI"],
    });
    expect(result).not.toBeNull();
});
test("[SongService] getSongByLink", async () => {
    let result = await new song_service_1.SongService().getSongByLink("OgwhbhtDRwM");
    expect(result).not.toBeNull();
});
test("[SongService] getSongLyrics", async () => {
    let result = await new song_service_1.SongService().getSongLyrics("3IoDK8qI");
    expect(result).toBeNull();
});
test("[SongService] getSongSuggestions", async () => {
    let result = await new song_service_1.SongService().getSongSuggestions({
        songId: "3IoDK8qI",
        limit: 10,
    });
    expect(result).not.toBeNull();
});
