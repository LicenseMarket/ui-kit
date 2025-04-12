import * as React from "react";
interface DropdownSubItem {
    label: string;
    value: string;
    shortcut?: string;
}
interface DropdownItem {
    label: string;
    value: string;
    shortcut?: string;
    children?: DropdownSubItem[];
}
interface DropdownMenuProps {
    title?: string;
    label?: string;
    items?: DropdownItem[];
    titleSub?: string;
    className?: string;
}
declare const CustomDropdownMenu: React.FC<DropdownMenuProps>;
export default CustomDropdownMenu;
