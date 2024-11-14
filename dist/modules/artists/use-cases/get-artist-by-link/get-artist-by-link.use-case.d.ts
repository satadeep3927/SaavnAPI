import type { IUseCase } from "#common/types";
import type { ArtistModel } from "#modules/artists/models";
import type { z } from "zod";
export interface GetArtistByLinkArgs {
    token: string;
    page: number;
    songCount: number;
    albumCount: number;
    sortBy: "popularity" | "latest" | "alphabetical";
    sortOrder: "asc" | "desc";
}
export declare class GetArtistByLinkUseCase implements IUseCase<GetArtistByLinkArgs, z.infer<typeof ArtistModel> | null> {
    constructor();
    execute({ token, page, songCount, albumCount, sortBy, sortOrder, }: GetArtistByLinkArgs): Promise<{
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
    } | null>;
}
