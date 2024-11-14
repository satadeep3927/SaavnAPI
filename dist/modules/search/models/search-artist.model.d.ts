import { z } from 'zod';
export declare const SearchArtistAPIResponseModel: z.ZodObject<{
    total: z.ZodNumber;
    start: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        id: z.ZodString;
        ctr: z.ZodNumber;
        entity: z.ZodNumber;
        image: z.ZodString;
        role: z.ZodString;
        perma_url: z.ZodString;
        type: z.ZodString;
        mini_obj: z.ZodBoolean;
        isRadioPresent: z.ZodBoolean;
        is_followed: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        perma_url: string;
        image: string;
        name: string;
        role: string;
        mini_obj: boolean;
        isRadioPresent: boolean;
        is_followed: boolean;
        ctr: number;
        entity: number;
    }, {
        type: string;
        id: string;
        perma_url: string;
        image: string;
        name: string;
        role: string;
        mini_obj: boolean;
        isRadioPresent: boolean;
        is_followed: boolean;
        ctr: number;
        entity: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    total: number;
    results: {
        type: string;
        id: string;
        perma_url: string;
        image: string;
        name: string;
        role: string;
        mini_obj: boolean;
        isRadioPresent: boolean;
        is_followed: boolean;
        ctr: number;
        entity: number;
    }[];
    start: number;
}, {
    total: number;
    results: {
        type: string;
        id: string;
        perma_url: string;
        image: string;
        name: string;
        role: string;
        mini_obj: boolean;
        isRadioPresent: boolean;
        is_followed: boolean;
        ctr: number;
        entity: number;
    }[];
    start: number;
}>;
export declare const SearchArtistModel: z.ZodObject<{
    total: z.ZodNumber;
    start: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        role: z.ZodString;
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
    }, "strip", z.ZodTypeAny, {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        role: string;
    }, {
        url: string;
        type: string;
        id: string;
        image: {
            quality: string;
            url: string;
        }[];
        name: string;
        role: string;
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
        name: string;
        role: string;
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
        name: string;
        role: string;
    }[];
    start: number;
}>;
