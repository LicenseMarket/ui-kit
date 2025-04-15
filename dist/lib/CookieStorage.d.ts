export declare class CookieStorage {
    private static instance;
    private constructor();
    static getInstance(): CookieStorage;
    static set(name: string, value: string, days?: number): void;
    static get(name: string): string | null;
    static delete(name: string): void;
    static exists(name: string): boolean;
    static getAll(): {
        [key: string]: string;
    };
    static clear(): void;
}
declare const _default: CookieStorage;
export default _default;
