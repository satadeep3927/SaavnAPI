import type { IUseCase } from "#common/types";
import type { SearchModel } from "#modules/search/models";
import type { z } from "zod";
export declare class SearchAllUseCase implements IUseCase<string, z.infer<typeof SearchModel> | null> {
    execute(query: string): Promise<z.infer<typeof SearchModel> | null>;
}
