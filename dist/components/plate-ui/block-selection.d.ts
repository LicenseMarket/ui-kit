import React from "react";
import { type VariantProps } from "class-variance-authority";
export declare const blockSelectionVariants: (props?: ({
    active?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function BlockSelection({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof blockSelectionVariants>): import("react/jsx-runtime").JSX.Element | null;
