import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
declare const Command: React.ForwardRefExoticComponent<any>;
type CommandDialogProps = DialogProps & {
    className?: string;
};
declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => import("react/jsx-runtime").JSX.Element;
declare const CommandInput: React.ForwardRefExoticComponent<any>;
declare const CommandList: React.ForwardRefExoticComponent<any>;
declare const CommandEmpty: React.ForwardRefExoticComponent<any>;
declare const CommandGroup: React.ForwardRefExoticComponent<any>;
declare const CommandSeparator: React.ForwardRefExoticComponent<any>;
declare const CommandItem: React.ForwardRefExoticComponent<any>;
declare const CommandShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
