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
export declare const uploadFiles: any, useUploadThing: any;
export declare function getErrorMessage(err: unknown): any;
export declare function showErrorToast(err: unknown): string | number;
export {};
