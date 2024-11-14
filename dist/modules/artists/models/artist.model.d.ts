import { z } from 'zod';
export declare const ArtistAPIResponseModel: z.ZodObject<z.objectUtil.extendShape<{
    artistId: z.ZodString;
    name: z.ZodString;
    subtitle: z.ZodString;
    image: z.ZodString;
    follower_count: z.ZodString;
    type: z.ZodString;
    isVerified: z.ZodBoolean;
    dominantLanguage: z.ZodString;
    dominantType: z.ZodString;
    topSongs: z.ZodArray<z.ZodObject<{
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
    topAlbums: z.ZodArray<z.ZodObject<{
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
            song_count: z.ZodString;
            copyright_text: z.ZodString;
            is_dolby_content: z.ZodBoolean;
            label_url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            is_dolby_content: boolean;
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
            label_url: string;
            song_count: string;
        }, {
            is_dolby_content: boolean;
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
            label_url: string;
            song_count: string;
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
            is_dolby_content: boolean;
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
            label_url: string;
            song_count: string;
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
            is_dolby_content: boolean;
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
            label_url: string;
            song_count: string;
        };
    }>, "many">;
    singles: z.ZodArray<z.ZodObject<{
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
    dedicated_artist_playlist: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        subtitle: z.ZodString;
        type: z.ZodString;
        image: z.ZodString;
        perma_url: z.ZodString;
        more_info: z.ZodObject<{
            uid: z.ZodString;
            firstname: z.ZodString;
            artist_name: z.ZodArray<z.ZodString, "many">;
            entity_type: z.ZodString;
            entity_sub_type: z.ZodString;
            video_available: z.ZodBoolean;
            is_dolby_content: z.ZodAny;
            sub_types: z.ZodAny;
            images: z.ZodAny;
            lastname: z.ZodString;
            song_count: z.ZodString;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            artist_name: string[];
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            sub_types?: any;
            images?: any;
        }, {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            artist_name: string[];
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            sub_types?: any;
            images?: any;
        }>;
        explicit_content: z.ZodString;
        mini_obj: z.ZodBoolean;
        numsongs: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            artist_name: string[];
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs: number;
    }, {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            artist_name: string[];
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs: number;
    }>, "many">;
    featured_artist_playlist: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        subtitle: z.ZodString;
        type: z.ZodString;
        image: z.ZodString;
        perma_url: z.ZodString;
        more_info: z.ZodObject<{
            uid: z.ZodString;
            firstname: z.ZodString;
            artist_name: z.ZodAny;
            entity_type: z.ZodString;
            entity_sub_type: z.ZodString;
            video_available: z.ZodBoolean;
            is_dolby_content: z.ZodAny;
            sub_types: z.ZodAny;
            images: z.ZodAny;
            lastname: z.ZodString;
            song_count: z.ZodString;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        }, {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        }>;
        explicit_content: z.ZodString;
        mini_obj: z.ZodBoolean;
        numsongs: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs: number;
    }, {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs: number;
    }>, "many">;
    similarArtists: z.ZodArray<z.ZodObject<{
        _id: z.ZodString;
        similar: z.ZodString;
        languages: z.ZodString;
        isVerified: z.ZodString;
        image_url: z.ZodString;
        wiki: z.ZodString;
        roles: z.ZodString;
        combine_artist_pages: z.ZodNumber;
        webp: z.ZodBoolean;
        search_keywords: z.ZodString;
        replace_with_primary_artists: z.ZodNumber;
        twitter: z.ZodString;
        dob: z.ZodString;
        aka: z.ZodString;
        name: z.ZodString;
        primary_artist_id: z.ZodString;
        id: z.ZodString;
        fb: z.ZodString;
        bio: z.ZodString;
        perma_url: z.ZodString;
        type: z.ZodString;
        mini_obj: z.ZodBoolean;
        isRadioPresent: z.ZodBoolean;
        dominantType: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        perma_url: string;
        name: string;
        webp: boolean;
        isVerified: string;
        dominantType: string;
        mini_obj: boolean;
        _id: string;
        similar: string;
        languages: string;
        image_url: string;
        wiki: string;
        roles: string;
        combine_artist_pages: number;
        search_keywords: string;
        replace_with_primary_artists: number;
        twitter: string;
        dob: string;
        aka: string;
        primary_artist_id: string;
        fb: string;
        bio: string;
        isRadioPresent: boolean;
    }, {
        type: string;
        id: string;
        perma_url: string;
        name: string;
        webp: boolean;
        isVerified: string;
        dominantType: string;
        mini_obj: boolean;
        _id: string;
        similar: string;
        languages: string;
        image_url: string;
        wiki: string;
        roles: string;
        combine_artist_pages: number;
        search_keywords: string;
        replace_with_primary_artists: number;
        twitter: string;
        dob: string;
        aka: string;
        primary_artist_id: string;
        fb: string;
        bio: string;
        isRadioPresent: boolean;
    }>, "many">;
    isRadioPresent: z.ZodBoolean;
    bio: z.ZodString;
    dob: z.ZodString;
    fb: z.ZodString;
    twitter: z.ZodString;
    wiki: z.ZodString;
    urls: z.ZodObject<{
        albums: z.ZodString;
        bio: z.ZodString;
        comments: z.ZodString;
        songs: z.ZodString;
        overview: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        songs: string;
        albums: string;
        bio: string;
        comments: string;
        overview: string;
    }, {
        songs: string;
        albums: string;
        bio: string;
        comments: string;
        overview: string;
    }>;
    availableLanguages: z.ZodArray<z.ZodString, "many">;
    fan_count: z.ZodString;
    topEpisodes: z.ZodArray<z.ZodAny, "many">;
    is_followed: z.ZodBoolean;
}, {
    id: z.ZodString;
    perma_url: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type: string;
    id: string;
    subtitle: string;
    perma_url: string;
    image: string;
    name: string;
    artistId: string;
    follower_count: string;
    isVerified: boolean;
    dominantLanguage: string;
    dominantType: string;
    topAlbums: {
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
            is_dolby_content: boolean;
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
            label_url: string;
            song_count: string;
        };
    }[];
    topSongs: {
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
    singles: {
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
    dedicated_artist_playlist: {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            artist_name: string[];
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs: number;
    }[];
    featured_artist_playlist: {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs: number;
    }[];
    similarArtists: {
        type: string;
        id: string;
        perma_url: string;
        name: string;
        webp: boolean;
        isVerified: string;
        dominantType: string;
        mini_obj: boolean;
        _id: string;
        similar: string;
        languages: string;
        image_url: string;
        wiki: string;
        roles: string;
        combine_artist_pages: number;
        search_keywords: string;
        replace_with_primary_artists: number;
        twitter: string;
        dob: string;
        aka: string;
        primary_artist_id: string;
        fb: string;
        bio: string;
        isRadioPresent: boolean;
    }[];
    wiki: string;
    twitter: string;
    dob: string;
    fb: string;
    bio: string;
    isRadioPresent: boolean;
    urls: {
        songs: string;
        albums: string;
        bio: string;
        comments: string;
        overview: string;
    };
    availableLanguages: string[];
    fan_count: string;
    topEpisodes: any[];
    is_followed: boolean;
}, {
    type: string;
    id: string;
    subtitle: string;
    perma_url: string;
    image: string;
    name: string;
    artistId: string;
    follower_count: string;
    isVerified: boolean;
    dominantLanguage: string;
    dominantType: string;
    topAlbums: {
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
            is_dolby_content: boolean;
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
            label_url: string;
            song_count: string;
        };
    }[];
    topSongs: {
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
    singles: {
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
    dedicated_artist_playlist: {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            artist_name: string[];
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs: number;
    }[];
    featured_artist_playlist: {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs: number;
    }[];
    similarArtists: {
        type: string;
        id: string;
        perma_url: string;
        name: string;
        webp: boolean;
        isVerified: string;
        dominantType: string;
        mini_obj: boolean;
        _id: string;
        similar: string;
        languages: string;
        image_url: string;
        wiki: string;
        roles: string;
        combine_artist_pages: number;
        search_keywords: string;
        replace_with_primary_artists: number;
        twitter: string;
        dob: string;
        aka: string;
        primary_artist_id: string;
        fb: string;
        bio: string;
        isRadioPresent: boolean;
    }[];
    wiki: string;
    twitter: string;
    dob: string;
    fb: string;
    bio: string;
    isRadioPresent: boolean;
    urls: {
        songs: string;
        albums: string;
        bio: string;
        comments: string;
        overview: string;
    };
    availableLanguages: string[];
    fan_count: string;
    topEpisodes: any[];
    is_followed: boolean;
}>;
export declare const ArtistModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    url: z.ZodString;
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
    followerCount: z.ZodNullable<z.ZodNumber>;
    fanCount: z.ZodNullable<z.ZodString>;
    isVerified: z.ZodNullable<z.ZodBoolean>;
    dominantLanguage: z.ZodNullable<z.ZodString>;
    dominantType: z.ZodNullable<z.ZodString>;
    bio: z.ZodNullable<z.ZodArray<z.ZodObject<{
        text: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        sequence: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        title: string | null;
        text: string | null;
        sequence: number | null;
    }, {
        title: string | null;
        text: string | null;
        sequence: number | null;
    }>, "many">>;
    dob: z.ZodNullable<z.ZodString>;
    fb: z.ZodNullable<z.ZodString>;
    twitter: z.ZodNullable<z.ZodString>;
    wiki: z.ZodNullable<z.ZodString>;
    availableLanguages: z.ZodArray<z.ZodString, "many">;
    isRadioPresent: z.ZodNullable<z.ZodBoolean>;
    topSongs: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    topAlbums: z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        year: z.ZodNullable<z.ZodNumber>;
        type: z.ZodString;
        playCount: z.ZodNullable<z.ZodNumber>;
        language: z.ZodString;
        explicitContent: z.ZodBoolean;
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
        year: number | null;
        name: string;
        description: string;
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
        year: number | null;
        name: string;
        description: string;
        playCount: number | null;
        explicitContent: boolean;
        songCount: number | null;
    }>, "many">>;
    singles: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    similarArtists: z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
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
        languages: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>;
        wiki: z.ZodString;
        dob: z.ZodString;
        fb: z.ZodString;
        twitter: z.ZodString;
        isRadioPresent: z.ZodBoolean;
        type: z.ZodString;
        dominantType: z.ZodString;
        aka: z.ZodString;
        bio: z.ZodNullable<z.ZodString>;
        similarArtists: z.ZodNullable<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
        }, {
            id: string;
            name: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        dominantType: string;
        similarArtists: {
            id: string;
            name: string;
        }[] | null;
        languages: Record<string, string> | null;
        wiki: string;
        twitter: string;
        dob: string;
        aka: string;
        fb: string;
        bio: string | null;
        isRadioPresent: boolean;
    }, {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        dominantType: string;
        similarArtists: {
            id: string;
            name: string;
        }[] | null;
        languages: Record<string, string> | null;
        wiki: string;
        twitter: string;
        dob: string;
        aka: string;
        fb: string;
        bio: string | null;
        isRadioPresent: boolean;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    url: string;
    type: string;
    id: string;
    image: {
        quality: string;
        url: string;
    }[];
    name: string;
    isVerified: boolean | null;
    dominantLanguage: string | null;
    dominantType: string | null;
    topAlbums: {
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
        year: number | null;
        name: string;
        description: string;
        playCount: number | null;
        explicitContent: boolean;
        songCount: number | null;
    }[] | null;
    topSongs: {
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
    singles: {
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
    similarArtists: {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        dominantType: string;
        similarArtists: {
            id: string;
            name: string;
        }[] | null;
        languages: Record<string, string> | null;
        wiki: string;
        twitter: string;
        dob: string;
        aka: string;
        fb: string;
        bio: string | null;
        isRadioPresent: boolean;
    }[] | null;
    wiki: string | null;
    twitter: string | null;
    dob: string | null;
    fb: string | null;
    bio: {
        title: string | null;
        text: string | null;
        sequence: number | null;
    }[] | null;
    isRadioPresent: boolean | null;
    availableLanguages: string[];
    followerCount: number | null;
    fanCount: string | null;
}, {
    url: string;
    type: string;
    id: string;
    image: {
        quality: string;
        url: string;
    }[];
    name: string;
    isVerified: boolean | null;
    dominantLanguage: string | null;
    dominantType: string | null;
    topAlbums: {
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
        year: number | null;
        name: string;
        description: string;
        playCount: number | null;
        explicitContent: boolean;
        songCount: number | null;
    }[] | null;
    topSongs: {
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
    singles: {
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
    similarArtists: {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        dominantType: string;
        similarArtists: {
            id: string;
            name: string;
        }[] | null;
        languages: Record<string, string> | null;
        wiki: string;
        twitter: string;
        dob: string;
        aka: string;
        fb: string;
        bio: string | null;
        isRadioPresent: boolean;
    }[] | null;
    wiki: string | null;
    twitter: string | null;
    dob: string | null;
    fb: string | null;
    bio: {
        title: string | null;
        text: string | null;
        sequence: number | null;
    }[] | null;
    isRadioPresent: boolean | null;
    availableLanguages: string[];
    followerCount: number | null;
    fanCount: string | null;
}>;
