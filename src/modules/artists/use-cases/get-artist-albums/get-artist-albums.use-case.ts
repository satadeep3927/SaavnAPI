import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createAlbumPayload } from "#modules/albums/helpers";
import type { IUseCase } from "#common/types";
import type {
  ArtistAlbumAPIResponseModel,
  ArtistAlbumModel,
} from "#modules/artists/models";
import type { z } from "zod";

export interface GetArtistAlbumsArgs {
  artistId: string;
  page: number;
  sortBy: "popularity" | "latest" | "alphabetical";
  sortOrder: "asc" | "desc";
}

export class GetArtistAlbumsUseCase
  implements
    IUseCase<GetArtistAlbumsArgs, z.infer<typeof ArtistAlbumModel> | null>
{
  constructor() {}

  async execute({ artistId, page, sortOrder, sortBy }: GetArtistAlbumsArgs) {
    const { data } = await useFetch<
      z.infer<typeof ArtistAlbumAPIResponseModel>
    >({
      endpoint: Endpoints.artists.albums,
      params: {
        artistId,
        page,
        sort_order: sortOrder,
        category: sortBy,
      },
    });

    if (!data || !data?.name) return null;

    return {
      total: data.topAlbums.total,
      albums: data.topAlbums.albums.map((album) => createAlbumPayload(album)),
    };
  }
}
