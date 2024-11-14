import { z } from 'zod';
export declare const PlaylistAPIResponseModel: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    title: z.ZodString;
    subtitle: z.ZodString;
    header_desc: z.ZodString;
    type: z.ZodString;
    perma_url: z.ZodString;
    image: z.ZodString;
    language: z.ZodString;
    year: z.ZodString;
    play_count: z.ZodString;
    explicit_content: z.ZodString;
    list_count: z.ZodString;
    list_type: z.ZodString;
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        subtitle: z.ZodString;
        header_desc: z.ZodString;
        type: z.ZodString;
        perma_url: z.ZodString;
        image: z.ZodString;
        language: z.ZodString;
        year: z.ZodString;
        play_count: z.ZodString;
        explicit_content: z.ZodString;
        list_count: z.ZodString;
        list_type: z.ZodString;
        list: z.ZodString;
        more_info: z.ZodObject<{
            music: z.ZodString;
            album_id: z.ZodString;
            album: z.ZodString;
            label: z.ZodString;
            origin: z.ZodString;
            is_dolby_content: z.ZodBoolean;
            '320kbps': z.ZodString;
            encrypted_media_url: z.ZodString;
            encrypted_cache_url: z.ZodString;
            album_url: z.ZodString;
            duration: z.ZodString;
            rights: z.ZodObject<{
                code: z.ZodString;
                cacheable: z.ZodString;
                delete_cached_object: z.ZodString;
                reason: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            }, {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            }>;
            cache_state: z.ZodString;
            has_lyrics: z.ZodString;
            lyrics_snippet: z.ZodString;
            starred: z.ZodString;
            copyright_text: z.ZodString;
            artistMap: z.ZodObject<{
                primary_artists: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodString;
                    perma_url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }, {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }>, "many">;
                featured_artists: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodString;
                    perma_url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }, {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }>, "many">;
                artists: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    type: z.ZodString;
                    image: z.ZodString;
                    perma_url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }, {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                primary_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
            }, {
                artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                primary_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
            }>;
            release_date: z.ZodString;
            label_url: z.ZodString;
            vcode: z.ZodString;
            vlink: z.ZodString;
            triller_available: z.ZodBoolean;
            request_jiotune_flag: z.ZodBoolean;
            webp: z.ZodString;
            lyrics_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            '320kbps': string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                primary_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            webp: string;
            lyrics_id: string;
        }, {
            '320kbps': string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                primary_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            webp: string;
            lyrics_id: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        header_desc: string;
        perma_url: string;
        image: string;
        language: string;
        year: string;
        play_count: string;
        explicit_content: string;
        list_count: string;
        list_type: string;
        list: string;
        more_info: {
            '320kbps': string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                primary_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            webp: string;
            lyrics_id: string;
        };
    }, {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        header_desc: string;
        perma_url: string;
        image: string;
        language: string;
        year: string;
        play_count: string;
        explicit_content: string;
        list_count: string;
        list_type: string;
        list: string;
        more_info: {
            '320kbps': string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                primary_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            webp: string;
            lyrics_id: string;
        };
    }>, "many">;
    more_info: z.ZodObject<{
        uid: z.ZodString;
        is_dolby_content: z.ZodBoolean;
        subtype: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        last_updated: z.ZodString;
        username: z.ZodString;
        firstname: z.ZodString;
        lastname: z.ZodString;
        is_followed: z.ZodString;
        isFY: z.ZodBoolean;
        follower_count: z.ZodString;
        fan_count: z.ZodString;
        playlist_type: z.ZodString;
        share: z.ZodString;
        sub_types: z.ZodArray<z.ZodString, "many">;
        images: z.ZodArray<z.ZodString, "many">;
        H2: z.ZodNullable<z.ZodString>;
        subheading: z.ZodString;
        video_count: z.ZodString;
        artists: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            role: z.ZodString;
            image: z.ZodString;
            type: z.ZodString;
            perma_url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            perma_url: string;
            image: string;
            name: string;
            role: string;
        }, {
            type: string;
            id: string;
            perma_url: string;
            image: string;
            name: string;
            role: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        artists: {
            type: string;
            id: string;
            perma_url: string;
            image: string;
            name: string;
            role: string;
        }[];
        is_dolby_content: boolean;
        follower_count: string;
        uid: string;
        firstname: string;
        sub_types: string[];
        images: string[];
        lastname: string;
        fan_count: string;
        is_followed: string;
        subtype: string[];
        last_updated: string;
        username: string;
        isFY: boolean;
        playlist_type: string;
        share: string;
        H2: string | null;
        subheading: string;
        video_count: string;
    }, {
        artists: {
            type: string;
            id: string;
            perma_url: string;
            image: string;
            name: string;
            role: string;
        }[];
        is_dolby_content: boolean;
        follower_count: string;
        uid: string;
        firstname: string;
        sub_types: string[];
        images: string[];
        lastname: string;
        fan_count: string;
        is_followed: string;
        last_updated: string;
        username: string;
        isFY: boolean;
        playlist_type: string;
        share: string;
        H2: string | null;
        subheading: string;
        video_count: string;
        subtype?: string[] | undefined;
    }>;
}, {
    description: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type: string;
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        header_desc: string;
        perma_url: string;
        image: string;
        language: string;
        year: string;
        play_count: string;
        explicit_content: string;
        list_count: string;
        list_type: string;
        list: string;
        more_info: {
            '320kbps': string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                primary_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            webp: string;
            lyrics_id: string;
        };
    }[];
    more_info: {
        artists: {
            type: string;
            id: string;
            perma_url: string;
            image: string;
            name: string;
            role: string;
        }[];
        is_dolby_content: boolean;
        follower_count: string;
        uid: string;
        firstname: string;
        sub_types: string[];
        images: string[];
        lastname: string;
        fan_count: string;
        is_followed: string;
        subtype: string[];
        last_updated: string;
        username: string;
        isFY: boolean;
        playlist_type: string;
        share: string;
        H2: string | null;
        subheading: string;
        video_count: string;
    };
    description: string;
}, {
    type: string;
    id: string;
    title: string;
    subtitle: string;
    header_desc: string;
    perma_url: string;
    image: string;
    language: string;
    year: string;
    play_count: string;
    explicit_content: string;
    list_count: string;
    list_type: string;
    list: {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        header_desc: string;
        perma_url: string;
        image: string;
        language: string;
        year: string;
        play_count: string;
        explicit_content: string;
        list_count: string;
        list_type: string;
        list: string;
        more_info: {
            '320kbps': string;
            music: string;
            album_id: string;
            album: string;
            label: string;
            origin: string;
            is_dolby_content: boolean;
            encrypted_media_url: string;
            encrypted_cache_url: string;
            album_url: string;
            duration: string;
            rights: {
                code: string;
                cacheable: string;
                delete_cached_object: string;
                reason: string;
            };
            cache_state: string;
            has_lyrics: string;
            lyrics_snippet: string;
            starred: string;
            copyright_text: string;
            artistMap: {
                artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                primary_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
                featured_artists: {
                    type: string;
                    id: string;
                    perma_url: string;
                    image: string;
                    name: string;
                    role: string;
                }[];
            };
            release_date: string;
            label_url: string;
            vcode: string;
            vlink: string;
            triller_available: boolean;
            request_jiotune_flag: boolean;
            webp: string;
            lyrics_id: string;
        };
    }[];
    more_info: {
        artists: {
            type: string;
            id: string;
            perma_url: string;
            image: string;
            name: string;
            role: string;
        }[];
        is_dolby_content: boolean;
        follower_count: string;
        uid: string;
        firstname: string;
        sub_types: string[];
        images: string[];
        lastname: string;
        fan_count: string;
        is_followed: string;
        last_updated: string;
        username: string;
        isFY: boolean;
        playlist_type: string;
        share: string;
        H2: string | null;
        subheading: string;
        video_count: string;
        subtype?: string[] | undefined;
    };
    description: string;
}>;
export declare const PlaylistModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    year: z.ZodNullable<z.ZodNumber>;
    type: z.ZodString;
    playCount: z.ZodNullable<z.ZodNumber>;
    language: z.ZodString;
    explicitContent: z.ZodBoolean;
    songCount: z.ZodNullable<z.ZodNumber>;
    url: z.ZodString;
    image: z.ZodArray<z.ZodObject<{
        quality: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        quality: string;
        url: string;
    }, {
        quality: string;
        url: string;
    }>, "many">;
    songs: z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodString;
        year: z.ZodNullable<z.ZodString>;
        releaseDate: z.ZodNullable<z.ZodString>;
        duration: z.ZodNullable<z.ZodNumber>;
        label: z.ZodNullable<z.ZodString>;
        explicitContent: z.ZodBoolean;
        playCount: z.ZodNullable<z.ZodNumber>;
        language: z.ZodString;
        hasLyrics: z.ZodBoolean;
        lyricsId: z.ZodNullable<z.ZodString>;
        lyrics: z.ZodOptional<z.ZodObject<{
            lyrics: z.ZodString;
            copyright: z.ZodString;
            snippet: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            lyrics: string;
            copyright: string;
            snippet: string;
        }, {
            lyrics: string;
            copyright: string;
            snippet: string;
        }>>;
        url: z.ZodString;
        copyright: z.ZodNullable<z.ZodString>;
        album: z.ZodObject<{
            id: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            url: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url: string | null;
            id: string | null;
            name: string | null;
        }, {
            url: string | null;
            id: string | null;
            name: string | null;
        }>;
        artists: z.ZodObject<{
            primary: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                role: z.ZodString;
                type: z.ZodString;
                image: z.ZodArray<z.ZodObject<{
                    quality: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    quality: string;
                    url: string;
                }, {
                    quality: string;
                    url: string;
                }>, "many">;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }, {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }>, "many">;
            featured: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                role: z.ZodString;
                type: z.ZodString;
                image: z.ZodArray<z.ZodObject<{
                    quality: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    quality: string;
                    url: string;
                }, {
                    quality: string;
                    url: string;
                }>, "many">;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }, {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }>, "many">;
            all: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                role: z.ZodString;
                type: z.ZodString;
                image: z.ZodArray<z.ZodObject<{
                    quality: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    quality: string;
                    url: string;
                }, {
                    quality: string;
                    url: string;
                }>, "many">;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }, {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            primary: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            featured: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            all: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
        }, {
            primary: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            featured: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            all: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
        }>;
        image: z.ZodArray<z.ZodObject<{
            quality: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            quality: string;
            url: string;
        }, {
            quality: string;
            url: string;
        }>, "many">;
        downloadUrl: z.ZodArray<z.ZodObject<{
            quality: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            quality: string;
            url: string;
        }, {
            quality: string;
            url: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        artists: {
            primary: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            featured: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            all: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
        };
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        language: string;
        year: string | null;
        album: {
            url: string | null;
            id: string | null;
            name: string | null;
        };
        label: string | null;
        duration: number | null;
        name: string;
        playCount: number | null;
        explicitContent: boolean;
        releaseDate: string | null;
        hasLyrics: boolean;
        lyricsId: string | null;
        copyright: string | null;
        downloadUrl: {
            quality: string;
            url: string;
        }[];
        lyrics?: {
            lyrics: string;
            copyright: string;
            snippet: string;
        } | undefined;
    }, {
        artists: {
            primary: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            featured: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            all: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
        };
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        language: string;
        year: string | null;
        album: {
            url: string | null;
            id: string | null;
            name: string | null;
        };
        label: string | null;
        duration: number | null;
        name: string;
        playCount: number | null;
        explicitContent: boolean;
        releaseDate: string | null;
        hasLyrics: boolean;
        lyricsId: string | null;
        copyright: string | null;
        downloadUrl: {
            quality: string;
            url: string;
        }[];
        lyrics?: {
            lyrics: string;
            copyright: string;
            snippet: string;
        } | undefined;
    }>, "many">>;
    artists: z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        role: z.ZodString;
        type: z.ZodString;
        image: z.ZodArray<z.ZodObject<{
            quality: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            quality: string;
            url: string;
        }, {
            quality: string;
            url: string;
        }>, "many">;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        role: string;
    }, {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        role: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    songs: {
        artists: {
            primary: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            featured: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            all: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
        };
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        language: string;
        year: string | null;
        album: {
            url: string | null;
            id: string | null;
            name: string | null;
        };
        label: string | null;
        duration: number | null;
        name: string;
        playCount: number | null;
        explicitContent: boolean;
        releaseDate: string | null;
        hasLyrics: boolean;
        lyricsId: string | null;
        copyright: string | null;
        downloadUrl: {
            quality: string;
            url: string;
        }[];
        lyrics?: {
            lyrics: string;
            copyright: string;
            snippet: string;
        } | undefined;
    }[] | null;
    artists: {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        role: string;
    }[] | null;
    url: string;
    type: string;
    id: string;
    image: {
        quality: string;
        url: string;
    }[];
    language: string;
    year: number | null;
    name: string;
    description: string | null;
    playCount: number | null;
    explicitContent: boolean;
    songCount: number | null;
}, {
    songs: {
        artists: {
            primary: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            featured: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
            all: {
                url: string;
                type: string;
                id: string;
                image: {
                    quality: string;
                    url: string;
                }[];
                name: string;
                role: string;
            }[];
        };
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        language: string;
        year: string | null;
        album: {
            url: string | null;
            id: string | null;
            name: string | null;
        };
        label: string | null;
        duration: number | null;
        name: string;
        playCount: number | null;
        explicitContent: boolean;
        releaseDate: string | null;
        hasLyrics: boolean;
        lyricsId: string | null;
        copyright: string | null;
        downloadUrl: {
            quality: string;
            url: string;
        }[];
        lyrics?: {
            lyrics: string;
            copyright: string;
            snippet: string;
        } | undefined;
    }[] | null;
    artists: {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        role: string;
    }[] | null;
    url: string;
    type: string;
    id: string;
    image: {
        quality: string;
        url: string;
    }[];
    language: string;
    year: number | null;
    name: string;
    description: string | null;
    playCount: number | null;
    explicitContent: boolean;
    songCount: number | null;
}>;
