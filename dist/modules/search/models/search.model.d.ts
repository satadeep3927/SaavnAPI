import { z } from 'zod';
export declare const SearchAPIResponseModel: z.ZodObject<{
    albums: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            type: z.ZodString;
            image: z.ZodString;
            perma_url: z.ZodString;
            more_info: z.ZodObject<{
                music: z.ZodString;
                ctr: z.ZodNumber;
                year: z.ZodString;
                is_movie: z.ZodString;
                language: z.ZodString;
                song_pids: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            }, {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            }>;
            explicit_content: z.ZodString;
            mini_obj: z.ZodBoolean;
            description: z.ZodString;
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
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            description: string;
            mini_obj: boolean;
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
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            description: string;
            mini_obj: boolean;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    }, {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    }>;
    songs: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            type: z.ZodString;
            image: z.ZodString;
            perma_url: z.ZodString;
            more_info: z.ZodObject<{
                album: z.ZodString;
                ctr: z.ZodNumber;
                score: z.ZodOptional<z.ZodString>;
                vcode: z.ZodString;
                vlink: z.ZodOptional<z.ZodString>;
                primary_artists: z.ZodString;
                singers: z.ZodString;
                video_available: z.ZodBoolean;
                triller_available: z.ZodBoolean;
                language: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            }, {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            }>;
            explicit_content: z.ZodString;
            mini_obj: z.ZodBoolean;
            description: z.ZodString;
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
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
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
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    }, {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    }>;
    playlists: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            type: z.ZodString;
            image: z.ZodString;
            perma_url: z.ZodString;
            more_info: z.ZodObject<{
                firstname: z.ZodString;
                artist_name: z.ZodArray<z.ZodString, "many">;
                entity_type: z.ZodString;
                entity_sub_type: z.ZodString;
                video_available: z.ZodBoolean;
                is_dolby_content: z.ZodBoolean;
                sub_types: z.ZodAny;
                images: z.ZodAny;
                lastname: z.ZodString;
                language: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            }, {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            }>;
            explicit_content: z.ZodString;
            mini_obj: z.ZodBoolean;
            description: z.ZodString;
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
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            description: string;
            mini_obj: boolean;
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
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            description: string;
            mini_obj: boolean;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    }, {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    }>;
    artists: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            image: z.ZodString;
            extra: z.ZodString;
            type: z.ZodString;
            mini_obj: z.ZodBoolean;
            isRadioPresent: z.ZodBoolean;
            ctr: z.ZodNumber;
            entity: z.ZodNumber;
            description: z.ZodString;
            position: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            title: string;
            image: string;
            description: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }, {
            type: string;
            id: string;
            title: string;
            image: string;
            description: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            type: string;
            id: string;
            title: string;
            image: string;
            description: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }[];
        position: number;
    }, {
        data: {
            type: string;
            id: string;
            title: string;
            image: string;
            description: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }[];
        position: number;
    }>;
    topquery: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            type: z.ZodString;
            image: z.ZodString;
            perma_url: z.ZodString;
            more_info: z.ZodObject<{
                album: z.ZodString;
                ctr: z.ZodNumber;
                score: z.ZodOptional<z.ZodString>;
                vcode: z.ZodString;
                vlink: z.ZodString;
                primary_artists: z.ZodString;
                singers: z.ZodString;
                video_available: z.ZodBoolean;
                triller_available: z.ZodBoolean;
                language: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            }, {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            }>;
            explicit_content: z.ZodOptional<z.ZodString>;
            mini_obj: z.ZodBoolean;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }, {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }[];
        position: number;
    }, {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }[];
        position: number;
    }>;
}, "strip", z.ZodTypeAny, {
    songs: {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    };
    albums: {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    };
    artists: {
        data: {
            type: string;
            id: string;
            title: string;
            image: string;
            description: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }[];
        position: number;
    };
    playlists: {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    };
    topquery: {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }[];
        position: number;
    };
}, {
    songs: {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                vlink?: string | undefined;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    };
    albums: {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                year: string;
                music: string;
                ctr: number;
                is_movie: string;
                song_pids: string;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    };
    artists: {
        data: {
            type: string;
            id: string;
            title: string;
            image: string;
            description: string;
            mini_obj: boolean;
            isRadioPresent: boolean;
            ctr: number;
            position: number;
            extra: string;
            entity: number;
        }[];
        position: number;
    };
    playlists: {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            explicit_content: string;
            more_info: {
                language: string;
                is_dolby_content: boolean;
                firstname: string;
                artist_name: string[];
                entity_type: string;
                entity_sub_type: string;
                video_available: boolean;
                lastname: string;
                sub_types?: any;
                images?: any;
            };
            description: string;
            mini_obj: boolean;
        }[];
        position: number;
    };
    topquery: {
        data: {
            type: string;
            id: string;
            title: string;
            subtitle: string;
            perma_url: string;
            image: string;
            more_info: {
                language: string;
                album: string;
                primary_artists: string;
                vcode: string;
                vlink: string;
                triller_available: boolean;
                video_available: boolean;
                ctr: number;
                singers: string;
                score?: string | undefined;
            };
            description: string;
            mini_obj: boolean;
            explicit_content?: string | undefined;
        }[];
        position: number;
    };
}>;
export declare const SearchModel: z.ZodObject<{
    albums: z.ZodObject<{
        results: z.ZodType<{
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: string;
            description: string;
            artist: string;
            songIds: string;
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        position: number;
        results: {
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: string;
            description: string;
            artist: string;
            songIds: string;
        }[];
    }, {
        position: number;
        results?: any;
    }>;
    songs: z.ZodObject<{
        results: z.ZodType<{
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            album: string;
            description: string;
            singers: string;
            primaryArtists: string;
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        position: number;
        results: {
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            album: string;
            description: string;
            singers: string;
            primaryArtists: string;
        }[];
    }, {
        position: number;
        results?: any;
    }>;
    artists: z.ZodObject<{
        results: z.ZodType<{
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            description: string;
            position: number;
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        position: number;
        results: {
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            description: string;
            position: number;
        }[];
    }, {
        position: number;
        results?: any;
    }>;
    playlists: z.ZodObject<{
        results: z.ZodType<{
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            description: string;
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        position: number;
        results: {
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            description: string;
        }[];
    }, {
        position: number;
        results?: any;
    }>;
    topQuery: z.ZodObject<{
        results: z.ZodType<{
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            album: string;
            description: string;
            singers: string;
            primaryArtists: string;
        }[], any, any>;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        position: number;
        results: {
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            album: string;
            description: string;
            singers: string;
            primaryArtists: string;
        }[];
    }, {
        position: number;
        results?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    songs: {
        position: number;
        results: {
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            album: string;
            description: string;
            singers: string;
            primaryArtists: string;
        }[];
    };
    albums: {
        position: number;
        results: {
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            year: string;
            description: string;
            artist: string;
            songIds: string;
        }[];
    };
    artists: {
        position: number;
        results: {
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            description: string;
            position: number;
        }[];
    };
    playlists: {
        position: number;
        results: {
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            description: string;
        }[];
    };
    topQuery: {
        position: number;
        results: {
            url: string;
            type: string;
            id: string;
            title: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            album: string;
            description: string;
            singers: string;
            primaryArtists: string;
        }[];
    };
}, {
    songs: {
        position: number;
        results?: any;
    };
    albums: {
        position: number;
        results?: any;
    };
    artists: {
        position: number;
        results?: any;
    };
    playlists: {
        position: number;
        results?: any;
    };
    topQuery: {
        position: number;
        results?: any;
    };
}>;
