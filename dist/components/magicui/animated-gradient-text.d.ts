import { ComponentPropsWithoutRef, ReactNode } from "react";
export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"div"> {
    children: ReactNode;
}
export declare function AnimatedGradientText({ children, className, ...props }: AnimatedGradientTextProps): import("react/jsx-runtime").JSX.Element;
