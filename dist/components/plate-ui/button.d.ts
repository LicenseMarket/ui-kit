import React from "react";
import { type VariantProps } from "class-variance-authority";
export declare const buttonVariants: (props?: ({
    isMenu?: boolean | null | undefined;
    size?: "none" | "xs" | "sm" | "lg" | "icon" | "md" | null | undefined;
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost" | "inlineLink" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const Button: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    asChild?: boolean;
} & VariantProps<(props?: ({
    isMenu?: boolean | null | undefined;
    size?: "none" | "xs" | "sm" | "lg" | "icon" | "md" | null | undefined;
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost" | "inlineLink" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<unknown>>;
