import { type GetSongByIdArgs, type GetSongSuggestionsArgs } from '#modules/songs/use-cases';
export declare class SongService {
    private readonly getSongByIdUseCase;
    private readonly getSongByLinkUseCase;
    private readonly getSongLyricsUseCase;
    private readonly getSongSuggestionsUseCase;
    constructor();
    getSongByIds: (args: GetSongByIdArgs) => Promise<{
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
    }[] | null>;
    getSongByLink: (token: string) => Promise<{
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
    }[] | null>;
    getSongLyrics: (songId: string) => Promise<{
        lyrics: string;
        copyright: string;
        snippet: string;
    } | null>;
    getSongSuggestions: (args: GetSongSuggestionsArgs) => Promise<{
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
    }[] | null>;
}
