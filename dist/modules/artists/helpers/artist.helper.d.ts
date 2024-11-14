import type { ArtistAPIResponseModel, ArtistMapAPIResponseModel, ArtistMapModel, ArtistModel } from '#modules/artists/models';
import type { z } from 'zod';
export declare const createArtistPayload: (artist: z.infer<typeof ArtistAPIResponseModel>) => z.infer<typeof ArtistModel>;
export declare const createArtistMapPayload: (artist: z.infer<typeof ArtistMapAPIResponseModel>) => z.infer<typeof ArtistMapModel>;
