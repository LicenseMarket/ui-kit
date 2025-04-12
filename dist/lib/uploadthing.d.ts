import type { OurFileRouter } from "src/app/api/uploadthing/route";
import type { ClientUploadedFileData, UploadFilesOptions } from "uploadthing/types";
export interface UploadedFile<T = unknown> extends ClientUploadedFileData<T> {
}
interface UseUploadFileProps extends Pick<UploadFilesOptions<OurFileRouter, keyof OurFileRouter>, "headers" | "onUploadBegin" | "onUploadProgress" | "skipPolling"> {
    onUploadComplete?: (file: UploadedFile) => void;
    onUploadError?: (error: unknown) => void;
}
export declare function useUploadFile({ onUploadComplete, onUploadError, ...props }?: UseUploadFileProps): {
    isUploading: boolean;
    progress: number;
    uploadFile: (file: File) => Promise<UploadedFile<unknown> | undefined>;
    uploadedFile: UploadedFile<unknown> | undefined;
    uploadingFile: File | undefined;
};
export declare const uploadFiles: <TEndpoint extends "editorUploader">(slug: import("uploadthing/types").EndpointArg<{
    editorUploader: import("uploadthing/internal/types").Uploader<{
        _routeOptions: import("@uploadthing/shared").RouteOptions;
        _input: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _metadata: {};
        _middlewareArgs: {
            req: NextRequest;
            res: undefined;
            event: undefined;
        };
        _errorShape: import("@uploadthing/shared").Json;
        _errorFn: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _output: {
            file: {
                readonly size: number;
                readonly name: string;
                readonly type: string;
                readonly key: string;
                readonly url: string;
                readonly lastModified?: number | undefined;
                readonly customId: string | null;
                readonly appUrl: string;
                readonly fileHash: string;
            };
        };
    }>;
}, TEndpoint>, opts: Omit<UploadFilesOptions<{
    editorUploader: import("uploadthing/internal/types").Uploader<{
        _routeOptions: import("@uploadthing/shared").RouteOptions;
        _input: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _metadata: {};
        _middlewareArgs: {
            req: NextRequest;
            res: undefined;
            event: undefined;
        };
        _errorShape: import("@uploadthing/shared").Json;
        _errorFn: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _output: {
            file: {
                readonly size: number;
                readonly name: string;
                readonly type: string;
                readonly key: string;
                readonly url: string;
                readonly lastModified?: number | undefined;
                readonly customId: string | null;
                readonly appUrl: string;
                readonly fileHash: string;
            };
        };
    }>;
}, TEndpoint>, keyof import("uploadthing/types").GenerateUploaderOptions>) => Promise<ClientUploadedFileData<import("uploadthing/types").inferEndpointOutput<{
    editorUploader: import("uploadthing/internal/types").Uploader<{
        _routeOptions: import("@uploadthing/shared").RouteOptions;
        _input: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _metadata: {};
        _middlewareArgs: {
            req: NextRequest;
            res: undefined;
            event: undefined;
        };
        _errorShape: import("@uploadthing/shared").Json;
        _errorFn: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _output: {
            file: {
                readonly size: number;
                readonly name: string;
                readonly type: string;
                readonly key: string;
                readonly url: string;
                readonly lastModified?: number | undefined;
                readonly customId: string | null;
                readonly appUrl: string;
                readonly fileHash: string;
            };
        };
    }>;
}[TEndpoint]>>[]>, useUploadThing: <TEndpoint extends "editorUploader">(endpoint: import("uploadthing/types").EndpointArg<{
    editorUploader: import("uploadthing/internal/types").Uploader<{
        _routeOptions: import("@uploadthing/shared").RouteOptions;
        _input: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _metadata: {};
        _middlewareArgs: {
            req: NextRequest;
            res: undefined;
            event: undefined;
        };
        _errorShape: import("@uploadthing/shared").Json;
        _errorFn: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _output: {
            file: {
                readonly size: number;
                readonly name: string;
                readonly type: string;
                readonly key: string;
                readonly url: string;
                readonly lastModified?: number | undefined;
                readonly customId: string | null;
                readonly appUrl: string;
                readonly fileHash: string;
            };
        };
    }>;
}, TEndpoint>, opts?: import("@uploadthing/react").UseUploadthingProps<{
    editorUploader: import("uploadthing/internal/types").Uploader<{
        _routeOptions: import("@uploadthing/shared").RouteOptions;
        _input: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _metadata: {};
        _middlewareArgs: {
            req: NextRequest;
            res: undefined;
            event: undefined;
        };
        _errorShape: import("@uploadthing/shared").Json;
        _errorFn: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _output: {
            file: {
                readonly size: number;
                readonly name: string;
                readonly type: string;
                readonly key: string;
                readonly url: string;
                readonly lastModified?: number | undefined;
                readonly customId: string | null;
                readonly appUrl: string;
                readonly fileHash: string;
            };
        };
    }>;
}, TEndpoint, import("uploadthing/types").inferEndpointOutput<{
    editorUploader: import("uploadthing/internal/types").Uploader<{
        _routeOptions: import("@uploadthing/shared").RouteOptions;
        _input: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _metadata: {};
        _middlewareArgs: {
            req: NextRequest;
            res: undefined;
            event: undefined;
        };
        _errorShape: import("@uploadthing/shared").Json;
        _errorFn: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _output: {
            file: {
                readonly size: number;
                readonly name: string;
                readonly type: string;
                readonly key: string;
                readonly url: string;
                readonly lastModified?: number | undefined;
                readonly customId: string | null;
                readonly appUrl: string;
                readonly fileHash: string;
            };
        };
    }>;
}[TEndpoint]>> | undefined) => {
    readonly startUpload: (...args: undefined extends import("uploadthing/types").inferEndpointInput<{
        editorUploader: import("uploadthing/internal/types").Uploader<{
            _routeOptions: import("@uploadthing/shared").RouteOptions;
            _input: "unsetMarker" & {
                __brand: "unsetMarker";
            };
            _metadata: {};
            _middlewareArgs: {
                req: NextRequest;
                res: undefined;
                event: undefined;
            };
            _errorShape: import("@uploadthing/shared").Json;
            _errorFn: "unsetMarker" & {
                __brand: "unsetMarker";
            };
            _output: {
                file: {
                    readonly size: number;
                    readonly name: string;
                    readonly type: string;
                    readonly key: string;
                    readonly url: string;
                    readonly lastModified?: number | undefined;
                    readonly customId: string | null;
                    readonly appUrl: string;
                    readonly fileHash: string;
                };
            };
        }>;
    }[TEndpoint]> ? [files: File[], input?: (import("uploadthing/types").inferEndpointInput<{
        editorUploader: import("uploadthing/internal/types").Uploader<{
            _routeOptions: import("@uploadthing/shared").RouteOptions;
            _input: "unsetMarker" & {
                __brand: "unsetMarker";
            };
            _metadata: {};
            _middlewareArgs: {
                req: NextRequest;
                res: undefined;
                event: undefined;
            };
            _errorShape: import("@uploadthing/shared").Json;
            _errorFn: "unsetMarker" & {
                __brand: "unsetMarker";
            };
            _output: {
                file: {
                    readonly size: number;
                    readonly name: string;
                    readonly type: string;
                    readonly key: string;
                    readonly url: string;
                    readonly lastModified?: number | undefined;
                    readonly customId: string | null;
                    readonly appUrl: string;
                    readonly fileHash: string;
                };
            };
        }>;
    }[TEndpoint]> & undefined) | undefined] : [files: File[], input: import("uploadthing/types").inferEndpointInput<{
        editorUploader: import("uploadthing/internal/types").Uploader<{
            _routeOptions: import("@uploadthing/shared").RouteOptions;
            _input: "unsetMarker" & {
                __brand: "unsetMarker";
            };
            _metadata: {};
            _middlewareArgs: {
                req: NextRequest;
                res: undefined;
                event: undefined;
            };
            _errorShape: import("@uploadthing/shared").Json;
            _errorFn: "unsetMarker" & {
                __brand: "unsetMarker";
            };
            _output: {
                file: {
                    readonly size: number;
                    readonly name: string;
                    readonly type: string;
                    readonly key: string;
                    readonly url: string;
                    readonly lastModified?: number | undefined;
                    readonly customId: string | null;
                    readonly appUrl: string;
                    readonly fileHash: string;
                };
            };
        }>;
    }[TEndpoint]>]) => Promise<ClientUploadedFileData<import("uploadthing/types").inferEndpointOutput<{
        editorUploader: import("uploadthing/internal/types").Uploader<{
            _routeOptions: import("@uploadthing/shared").RouteOptions;
            _input: "unsetMarker" & {
                __brand: "unsetMarker";
            };
            _metadata: {};
            _middlewareArgs: {
                req: NextRequest;
                res: undefined;
                event: undefined;
            };
            _errorShape: import("@uploadthing/shared").Json;
            _errorFn: "unsetMarker" & {
                __brand: "unsetMarker";
            };
            _output: {
                file: {
                    readonly size: number;
                    readonly name: string;
                    readonly type: string;
                    readonly key: string;
                    readonly url: string;
                    readonly lastModified?: number | undefined;
                    readonly customId: string | null;
                    readonly appUrl: string;
                    readonly fileHash: string;
                };
            };
        }>;
    }[TEndpoint]>>[] | undefined>;
    readonly isUploading: boolean;
    readonly routeConfig: import("@uploadthing/shared").ExpandedRouteConfig | undefined;
};
export declare function getErrorMessage(err: unknown): string;
export declare function showErrorToast(err: unknown): string | number;
export {};
