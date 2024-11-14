import type { Endpoints } from "#common/constants";
type EndpointValue = (typeof Endpoints)[keyof typeof Endpoints];
export declare const useFetch: <T>({ endpoint, params, context, }: {
    endpoint: EndpointValue;
    params: Record<string, string | number>;
    context?: "android" | "web6dot0";
}) => Promise<{
    data: T;
    ok: Response["ok"];
}>;
export {};
