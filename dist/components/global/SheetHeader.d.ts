import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
export interface SheetHeaderProps {
    title?: string;
    buttonTitle?: string;
    dropdownTitle?: string;
    buttonProps?: React.ComponentProps<typeof Button>;
    menuTriggerProps?: React.ComponentProps<typeof DropdownMenuTrigger>;
    menuIconProps?: React.ComponentProps<typeof DotsVerticalIcon>;
    renderMenu?: () => ReactNode;
    className?: string;
    text?: string;
    side?: "right" | "top" | "bottom" | "left";
    copyText?: any;
}
declare const SheetHeader: React.FC<SheetHeaderProps>;
export default SheetHeader;
