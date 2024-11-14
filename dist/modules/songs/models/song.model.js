"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongModel = exports.SongAPIResponseModel = void 0;
const models_1 = require("#common/models");
const models_2 = require("#modules/artists/models");
const zod_1 = require("zod");
const song_lyrics_model_1 = require("./song-lyrics.model"); // import from absolute path to avoid circular dependency
exports.SongAPIResponseModel = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    subtitle: zod_1.z.string(),
    header_desc: zod_1.z.string(),
    type: zod_1.z.string(),
    perma_url: zod_1.z.string(),
    image: zod_1.z.string(),
    language: zod_1.z.string(),
    year: zod_1.z.string(),
    play_count: zod_1.z.string(),
    explicit_content: zod_1.z.string(),
    list_count: zod_1.z.string(),
    list_type: zod_1.z.string(),
    list: zod_1.z.string(),
    more_info: zod_1.z.object({
        music: zod_1.z.string(),
        album_id: zod_1.z.string(),
        album: zod_1.z.string(),
        label: zod_1.z.string(),
        origin: zod_1.z.string(),
        is_dolby_content: zod_1.z.boolean(),
        '320kbps': zod_1.z.string(),
        encrypted_media_url: zod_1.z.string(),
        encrypted_cache_url: zod_1.z.string(),
        album_url: zod_1.z.string(),
        duration: zod_1.z.string(),
        rights: zod_1.z.object({
            code: zod_1.z.string(),
            cacheable: zod_1.z.string(),
            delete_cached_object: zod_1.z.string(),
            reason: zod_1.z.string()
        }),
        cache_state: zod_1.z.string(),
        has_lyrics: zod_1.z.string(),
        lyrics_snippet: zod_1.z.string(),
        starred: zod_1.z.string(),
        copyright_text: zod_1.z.string(),
        artistMap: zod_1.z.object({
            primary_artists: zod_1.z.array(models_2.ArtistMapAPIResponseModel),
            featured_artists: zod_1.z.array(models_2.ArtistMapAPIResponseModel),
            artists: zod_1.z.array(models_2.ArtistMapAPIResponseModel)
        }),
        release_date: zod_1.z.string(),
        label_url: zod_1.z.string(),
        vcode: zod_1.z.string(),
        vlink: zod_1.z.string(),
        triller_available: zod_1.z.boolean(),
        request_jiotune_flag: zod_1.z.boolean(),
        webp: zod_1.z.string(),
        lyrics_id: zod_1.z.string()
    })
});
exports.SongModel = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    year: zod_1.z.string().nullable(),
    releaseDate: zod_1.z.string().nullable(),
    duration: zod_1.z.number().nullable(),
    label: zod_1.z.string().nullable(),
    explicitContent: zod_1.z.boolean(),
    playCount: zod_1.z.number().nullable(),
    language: zod_1.z.string(),
    hasLyrics: zod_1.z.boolean(),
    lyricsId: zod_1.z.string().nullable(),
    lyrics: song_lyrics_model_1.LyricsModel.optional(),
    url: zod_1.z.string(),
    copyright: zod_1.z.string().nullable(),
    album: zod_1.z.object({
        id: zod_1.z.string().nullable(),
        name: zod_1.z.string().nullable(),
        url: zod_1.z.string().nullable()
    }),
    artists: zod_1.z.object({
        primary: zod_1.z.array(models_2.ArtistMapModel),
        featured: zod_1.z.array(models_2.ArtistMapModel),
        all: zod_1.z.array(models_2.ArtistMapModel)
    }),
    image: zod_1.z.array(models_1.DownloadLinkModel),
    downloadUrl: zod_1.z.array(models_1.DownloadLinkModel)
});
