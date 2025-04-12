import React, { FC, ReactNode } from "react";
export type RenderChildrenType = ((...params: unknown[]) => ReactNode) | null;
export interface SheetGridItemType {
    render?: RenderChildrenType;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export interface SheetGridProps {
    right: [SheetGridItemType?, SheetGridItemType?];
    left: [SheetGridItemType?, SheetGridItemType?, SheetGridItemType?];
}
export declare const SheetGridCard: FC<{
    children: ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}>;
declare const SheetGrid: FC<SheetGridProps>;
export default SheetGrid;
