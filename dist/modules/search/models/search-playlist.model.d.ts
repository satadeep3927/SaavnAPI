import { z } from 'zod';
export declare const SearchPlaylistAPIResponseModel: z.ZodObject<{
    total: z.ZodNumber;
    start: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        subtitle: z.ZodString;
        type: z.ZodString;
        image: z.ZodString;
        perma_url: z.ZodString;
        more_info: z.ZodObject<{
            uid: z.ZodString;
            firstname: z.ZodString;
            artist_name: z.ZodAny;
            entity_type: z.ZodString;
            entity_sub_type: z.ZodString;
            video_available: z.ZodBoolean;
            is_dolby_content: z.ZodAny;
            sub_types: z.ZodAny;
            images: z.ZodAny;
            lastname: z.ZodString;
            song_count: z.ZodString;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        }, {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        }>;
        explicit_content: z.ZodString;
        mini_obj: z.ZodBoolean;
        numsongs: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs?: any;
    }, {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs?: any;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    total: number;
    results: {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs?: any;
    }[];
    start: number;
}, {
    total: number;
    results: {
        type: string;
        id: string;
        title: string;
        subtitle: string;
        perma_url: string;
        image: string;
        explicit_content: string;
        more_info: {
            language: string;
            song_count: string;
            uid: string;
            firstname: string;
            entity_type: string;
            entity_sub_type: string;
            video_available: boolean;
            lastname: string;
            is_dolby_content?: any;
            artist_name?: any;
            sub_types?: any;
            images?: any;
        };
        mini_obj: boolean;
        numsongs?: any;
    }[];
    start: number;
}>;
export declare const SearchPlaylistModel: z.ZodObject<{
    total: z.ZodNumber;
    start: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodString;
        image: z.ZodArray<z.ZodObject<{
            quality: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            quality: string;
            url: string;
        }, {
            quality: string;
            url: string;
        }>, "many">;
        url: z.ZodString;
        songCount: z.ZodNullable<z.ZodNumber>;
        language: z.ZodString;
        explicitContent: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        language: string;
        name: string;
        explicitContent: boolean;
        songCount: number | null;
    }, {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        language: string;
        name: string;
        explicitContent: boolean;
        songCount: number | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    total: number;
    results: {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        language: string;
        name: string;
        explicitContent: boolean;
        songCount: number | null;
    }[];
    start: number;
}, {
    total: number;
    results: {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        language: string;
        name: string;
        explicitContent: boolean;
        songCount: number | null;
    }[];
    start: number;
}>;
