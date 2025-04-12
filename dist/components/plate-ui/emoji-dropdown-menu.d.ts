import React from "react";
import { type EmojiDropdownMenuOptions } from "@udecode/plate-emoji/react";
import { ToolbarButton } from "./toolbar";
type EmojiDropdownMenuProps = {
    options?: EmojiDropdownMenuOptions;
} & React.ComponentPropsWithoutRef<typeof ToolbarButton>;
export declare function EmojiDropdownMenu({ options, ...props }: EmojiDropdownMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
