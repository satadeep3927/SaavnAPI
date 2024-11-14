"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlaylistByIdUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/playlists/helpers");
class GetPlaylistByIdUseCase {
    constructor() { }
    async execute({ id, limit, page }) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.playlists.id,
            params: {
                listid: id,
                n: limit,
                p: page,
            },
        });
        if (!data || !data?.title)
            return null;
        const playlist = (0, helpers_2.createPlaylistPayload)(data);
        return {
            ...playlist,
            songCount: playlist?.songs?.length || null,
            songs: playlist?.songs?.slice(0, limit) || [],
        };
    }
}
exports.GetPlaylistByIdUseCase = GetPlaylistByIdUseCase;
