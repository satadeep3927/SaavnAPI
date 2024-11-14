import type { IUseCase } from "#common/types";
import type { SearchArtistModel } from "#modules/search/models";
import type { z } from "zod";
export interface SearchArtistsArgs {
    query: string;
    page: number;
    limit: number;
}
export declare class SearchArtistsUseCase implements IUseCase<SearchArtistsArgs, z.infer<typeof SearchArtistModel> | null> {
    constructor();
    execute({ query, limit, page, }: SearchArtistsArgs): Promise<z.infer<typeof SearchArtistModel> | null>;
}
