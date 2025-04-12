import React from "react";
import { type VariantProps } from "class-variance-authority";
export declare const inputVariants: (props?: ({
    h?: "sm" | "md" | null | undefined;
    variant?: "default" | "ghost" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type InputProps = React.ComponentPropsWithoutRef<"input"> & VariantProps<typeof inputVariants>;
export declare const Input: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & VariantProps<(props?: ({
    h?: "sm" | "md" | null | undefined;
    variant?: "default" | "ghost" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLInputElement>>;
export type FloatingInputProps = InputProps & {
    label: string;
};
export declare function FloatingInput({ id, className, label, ...props }: FloatingInputProps): import("react/jsx-runtime").JSX.Element;
