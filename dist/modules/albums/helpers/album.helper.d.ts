import type { AlbumAPIResponseModel, AlbumModel } from '#modules/albums/models';
import type { z } from 'zod';
export declare const createAlbumPayload: (album: z.infer<typeof AlbumAPIResponseModel>) => z.infer<typeof AlbumModel>;
