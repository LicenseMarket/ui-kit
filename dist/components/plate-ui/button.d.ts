import React from "react";
import { type VariantProps } from "class-variance-authority";
export declare const buttonVariants: (props?: ({
    isMenu?: boolean | null | undefined;
    size?: "xs" | "sm" | "lg" | "icon" | "none" | "md" | null | undefined;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "inlineLink" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const Button: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    asChild?: boolean;
} & VariantProps<(props?: ({
    isMenu?: boolean | null | undefined;
    size?: "xs" | "sm" | "lg" | "icon" | "none" | "md" | null | undefined;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "inlineLink" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<never>>;
