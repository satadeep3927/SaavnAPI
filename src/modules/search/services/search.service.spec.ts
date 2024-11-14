import { SearchService } from "./search.service";

test("[SearchService] searchAll", async () => {
  let result = await new SearchService().searchAll("Try me Beyonce");

  expect(result).not.toBeNull();
});
test("[SearchService] searchSongs", async () => {
  let result = await new SearchService().searchSongs({
    query: "Love me like you do",
    limit: 10,
    page: 0,
  });

  expect(result).not.toBeNull();
});
test("[SearchService] searchAlbums", async () => {
  let result = await new SearchService().searchAlbums({
    query: "Atif Aslam",
    limit: 10,
    page: 0,
  });

  expect(result).not.toBeNull();
});
test("[SearchService] searchArtists", async () => {
  let result = await new SearchService().searchArtists({
    query: "Ed Sheran",
    limit: 10,
    page: 0,
  });

  expect(result).not.toBeNull();
});
test("[SearchService] searchPlaylists", async () => {
  let result = await new SearchService().searchPlaylists({
    query: "Arijit Singh",
    limit: 10,
    page: 0,
  });

  expect(result).not.toBeNull();
});
