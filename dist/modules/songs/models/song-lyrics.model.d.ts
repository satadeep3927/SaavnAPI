import { z } from 'zod';
export declare const LyricsModel: z.ZodObject<{
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
}>;
export declare const LyricsAPIResponseModel: z.ZodObject<{
    lyrics: z.ZodString;
    lyrics_copyright: z.ZodString;
    snippet: z.ZodString;
}, "strip", z.ZodTypeAny, {
    lyrics: string;
    snippet: string;
    lyrics_copyright: string;
}, {
    lyrics: string;
    snippet: string;
    lyrics_copyright: string;
}>;
