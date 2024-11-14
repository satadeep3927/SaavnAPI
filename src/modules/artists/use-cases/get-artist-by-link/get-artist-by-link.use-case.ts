import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createArtistPayload } from "#modules/artists/helpers";
import type { IUseCase } from "#common/types";
import type {
  ArtistAPIResponseModel,
  ArtistModel,
} from "#modules/artists/models";
import type { z } from "zod";

export interface GetArtistByLinkArgs {
  token: string;
  page: number;
  songCount: number;
  albumCount: number;
  sortBy: "popularity" | "latest" | "alphabetical";
  sortOrder: "asc" | "desc";
}

export class GetArtistByLinkUseCase
  implements IUseCase<GetArtistByLinkArgs, z.infer<typeof ArtistModel> | null>
{
  constructor() {}

  async execute({
    token,
    page,
    songCount,
    albumCount,
    sortBy,
    sortOrder,
  }: GetArtistByLinkArgs) {
    const { data, ok } = await useFetch<z.infer<typeof ArtistAPIResponseModel>>(
      {
        endpoint: Endpoints.artists.link,
        params: {
          token,
          n_song: songCount,
          n_album: albumCount,
          page,
          sort_order: sortOrder,
          category: sortBy,
          type: "artist",
        },
      }
    );

    if (!data || !ok || !data?.name) return null;

    return createArtistPayload(data);
  }
}
