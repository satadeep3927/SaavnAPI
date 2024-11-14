"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlbumByLinkUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/albums/helpers");
class GetAlbumByLinkUseCase {
    constructor() { }
    async execute(token) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.albums.link,
            params: {
                token,
                type: "album",
            },
        });
        if (!data)
            return null;
        return (0, helpers_2.createAlbumPayload)(data);
    }
}
exports.GetAlbumByLinkUseCase = GetAlbumByLinkUseCase;
