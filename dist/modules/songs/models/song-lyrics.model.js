"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LyricsAPIResponseModel = exports.LyricsModel = void 0;
const zod_1 = require("zod");
exports.LyricsModel = zod_1.z.object({
    lyrics: zod_1.z.string(),
    copyright: zod_1.z.string(),
    snippet: zod_1.z.string()
});
exports.LyricsAPIResponseModel = zod_1.z.object({
    lyrics: zod_1.z.string(),
    lyrics_copyright: zod_1.z.string(),
    snippet: zod_1.z.string()
});
