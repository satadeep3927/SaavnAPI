import type { IUseCase } from "#common/types";
import type { PlaylistModel } from "#modules/playlists/models";
import type { z } from "zod";
export interface GetPlaylistByIdArgs {
    id: string;
    limit: number;
    page: number;
}
export declare class GetPlaylistByIdUseCase implements IUseCase<GetPlaylistByIdArgs, z.infer<typeof PlaylistModel> | null> {
    constructor();
    execute({ id, limit, page }: GetPlaylistByIdArgs): Promise<{
        songCount: number | null;
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
        }[];
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
    } | null>;
}
