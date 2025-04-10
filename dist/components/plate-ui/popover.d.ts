import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
export declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
export declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
export declare const popoverVariants: (props?: ({
    animate?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const PopoverContent: any;
