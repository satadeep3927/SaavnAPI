import type { IUseCase } from '#common/types';
import type { SearchAlbumModel } from '#modules/search/models';
import type { z } from 'zod';
export interface SearchAlbumsArgs {
    query: string;
    page: number;
    limit: number;
}
export declare class SearchAlbumsUseCase implements IUseCase<SearchAlbumsArgs, z.infer<typeof SearchAlbumModel>> {
    constructor();
    execute({ query, limit, page }: SearchAlbumsArgs): Promise<z.infer<typeof SearchAlbumModel>>;
}
