"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSongSuggestionsUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/songs/helpers");
const use_cases_1 = require("#modules/songs/use-cases");
class GetSongSuggestionsUseCase {
    createSongStation;
    constructor() {
        this.createSongStation = new use_cases_1.CreateSongStationUseCase();
    }
    async execute({ songId, limit }) {
        const stationId = await this.createSongStation.execute(songId);
        const { data, ok } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.songs.suggestions,
            params: {
                stationid: stationId,
                k: limit,
            },
            context: "android",
        });
        if (!data || !ok) {
            return null;
        }
        const { stationid, ...suggestions } = data;
        return (Object.values(suggestions)
            .map((element) => element && (0, helpers_2.createSongPayload)(element.song))
            .filter(Boolean)
            .slice(0, limit) || []);
    }
}
exports.GetSongSuggestionsUseCase = GetSongSuggestionsUseCase;
