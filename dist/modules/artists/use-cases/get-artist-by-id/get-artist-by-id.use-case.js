"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetArtistByIdUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/artists/helpers");
class GetArtistByIdUseCase {
    constructor() { }
    async execute({ artistId, page, songCount, albumCount, sortBy, sortOrder, }) {
        const { data, ok } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.artists.id,
            params: {
                artistId,
                n_song: songCount,
                n_album: albumCount,
                page,
                sort_order: sortOrder,
                category: sortBy,
            },
        });
        if (!data || !ok || !data?.name)
            return null;
        return (0, helpers_2.createArtistPayload)(data);
    }
}
exports.GetArtistByIdUseCase = GetArtistByIdUseCase;
