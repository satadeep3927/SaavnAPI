import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createPlaylistPayload } from "#modules/playlists/helpers";
import type { IUseCase } from "#common/types";
import type {
  PlaylistAPIResponseModel,
  PlaylistModel,
} from "#modules/playlists/models";
import type { z } from "zod";

export interface GetPlaylistByIdArgs {
  id: string;
  limit: number;
  page: number;
}

export class GetPlaylistByIdUseCase
  implements
    IUseCase<GetPlaylistByIdArgs, z.infer<typeof PlaylistModel> | null>
{
  constructor() {}

  async execute({ id, limit, page }: GetPlaylistByIdArgs) {
    const { data } = await useFetch<z.infer<typeof PlaylistAPIResponseModel>>({
      endpoint: Endpoints.playlists.id,
      params: {
        listid: id,
        n: limit,
        p: page,
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
