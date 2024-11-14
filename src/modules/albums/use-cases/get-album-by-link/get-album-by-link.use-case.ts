import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createAlbumPayload } from "#modules/albums/helpers";
import type { IUseCase } from "#common/types";
import type { AlbumAPIResponseModel, AlbumModel } from "#modules/albums/models";
import type { z } from "zod";

export class GetAlbumByLinkUseCase
  implements IUseCase<string, z.infer<typeof AlbumModel> | null>
{
  constructor() {}

  async execute(token: string) {
    const { data } = await useFetch<z.infer<typeof AlbumAPIResponseModel>>({
      endpoint: Endpoints.albums.link,
      params: {
        token,
        type: "album",
      },
    });

    if (!data) return null;

    return createAlbumPayload(data);
  }
}
