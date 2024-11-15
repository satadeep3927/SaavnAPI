import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createArtistPayload } from "#modules/artists/helpers";
import type { IUseCase } from "#common/types";
import type {
  ArtistAPIResponseModel,
  ArtistModel,
} from "#modules/artists/models";
import type { z } from "zod";

export interface GetArtistByIdArgs {
  artistId: string;
  page: number;
  songCount: number;
  albumCount: number;
  sortBy: "popularity" | "latest" | "alphabetical";
  sortOrder: "asc" | "desc";
}

export class GetArtistByIdUseCase
  implements IUseCase<GetArtistByIdArgs, z.infer<typeof ArtistModel> | null>
{
  constructor() {}

  async execute({
    artistId,
    page,
    songCount,
    albumCount,
    sortBy,
    sortOrder,
  }: GetArtistByIdArgs) {
    const { data, ok } = await useFetch<z.infer<typeof ArtistAPIResponseModel>>(
      {
        endpoint: Endpoints.artists.id,
        params: {
          artistId,
          n_song: songCount,
          n_album: albumCount,
          page,
          sort_order: sortOrder,
          category: sortBy,
        },
      }
    );

    if (!data || !ok || !data?.name) return null;

    return createArtistPayload(data);
  }
}
