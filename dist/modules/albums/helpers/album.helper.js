"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAlbumPayload = void 0;
const helpers_1 = require("#common/helpers");
const helpers_2 = require("#modules/artists/helpers");
const helpers_3 = require("#modules/songs/helpers");
const createAlbumPayload = (album) => ({
    id: album.id,
    name: album.title,
    description: album.header_desc,
    type: album.type,
    year: album.year ? Number(album.year) : null,
    playCount: album.play_count ? Number(album.play_count) : null,
    language: album.language,
    explicitContent: album.explicit_content === '1',
    url: album.perma_url,
    songCount: album.more_info?.song_count ? Number(album.more_info.song_count) : null,
    artists: {
        primary: album.more_info?.artistMap?.primary_artists?.map(helpers_2.createArtistMapPayload),
        featured: album.more_info?.artistMap?.featured_artists?.map(helpers_2.createArtistMapPayload),
        all: album.more_info?.artistMap?.artists?.map(helpers_2.createArtistMapPayload)
    },
    image: (0, helpers_1.createImageLinks)(album.image),
    songs: (album.list && album.list?.map(helpers_3.createSongPayload)) || null
});
exports.createAlbumPayload = createAlbumPayload;
