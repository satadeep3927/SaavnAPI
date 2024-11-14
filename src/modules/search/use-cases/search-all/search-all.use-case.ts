import { Endpoints } from "#common/constants";
import { useFetch } from "#common/helpers";
import { createSearchPayload } from "#modules/search/helpers";
import type { IUseCase } from "#common/types";
import type {
  SearchAPIResponseModel,
  SearchModel,
} from "#modules/search/models";
import type { z } from "zod";

export class SearchAllUseCase
  implements IUseCase<string, z.infer<typeof SearchModel> | null>
{
  async execute(query: string): Promise<z.infer<typeof SearchModel> | null> {
    const { data } = await useFetch<z.infer<typeof SearchAPIResponseModel>>({
      endpoint: Endpoints.search.all,
      params: { query },
    });

    if (!data) return null;

    return createSearchPayload(data);
  }
}
