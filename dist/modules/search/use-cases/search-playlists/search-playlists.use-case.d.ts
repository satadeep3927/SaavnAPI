import type { IUseCase } from "#common/types";
import type { SearchPlaylistModel } from "#modules/search/models";
import type { z } from "zod";
export interface SearchPlaylistsArgs {
    query: string;
    page: number;
    limit: number;
}
export declare class SearchPlaylistsUseCase implements IUseCase<SearchPlaylistsArgs, z.infer<typeof SearchPlaylistModel> | null> {
    constructor();
    execute({ query, limit, page, }: SearchPlaylistsArgs): Promise<z.infer<typeof SearchPlaylistModel> | null>;
}
