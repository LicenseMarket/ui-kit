import React from "react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import { type VariantProps } from "class-variance-authority";
export declare const Toolbar: React.ForwardRefExoticComponent<Omit<ToolbarPrimitive.ToolbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const ToolbarToggleGroup: React.ForwardRefExoticComponent<(Omit<ToolbarPrimitive.ToolbarToggleGroupSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToolbarPrimitive.ToolbarToggleGroupMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & React.RefAttributes<HTMLDivElement>>;
export declare const ToolbarLink: React.ForwardRefExoticComponent<Omit<ToolbarPrimitive.ToolbarLinkProps & React.RefAttributes<HTMLAnchorElement>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export declare const ToolbarSeparator: React.ForwardRefExoticComponent<Omit<ToolbarPrimitive.ToolbarSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToolbarButton: React.ForwardRefExoticComponent<{
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<React.ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipContentProps & React.RefAttributes<HTMLDivElement>>>, "children">;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<React.FC<import("@radix-ui/react-tooltip").TooltipProps>>, "children">;
    tooltip?: React.ReactNode;
} & Omit<{
    isDropdown?: boolean;
    pressed?: boolean;
} & Omit<Omit<Omit<ToolbarPrimitive.ToolbarToggleItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>, "ref">, "asChild" | "value"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>, "ref"> & Omit<import("@radix-ui/react-tooltip").TooltipProviderProps, "children"> & React.RefAttributes<HTMLButtonElement>>;
export { ToolbarButton };
export declare const ToolbarSplitButton: React.ForwardRefExoticComponent<Omit<{
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<React.ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipContentProps & React.RefAttributes<HTMLDivElement>>>, "children">;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<React.FC<import("@radix-ui/react-tooltip").TooltipProps>>, "children">;
    tooltip?: React.ReactNode;
} & Omit<{
    isDropdown?: boolean;
    pressed?: boolean;
} & Omit<Omit<Omit<ToolbarPrimitive.ToolbarToggleItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>, "ref">, "asChild" | "value"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>, "ref"> & Omit<import("@radix-ui/react-tooltip").TooltipProviderProps, "children"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const ToolbarSplitButtonPrimary: React.ForwardRefExoticComponent<{
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<React.ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipContentProps & React.RefAttributes<HTMLDivElement>>>, "children">;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<React.FC<import("@radix-ui/react-tooltip").TooltipProps>>, "children">;
    tooltip?: React.ReactNode;
} & Omit<Omit<Omit<Omit<ToolbarPrimitive.ToolbarToggleItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>, "ref">, "value"> & React.RefAttributes<HTMLButtonElement>, "ref"> & Omit<import("@radix-ui/react-tooltip").TooltipProviderProps, "children"> & React.RefAttributes<HTMLButtonElement>>;
export declare const ToolbarSplitButtonSecondary: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export declare const ToolbarToggleItem: React.ForwardRefExoticComponent<Omit<ToolbarPrimitive.ToolbarToggleItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export declare const ToolbarGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<never>>;
