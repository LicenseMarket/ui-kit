declare const checkPermission: (resource: string, action: "read" | "create" | "update" | "delete") => boolean;
export { checkPermission };
