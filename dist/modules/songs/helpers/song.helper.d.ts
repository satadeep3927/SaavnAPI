import type { LyricsAPIResponseModel, LyricsModel, SongAPIResponseModel, SongModel } from '#modules/songs/models';
import type { z } from 'zod';
export declare const createSongPayload: (song: z.infer<typeof SongAPIResponseModel>) => z.infer<typeof SongModel>;
export declare const createSongLyricsPayload: (lyrics: z.infer<typeof LyricsAPIResponseModel>) => z.infer<typeof LyricsModel>;
