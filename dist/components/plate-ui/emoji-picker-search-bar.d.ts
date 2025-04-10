import type { ReactNode } from "react";
import type { UseEmojiPickerType } from "@udecode/plate-emoji/react";
export type EmojiPickerSearchBarProps = {
    children: ReactNode;
} & Pick<UseEmojiPickerType, "i18n" | "searchValue" | "setSearch">;
export declare function EmojiPickerSearchBar({ children, i18n, searchValue, setSearch, }: EmojiPickerSearchBarProps): import("react/jsx-runtime").JSX.Element;
