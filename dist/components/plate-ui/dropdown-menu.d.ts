import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
export declare const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
export declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const DropdownMenuGroup: React.ForwardRefExoticComponent<{
    label?: React.ReactNode;
} & Omit<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
export declare const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
export declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<{
    label?: React.ReactNode;
} & Omit<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuSubTrigger: any;
export declare const DropdownMenuSubContent: any;
export declare const DropdownMenuContent: any;
export declare const DropdownMenuItem: any;
export declare const DropdownMenuCheckboxItem: any;
export declare const DropdownMenuRadioItem: any;
export declare const DropdownMenuLabel: any;
export declare const DropdownMenuSeparator: any;
export declare const DropdownMenuShortcut: any;
export declare const useOpenState: () => {
    open: boolean;
    onOpenChange: (_value?: boolean) => void;
};
