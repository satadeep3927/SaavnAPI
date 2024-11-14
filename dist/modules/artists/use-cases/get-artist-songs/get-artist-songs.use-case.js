"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetArtistSongsUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/songs/helpers");
class GetArtistSongsUseCase {
    constructor() { }
    async execute({ artistId, page, sortOrder, sortBy }) {
        const { data, ok } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.artists.songs,
            params: {
                artistId,
                page,
                sort_order: sortOrder,
                category: sortBy,
            },
        });
        if (!data || !ok || !data?.name)
            return null;
        return {
            total: data.topSongs.total,
            songs: data.topSongs.songs.map((song) => (0, helpers_2.createSongPayload)(song)),
        };
    }
}
exports.GetArtistSongsUseCase = GetArtistSongsUseCase;
