declare const ourFileRouter: {
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
};
export type OurFileRouter = typeof ourFileRouter;
export declare const GET: (args_0: NextRequest) => Promise<Response>, POST: (args_0: NextRequest) => Promise<Response>;
export {};
