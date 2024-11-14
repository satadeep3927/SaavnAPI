"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlbumByIdUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/albums/helpers");
class GetAlbumByIdUseCase {
    constructor() { }
    async execute(id) {
        const { data, ok } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.albums.id,
            params: { albumid: id },
        });
        if (!data || !ok || !data.id)
            return null;
        return (0, helpers_2.createAlbumPayload)(data);
    }
}
exports.GetAlbumByIdUseCase = GetAlbumByIdUseCase;
