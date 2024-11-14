import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createPlaylistPayload } from "#modules/playlists/helpers";
import type { IUseCase } from "#common/types";
import type {
  PlaylistAPIResponseModel,
  PlaylistModel,
} from "#modules/playlists/models";
import type { z } from "zod";

export interface GetPlaylistByLinkArgs {
  token: string;
  limit: number;
  page: number;
}

export class GetPlaylistByLinkUseCase
  implements
    IUseCase<GetPlaylistByLinkArgs, z.infer<typeof PlaylistModel> | null>
{
  constructor() {}

  async execute({ token, limit, page }: GetPlaylistByLinkArgs) {
    const { data } = await useFetch<z.infer<typeof PlaylistAPIResponseModel>>({
      endpoint: Endpoints.albums.link,
      params: {
        token,
        n: limit,
        p: page,
        type: "playlist",
      },
    });

    if (!data || !data?.title) return null;

    const playlist = createPlaylistPayload(data);

    return {
      ...playlist,
      songCount: playlist?.songs?.length || null,
      songs: playlist?.songs?.slice(0, limit) || [],
    };
  }
}
