import type { IUseCase } from "#common/types";
import type { ArtistAlbumModel } from "#modules/artists/models";
import type { z } from "zod";
export interface GetArtistAlbumsArgs {
    artistId: string;
    page: number;
    sortBy: "popularity" | "latest" | "alphabetical";
    sortOrder: "asc" | "desc";
}
export declare class GetArtistAlbumsUseCase implements IUseCase<GetArtistAlbumsArgs, z.infer<typeof ArtistAlbumModel> | null> {
    constructor();
    execute({ artistId, page, sortOrder, sortBy }: GetArtistAlbumsArgs): Promise<{
        total: number;
        albums: {
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
        }[];
    } | null>;
}
