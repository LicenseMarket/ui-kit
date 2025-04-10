declare const useWatcher: (data: any, callback: (err: any, result: any) => void, options?: {
    watchLocalStorage: {
        key: string;
        interval?: number;
    };
}) => void;
export default useWatcher;
