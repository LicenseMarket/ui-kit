import { type ReactNode } from "react";
type EmojiToolbarDropdownProps = {
    children: ReactNode;
    control: ReactNode;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};
export declare function EmojiToolbarDropdown({ children, control, isOpen, setIsOpen, }: EmojiToolbarDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
