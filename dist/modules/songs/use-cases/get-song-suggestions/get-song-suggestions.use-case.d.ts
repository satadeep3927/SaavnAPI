import type { IUseCase } from "#common/types";
import type { SongModel } from "#modules/songs/models";
import type { z } from "zod";
export interface GetSongSuggestionsArgs {
    songId: string;
    limit: number;
}
export declare class GetSongSuggestionsUseCase implements IUseCase<GetSongSuggestionsArgs, z.infer<typeof SongModel>[] | null> {
    private readonly createSongStation;
    constructor();
    execute({ songId, limit }: GetSongSuggestionsArgs): Promise<{
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
