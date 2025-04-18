import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
export declare const TooltipProvider: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipProviderProps & React.RefAttributes<never>>;
export declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
export declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const TooltipPortal: React.FC<TooltipPrimitive.TooltipPortalProps>;
export declare const TooltipContent: React.ForwardRefExoticComponent<Omit<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare function withTooltip<T extends React.ComponentType<any> | keyof HTMLElementTagNameMap>(Component: T): React.ForwardRefExoticComponent<React.PropsWithoutRef<{
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, "children">;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>, "children">;
    tooltip?: React.ReactNode;
} & React.PropsWithoutRef<React.ComponentProps<T>> & Omit<TooltipPrimitive.TooltipProviderProps, "children">> & React.RefAttributes<React.ComponentRef<T>>>;
