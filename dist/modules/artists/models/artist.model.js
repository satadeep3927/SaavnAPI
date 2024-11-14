"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistModel = exports.ArtistAPIResponseModel = void 0;
const models_1 = require("#common/models");
const models_2 = require("#modules/albums/models");
const models_3 = require("#modules/songs/models");
const zod_1 = require("zod");
exports.ArtistAPIResponseModel = zod_1.z
    .object({
    artistId: zod_1.z.string(),
    name: zod_1.z.string(),
    subtitle: zod_1.z.string(),
    image: zod_1.z.string(),
    follower_count: zod_1.z.string(),
    type: zod_1.z.string(),
    isVerified: zod_1.z.boolean(),
    dominantLanguage: zod_1.z.string(),
    dominantType: zod_1.z.string(),
    topSongs: zod_1.z.array(models_3.SongAPIResponseModel),
    topAlbums: zod_1.z.array(models_2.AlbumAPIResponseModel),
    singles: zod_1.z.array(models_3.SongAPIResponseModel),
    dedicated_artist_playlist: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        subtitle: zod_1.z.string(),
        type: zod_1.z.string(),
        image: zod_1.z.string(),
        perma_url: zod_1.z.string(),
        more_info: zod_1.z.object({
            uid: zod_1.z.string(),
            firstname: zod_1.z.string(),
            artist_name: zod_1.z.array(zod_1.z.string()),
            entity_type: zod_1.z.string(),
            entity_sub_type: zod_1.z.string(),
            video_available: zod_1.z.boolean(),
            is_dolby_content: zod_1.z.any(),
            sub_types: zod_1.z.any(),
            images: zod_1.z.any(),
            lastname: zod_1.z.string(),
            song_count: zod_1.z.string(),
            language: zod_1.z.string()
        }),
        explicit_content: zod_1.z.string(),
        mini_obj: zod_1.z.boolean(),
        numsongs: zod_1.z.number()
    })),
    featured_artist_playlist: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        subtitle: zod_1.z.string(),
        type: zod_1.z.string(),
        image: zod_1.z.string(),
        perma_url: zod_1.z.string(),
        more_info: zod_1.z.object({
            uid: zod_1.z.string(),
            firstname: zod_1.z.string(),
            artist_name: zod_1.z.any(),
            entity_type: zod_1.z.string(),
            entity_sub_type: zod_1.z.string(),
            video_available: zod_1.z.boolean(),
            is_dolby_content: zod_1.z.any(),
            sub_types: zod_1.z.any(),
            images: zod_1.z.any(),
            lastname: zod_1.z.string(),
            song_count: zod_1.z.string(),
            language: zod_1.z.string()
        }),
        explicit_content: zod_1.z.string(),
        mini_obj: zod_1.z.boolean(),
        numsongs: zod_1.z.number()
    })),
    similarArtists: zod_1.z.array(zod_1.z.object({
        _id: zod_1.z.string(),
        similar: zod_1.z.string(),
        languages: zod_1.z.string(),
        isVerified: zod_1.z.string(),
        image_url: zod_1.z.string(),
        wiki: zod_1.z.string(),
        roles: zod_1.z.string(),
        combine_artist_pages: zod_1.z.number(),
        webp: zod_1.z.boolean(),
        search_keywords: zod_1.z.string(),
        replace_with_primary_artists: zod_1.z.number(),
        twitter: zod_1.z.string(),
        dob: zod_1.z.string(),
        aka: zod_1.z.string(),
        name: zod_1.z.string(),
        primary_artist_id: zod_1.z.string(),
        id: zod_1.z.string(),
        fb: zod_1.z.string(),
        bio: zod_1.z.string(),
        perma_url: zod_1.z.string(),
        type: zod_1.z.string(),
        mini_obj: zod_1.z.boolean(),
        isRadioPresent: zod_1.z.boolean(),
        dominantType: zod_1.z.string()
    })),
    isRadioPresent: zod_1.z.boolean(),
    bio: zod_1.z.string(),
    dob: zod_1.z.string(),
    fb: zod_1.z.string(),
    twitter: zod_1.z.string(),
    wiki: zod_1.z.string(),
    urls: zod_1.z.object({
        albums: zod_1.z.string(),
        bio: zod_1.z.string(),
        comments: zod_1.z.string(),
        songs: zod_1.z.string(),
        overview: zod_1.z.string()
    }),
    availableLanguages: zod_1.z.array(zod_1.z.string()),
    fan_count: zod_1.z.string(),
    topEpisodes: zod_1.z.array(zod_1.z.any()),
    is_followed: zod_1.z.boolean()
})
    .extend({
    id: zod_1.z.string(),
    perma_url: zod_1.z.string()
});
exports.ArtistModel = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    url: zod_1.z.string(),
    type: zod_1.z.string(),
    image: zod_1.z.array(models_1.DownloadLinkModel),
    followerCount: zod_1.z.number().nullable(),
    fanCount: zod_1.z.string().nullable(),
    isVerified: zod_1.z.boolean().nullable(),
    dominantLanguage: zod_1.z.string().nullable(),
    dominantType: zod_1.z.string().nullable(),
    bio: zod_1.z
        .array(zod_1.z.object({
        text: zod_1.z.string().nullable(),
        title: zod_1.z.string().nullable(),
        sequence: zod_1.z.number().nullable()
    }))
        .nullable(),
    dob: zod_1.z.string().nullable(),
    fb: zod_1.z.string().nullable(),
    twitter: zod_1.z.string().nullable(),
    wiki: zod_1.z.string().nullable(),
    availableLanguages: zod_1.z.array(zod_1.z.string()),
    isRadioPresent: zod_1.z.boolean().nullable(),
    topSongs: zod_1.z.array(models_3.SongModel).nullable(),
    topAlbums: zod_1.z.array(models_2.AlbumModel).nullable(),
    singles: zod_1.z.array(models_3.SongModel).nullable(),
    similarArtists: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
        url: zod_1.z.string(),
        image: zod_1.z.array(models_1.DownloadLinkModel),
        languages: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).nullable(),
        wiki: zod_1.z.string(),
        dob: zod_1.z.string(),
        fb: zod_1.z.string(),
        twitter: zod_1.z.string(),
        isRadioPresent: zod_1.z.boolean(),
        type: zod_1.z.string(),
        dominantType: zod_1.z.string(),
        aka: zod_1.z.string(),
        bio: zod_1.z.string().nullable(),
        similarArtists: zod_1.z
            .array(zod_1.z.object({
            id: zod_1.z.string(),
            name: zod_1.z.string()
        }))
            .nullable()
    }))
        .nullable()
});
