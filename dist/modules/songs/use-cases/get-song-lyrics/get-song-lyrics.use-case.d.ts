import type { IUseCase } from "#common/types";
import type { LyricsModel } from "#modules/songs/models";
import type { z } from "zod";
export declare class GetSongLyricsUseCase implements IUseCase<string, z.infer<typeof LyricsModel> | null> {
    constructor();
    execute(songId: string): Promise<{
        lyrics: string;
        copyright: string;
        snippet: string;
    } | null>;
}
