import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import type { IUseCase } from "#common/types";

export class CreateSongStationUseCase
  implements IUseCase<string, string | null>
{
  constructor() {}

  async execute(songId: string) {
    const encodedSongId = JSON.stringify([encodeURIComponent(songId)]);

    const { data, ok } = await useFetch<{ stationid: string }>({
      endpoint: Endpoints.songs.station,
      params: {
        entity_id: encodedSongId,
        entity_type: "queue",
      },
      context: "android",
    });

    if (!data || !ok || !data.stationid) return null;

    return data.stationid;
  }
}
