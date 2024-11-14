"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetArtistAlbumsUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/albums/helpers");
class GetArtistAlbumsUseCase {
    constructor() { }
    async execute({ artistId, page, sortOrder, sortBy }) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.artists.albums,
            params: {
                artistId,
                page,
                sort_order: sortOrder,
                category: sortBy,
            },
        });
        if (!data || !data?.name)
            return null;
        return {
            total: data.topAlbums.total,
            albums: data.topAlbums.albums.map((album) => (0, helpers_2.createAlbumPayload)(album)),
        };
    }
}
exports.GetArtistAlbumsUseCase = GetArtistAlbumsUseCase;
