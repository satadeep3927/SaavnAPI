"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSongsUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/songs/helpers");
class SearchSongsUseCase {
    constructor() { }
    async execute({ query, limit, page }) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.search.songs,
            params: {
                q: query,
                p: page,
                n: limit
            }
        });
        return {
            total: data.total,
            start: data.start,
            results: data.results?.map(helpers_2.createSongPayload).slice(0, limit) || []
        };
    }
}
exports.SearchSongsUseCase = SearchSongsUseCase;
