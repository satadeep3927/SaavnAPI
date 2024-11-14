import { type SearchAlbumsArgs, type SearchArtistsArgs, type SearchPlaylistsArgs, type SearchSongsArgs } from '#modules/search/use-cases';
export declare class SearchService {
    private readonly searchAllUseCase;
    private readonly searchSongsUseCase;
    private readonly searchAlbumsUseCase;
    private readonly searchArtistsUseCase;
    private readonly searchPlaylistsUseCase;
    constructor();
    searchAll: (query: string) => Promise<{
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
    } | null>;
    searchSongs: (args: SearchSongsArgs) => Promise<{
        total: number;
        results: {
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
        }[];
        start: number;
    }>;
    searchAlbums: (args: SearchAlbumsArgs) => Promise<{
        total: number;
        results: {
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
        }[];
        start: number;
    }>;
    searchArtists: (args: SearchArtistsArgs) => Promise<{
        total: number;
        results: {
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
        start: number;
    } | null>;
    searchPlaylists: (args: SearchPlaylistsArgs) => Promise<{
        total: number;
        results: {
            url: string;
            type: string;
            id: string;
            image: {
                quality: string;
                url: string;
            }[];
            language: string;
            name: string;
            explicitContent: boolean;
            songCount: number | null;
        }[];
        start: number;
    } | null>;
}
