import { SongService } from "./song.service";

test("[SongService] getSongByIds", async () => {
  let result = await new SongService().getSongByIds({
    songIds: ["3IoDK8qI", "4IoDK8qI", "5IoDK8qI"],
  });

  expect(result).not.toBeNull();
});

test("[SongService] getSongByLink", async () => {
  let result = await new SongService().getSongByLink("OgwhbhtDRwM");

  expect(result).not.toBeNull();
});

test("[SongService] getSongLyrics", async () => {
  let result = await new SongService().getSongLyrics("3IoDK8qI");

  expect(result).toBeNull();
});

test("[SongService] getSongSuggestions", async () => {
  let result = await new SongService().getSongSuggestions({
    songId: "3IoDK8qI",
    limit: 10,
  });

  expect(result).not.toBeNull();
});
