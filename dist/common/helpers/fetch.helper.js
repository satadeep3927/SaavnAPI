"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const useFetch = async ({ endpoint, params, context, }) => {
    const url = new URL("https://www.jiosaavn.com/api.php");
    url.searchParams.append("__call", endpoint.toString());
    url.searchParams.append("_format", "json");
    url.searchParams.append("_marker", "0");
    url.searchParams.append("api_version", "4");
    url.searchParams.append("ctx", context || "web6dot0");
    Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])));
    const response = await fetch(url.toString());
    const data = await response.json();
    return { data: data, ok: response.ok };
};
exports.useFetch = useFetch;
