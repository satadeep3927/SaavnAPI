"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSongStationUseCase = void 0;
const constants_1 = require("#common/constants");
const helpers_1 = require("#common/helpers");
class CreateSongStationUseCase {
    constructor() { }
    async execute(songId) {
        const encodedSongId = JSON.stringify([encodeURIComponent(songId)]);
        const { data, ok } = await (0, helpers_1.useFetch)({
            endpoint: constants_1.Endpoints.songs.station,
            params: {
                entity_id: encodedSongId,
                entity_type: "queue",
            },
            context: "android",
        });
        if (!data || !ok || !data.stationid)
            return null;
        return data.stationid;
    }
}
exports.CreateSongStationUseCase = CreateSongStationUseCase;
