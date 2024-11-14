import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createAlbumPayload } from "#modules/albums/helpers";
import type { IUseCase } from "#common/types";
import type { AlbumAPIResponseModel, AlbumModel } from "#modules/albums/models";
import type { z } from "zod";

export class GetAlbumByIdUseCase
  implements IUseCase<string, z.infer<typeof AlbumModel> | null>
{
  constructor() {}

  async execute(id: string) {
    const { data, ok } = await useFetch<z.infer<typeof AlbumAPIResponseModel>>({
      endpoint: Endpoints.albums.id,
      params: { albumid: id },
    });

    if (!data || !ok || !data.id) return null;

    return createAlbumPayload(data);
  }
}
