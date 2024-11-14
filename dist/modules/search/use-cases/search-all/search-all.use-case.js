"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAllUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/search/helpers");
class SearchAllUseCase {
    async execute(query) {
        const { data } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.search.all,
            params: { query },
        });
        if (!data)
            return null;
        return (0, helpers_2.createSearchPayload)(data);
    }
}
exports.SearchAllUseCase = SearchAllUseCase;
