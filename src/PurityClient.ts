import type { ApiClient, QueryParams } from "./types";
import axios, { CreateAxiosDefaults, type AxiosRequestConfig, type AxiosResponse } from "axios";
import qs from "qs";

export class PurityClient {
    private client: ApiClient;

    constructor(baseURL: string, config: Omit<CreateAxiosDefaults, "baseURL"> = {}) {
        this.client = axios.create({ baseURL, ...config });
    }

    protected buildQueryString(params: QueryParams): string {
        return qs.stringify(params, { encodeValuesOnly: true });
    }

    async get<T = any, R = AxiosResponse<T>, D = any>(url: string, params: QueryParams = {}, config?: AxiosRequestConfig<D>): Promise<R> {
        const queryString = this.buildQueryString(params);
        return this.client.get<T, R, D>(`${url}?${queryString}`, config);
    }

    async post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.client.post<T, R, D>(url, data, config);
    }

    async put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.client.put<T, R, D>(url, data, config);
    }

    async delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.client.delete<T, R, D>(url, config);
    }
}
