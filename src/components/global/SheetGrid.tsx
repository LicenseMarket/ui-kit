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

export const SheetGridCard: FC<{
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ children, className, onClick }) => {
  return (
    <div
      className={`${className} bg-primary/20 relative flex w-full flex-1 items-center
        rounded-[16px] p-4 text-center dark:bg-[#1E1E21]`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const SheetGrid: FC<SheetGridProps> = ({ left, right }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex w-full">
        <div className="ml-[5px] flex h-[243px] flex-1 flex-col items-center justify-center gap-[10px]">
          {right.map((item, index) => {
            if (!item) return null;

            return (
              <SheetGridCard
                className={`flex-col justify-center gap-[10px] ${ item.onClick && "cursor-pointer" }`}
                key={`right-sheetgrid-item-${index}`}
                onClick={item.onClick}
              >
                {item.render && item.render()}
              </SheetGridCard>
            );
          })}
        </div>
        <div className="mr-[5px] flex flex-1 flex-col items-center justify-center gap-[10px]">
          {left.map((item, index) => {
            if (!item) return null;

            return (
              <SheetGridCard
                className={`justify-between ${ item.onClick && "cursor-pointer" }`}
                key={`left-sheetgrid-item-${index}`}
                onClick={item.onClick}
              >
                {item.render && item.render()}
              </SheetGridCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SheetGrid;
