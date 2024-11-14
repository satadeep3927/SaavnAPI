"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSongByLinkUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/songs/helpers");
class GetSongByLinkUseCase {
    constructor() { }
    async execute(token) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.songs.link,
            params: {
                token,
                type: "song",
            },
        });
        if (!data.songs?.length)
            return null;
        return data.songs.map((song) => (0, helpers_2.createSongPayload)(song));
    }
}
exports.GetSongByLinkUseCase = GetSongByLinkUseCase;
