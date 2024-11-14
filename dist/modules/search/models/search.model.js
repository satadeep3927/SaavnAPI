"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModel = exports.SearchAPIResponseModel = void 0;
const models_1 = require("#common/models");
const zod_1 = require("zod");
exports.SearchAPIResponseModel = zod_1.z.object({
    albums: zod_1.z.object({
        data: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string(),
            title: zod_1.z.string(),
            subtitle: zod_1.z.string(),
            type: zod_1.z.string(),
            image: zod_1.z.string(),
            perma_url: zod_1.z.string(),
            more_info: zod_1.z.object({
                music: zod_1.z.string(),
                ctr: zod_1.z.number(),
                year: zod_1.z.string(),
                is_movie: zod_1.z.string(),
                language: zod_1.z.string(),
                song_pids: zod_1.z.string()
            }),
            explicit_content: zod_1.z.string(),
            mini_obj: zod_1.z.boolean(),
            description: zod_1.z.string()
        })),
        position: zod_1.z.number()
    }),
    songs: zod_1.z.object({
        data: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string(),
            title: zod_1.z.string(),
            subtitle: zod_1.z.string(),
            type: zod_1.z.string(),
            image: zod_1.z.string(),
            perma_url: zod_1.z.string(),
            more_info: zod_1.z.object({
                album: zod_1.z.string(),
                ctr: zod_1.z.number(),
                score: zod_1.z.string().optional(),
                vcode: zod_1.z.string(),
                vlink: zod_1.z.string().optional(),
                primary_artists: zod_1.z.string(),
                singers: zod_1.z.string(),
                video_available: zod_1.z.boolean(),
                triller_available: zod_1.z.boolean(),
                language: zod_1.z.string()
            }),
            explicit_content: zod_1.z.string(),
            mini_obj: zod_1.z.boolean(),
            description: zod_1.z.string()
        })),
        position: zod_1.z.number()
    }),
    playlists: zod_1.z.object({
        data: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string(),
            title: zod_1.z.string(),
            subtitle: zod_1.z.string(),
            type: zod_1.z.string(),
            image: zod_1.z.string(),
            perma_url: zod_1.z.string(),
            more_info: zod_1.z.object({
                firstname: zod_1.z.string(),
                artist_name: zod_1.z.array(zod_1.z.string()),
                entity_type: zod_1.z.string(),
                entity_sub_type: zod_1.z.string(),
                video_available: zod_1.z.boolean(),
                is_dolby_content: zod_1.z.boolean(),
                sub_types: zod_1.z.any(),
                images: zod_1.z.any(),
                lastname: zod_1.z.string(),
                language: zod_1.z.string()
            }),
            explicit_content: zod_1.z.string(),
            mini_obj: zod_1.z.boolean(),
            description: zod_1.z.string()
        })),
        position: zod_1.z.number()
    }),
    artists: zod_1.z.object({
        data: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string(),
            title: zod_1.z.string(),
            image: zod_1.z.string(),
            extra: zod_1.z.string(),
            type: zod_1.z.string(),
            mini_obj: zod_1.z.boolean(),
            isRadioPresent: zod_1.z.boolean(),
            ctr: zod_1.z.number(),
            entity: zod_1.z.number(),
            description: zod_1.z.string(),
            position: zod_1.z.number()
        })),
        position: zod_1.z.number()
    }),
    topquery: zod_1.z.object({
        data: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string(),
            title: zod_1.z.string(),
            subtitle: zod_1.z.string(),
            type: zod_1.z.string(),
            image: zod_1.z.string(),
            perma_url: zod_1.z.string(),
            more_info: zod_1.z.object({
                album: zod_1.z.string(),
                ctr: zod_1.z.number(),
                score: zod_1.z.string().optional(),
                vcode: zod_1.z.string(),
                vlink: zod_1.z.string(),
                primary_artists: zod_1.z.string(),
                singers: zod_1.z.string(),
                video_available: zod_1.z.boolean(),
                triller_available: zod_1.z.boolean(),
                language: zod_1.z.string()
            }),
            explicit_content: zod_1.z.string().optional(),
            mini_obj: zod_1.z.boolean(),
            description: zod_1.z.string()
        })),
        position: zod_1.z.number()
    })
});
const SearchResponseModel = (model) => zod_1.z.object({
    results: model,
    position: zod_1.z.number()
});
exports.SearchModel = zod_1.z.object({
    albums: SearchResponseModel(zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        image: zod_1.z.array(models_1.DownloadLinkModel),
        artist: zod_1.z.string(),
        url: zod_1.z.string(),
        type: zod_1.z.string(),
        description: zod_1.z.string(),
        year: zod_1.z.string(),
        language: zod_1.z.string(),
        songIds: zod_1.z.string()
    }))),
    songs: SearchResponseModel(zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        image: zod_1.z.array(models_1.DownloadLinkModel),
        album: zod_1.z.string(),
        url: zod_1.z.string(),
        type: zod_1.z.string(),
        description: zod_1.z.string(),
        primaryArtists: zod_1.z.string(),
        singers: zod_1.z.string(),
        language: zod_1.z.string()
    }))),
    artists: SearchResponseModel(zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        image: zod_1.z.array(models_1.DownloadLinkModel),
        type: zod_1.z.string(),
        description: zod_1.z.string(),
        position: zod_1.z.number()
    }))),
    playlists: SearchResponseModel(zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        image: zod_1.z.array(models_1.DownloadLinkModel),
        url: zod_1.z.string(),
        language: zod_1.z.string(),
        type: zod_1.z.string(),
        description: zod_1.z.string()
    }))),
    topQuery: SearchResponseModel(zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string(),
        image: zod_1.z.array(models_1.DownloadLinkModel),
        album: zod_1.z.string(),
        url: zod_1.z.string(),
        type: zod_1.z.string(),
        description: zod_1.z.string(),
        primaryArtists: zod_1.z.string(),
        singers: zod_1.z.string(),
        language: zod_1.z.string()
    })))
});
