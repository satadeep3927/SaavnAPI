"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlaylistPayload = void 0;
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/artists/helpers");
const helpers_3 = require("#modules/songs/helpers");
const createPlaylistPayload = (playlist) => ({
    id: playlist.id,
    name: playlist.title,
    description: playlist.header_desc,
    type: playlist.type,
    year: playlist.year ? Number(playlist.year) : null,
    playCount: playlist.play_count ? Number(playlist.play_count) : null,
    language: playlist.language,
    explicitContent: playlist.explicit_content === '1',
    url: playlist.perma_url,
    songCount: playlist.list_count ? Number(playlist.list_count) : null,
    artists: playlist.more_info.artists?.map(helpers_2.createArtistMapPayload) || null,
    image: (0, helpers_1.createImageLinks)(playlist.image),
    songs: (playlist.list && playlist.list?.map(helpers_3.createSongPayload)) || null
});
exports.createPlaylistPayload = createPlaylistPayload;
