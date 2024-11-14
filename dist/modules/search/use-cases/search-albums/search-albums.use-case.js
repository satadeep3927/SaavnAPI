"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAlbumsUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/search/helpers");
class SearchAlbumsUseCase {
    constructor() { }
    async execute({ query, limit, page }) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.search.albums,
            params: {
                q: query,
                p: page,
                n: limit
            }
        });
        return (0, helpers_2.createSearchAlbumPayload)(data);
    }
}
exports.SearchAlbumsUseCase = SearchAlbumsUseCase;
