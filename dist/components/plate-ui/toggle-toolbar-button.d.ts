import React from "react";
export declare const ToggleToolbarButton: React.ForwardRefExoticComponent<Omit<{
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<React.ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipContentProps & React.RefAttributes<HTMLDivElement>>>, "children">;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<React.FC<import("@radix-ui/react-tooltip").TooltipProps>>, "children">;
    tooltip?: React.ReactNode;
} & Omit<{
    isDropdown?: boolean;
    pressed?: boolean;
} & Omit<Omit<Omit<import("@radix-ui/react-toolbar").ToolbarToggleItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("class-variance-authority").VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>, "ref">, "asChild" | "value"> & import("class-variance-authority").VariantProps<(props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>, "ref"> & Omit<import("@radix-ui/react-tooltip").TooltipProviderProps, "children"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<never>>;
