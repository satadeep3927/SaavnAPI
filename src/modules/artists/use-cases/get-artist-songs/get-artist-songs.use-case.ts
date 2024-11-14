import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createSongPayload } from "#modules/songs/helpers";
import type { IUseCase } from "#common/types";
import type {
  ArtistSongAPIResponseModel,
  ArtistSongModel,
} from "#modules/artists/models";
import type { z } from "zod";

export interface GetArtistSongsArgs {
  artistId: string;
  page: number;
  sortBy: "popularity" | "latest" | "alphabetical";
  sortOrder: "asc" | "desc";
}

export class GetArtistSongsUseCase
  implements
    IUseCase<GetArtistSongsArgs, z.infer<typeof ArtistSongModel> | null>
{
  constructor() {}

  async execute({ artistId, page, sortOrder, sortBy }: GetArtistSongsArgs) {
    const { data, ok } = await useFetch<z.infer<typeof ArtistSongAPIResponseModel>>(
      {
        endpoint: Endpoints.artists.songs,
        params: {
          artistId,
          page,
          sort_order: sortOrder,
          category: sortBy,
        },
      }
    );

    if (!data || !ok || !data?.name) return null;

    return {
      total: data.topSongs.total,
      songs: data.topSongs.songs.map((song) => createSongPayload(song)),
    };
  }
}
