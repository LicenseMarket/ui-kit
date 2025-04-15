declare class Storage {
    private static instance;
    private constructor();
    static getInstance(): Storage;
    set(key: string, value: any): void;
    get<T>(key: string, defaultValue?: T | null): T | null;
    remove(key: string): void;
    clear(): void;
    exists(key: string): boolean;
}
declare const _default: Storage;
export default _default;
