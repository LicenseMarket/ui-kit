import { AxiosRequestConfig, AxiosResponse } from "axios";
export declare const getToken: () => string | null;
interface ApiOpts {
    baseURL?: string;
    headers?: any;
}
declare class Api {
    private xhr;
    private maxRetries;
    private retryDelay;
    constructor(opts?: ApiOpts);
    private handleErr;
    private handleRes;
    private retryRequest;
    get(url: string, params?: any): Promise<AxiosResponse>;
    post(url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
    put(url: string, params?: any): Promise<AxiosResponse>;
    patch(url: string, params?: any): Promise<AxiosResponse>;
    delete(url: string, params?: any): Promise<AxiosResponse>;
}
export default Api;
