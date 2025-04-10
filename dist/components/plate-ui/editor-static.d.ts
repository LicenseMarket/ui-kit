import type { VariantProps } from "class-variance-authority";
import { type PlateStaticProps } from "@udecode/plate-common";
export declare const editorVariants: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "default" | "none" | "select" | "demo" | "ai" | "aiChat" | "fullWidth" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function EditorStatic({ children, className, variant, ...props }: PlateStaticProps & VariantProps<typeof editorVariants>): import("react/jsx-runtime").JSX.Element;
