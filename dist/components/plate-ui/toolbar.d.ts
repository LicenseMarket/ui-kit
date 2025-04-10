import React from "react";
import { type VariantProps } from "class-variance-authority";
export declare const Toolbar: any;
export declare const ToolbarToggleGroup: any;
export declare const ToolbarLink: any;
export declare const ToolbarSeparator: any;
declare const ToolbarButton: React.ForwardRefExoticComponent<Omit<{
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<React.ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipContentProps & React.RefAttributes<HTMLDivElement>>>, "children">;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<React.FC<import("@radix-ui/react-tooltip").TooltipProps>>, "children">;
    tooltip?: React.ReactNode;
} & Omit<Omit<{
    isDropdown?: boolean;
    pressed?: boolean;
} & Omit<any, "asChild" | "value"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string>, "ref"> & React.RefAttributes<any>, "ref"> & Omit<import("@radix-ui/react-tooltip").TooltipProviderProps, "children">, "ref"> & React.RefAttributes<any>>;
export { ToolbarButton };
export declare const ToolbarSplitButton: React.ForwardRefExoticComponent<Omit<Omit<Omit<{
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<React.ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipContentProps & React.RefAttributes<HTMLDivElement>>>, "children">;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<React.FC<import("@radix-ui/react-tooltip").TooltipProps>>, "children">;
    tooltip?: React.ReactNode;
} & Omit<Omit<{
    isDropdown?: boolean;
    pressed?: boolean;
} & Omit<any, "asChild" | "value"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string>, "ref"> & React.RefAttributes<any>, "ref"> & Omit<import("@radix-ui/react-tooltip").TooltipProviderProps, "children">, "ref"> & React.RefAttributes<any>, "ref">, "ref"> & React.RefAttributes<any>>;
export declare const ToolbarSplitButtonPrimary: React.ForwardRefExoticComponent<Omit<{
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<React.ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipContentProps & React.RefAttributes<HTMLDivElement>>>, "children">;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<React.FC<import("@radix-ui/react-tooltip").TooltipProps>>, "children">;
    tooltip?: React.ReactNode;
} & Omit<Omit<Omit<any, "value">, "ref"> & React.RefAttributes<any>, "ref"> & Omit<import("@radix-ui/react-tooltip").TooltipProviderProps, "children">, "ref"> & React.RefAttributes<any>>;
export declare const ToolbarSplitButtonSecondary: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export declare const ToolbarToggleItem: any;
export declare const ToolbarGroup: any;
