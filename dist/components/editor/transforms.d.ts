import type { PlateEditor } from "@udecode/plate-common/react";
import { type TElement } from "@udecode/plate-common";
import { Path } from "slate";
export declare const STRUCTURAL_TYPES: string[];
export declare const insertBlock: (editor: PlateEditor, type: string) => void;
export declare const insertInlineElement: (editor: PlateEditor, type: string) => void;
export declare const setBlockType: (editor: PlateEditor, type: string, { at }?: {
    at?: Path;
}) => void;
export declare const getBlockType: (block: TElement) => string;
