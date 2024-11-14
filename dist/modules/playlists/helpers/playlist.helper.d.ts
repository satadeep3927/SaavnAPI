import type { PlaylistAPIResponseModel, PlaylistModel } from '#modules/playlists/models';
import type { z } from 'zod';
export declare const createPlaylistPayload: (playlist: z.infer<typeof PlaylistAPIResponseModel>) => z.infer<typeof PlaylistModel>;
