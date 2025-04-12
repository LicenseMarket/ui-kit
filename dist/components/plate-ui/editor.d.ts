import React from "react";
import type { PlateContentProps } from "@udecode/plate-common/react";
import type { VariantProps } from "class-variance-authority";
declare const editorContainerVariants: (props?: ({
    variant?: "default" | "select" | "demo" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const EditorContainer: {
    ({ className, variant, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof editorContainerVariants>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const editorVariants: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "default" | "none" | "select" | "demo" | "ai" | "aiChat" | "fullWidth" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type EditorProps = PlateContentProps & VariantProps<typeof editorVariants>;
export declare const Editor: React.ForwardRefExoticComponent<Omit<import("@udecode/slate-react").TEditableProps, "decorate"> & {
    autoFocusOnEditable?: boolean;
    decorate?: import("@udecode/plate-core/react").PlateStoreState["decorate"];
    disabled?: boolean;
    renderEditable?: (editable: React.ReactElement) => React.ReactNode;
} & VariantProps<(props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "default" | "none" | "select" | "demo" | "ai" | "aiChat" | "fullWidth" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;
export {};
