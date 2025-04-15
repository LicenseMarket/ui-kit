import { AxiosRequestConfig, AxiosResponse } from "axios";
interface ApiOpts {
    baseURL?: string;
    headers?: any;
    token?: string;
    tokenKey?: string;
}
declare class Api {
    private xhr;
    private maxRetries;
    private retryDelay;
    constructor(opts?: ApiOpts);
    private handleErr;
    private handleRes;
    private retryRequest;
    setToken(token: string): void;
    get(url: string, params?: any): Promise<AxiosResponse>;
    post(url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    put(url: string, params?: any): Promise<AxiosResponse>;
    patch(url: string, params?: any): Promise<AxiosResponse>;
    delete(url: string, params?: any): Promise<AxiosResponse>;
}
export type { AxiosRequestConfig, AxiosResponse };
export default Api;
