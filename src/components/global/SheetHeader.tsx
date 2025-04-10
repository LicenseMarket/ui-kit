import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";

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

const SheetHeader: React.FC<SheetHeaderProps> = ({
  title = "",
  buttonTitle = "",
  dropdownTitle = "",
  text,
  side,
  copyText,
  buttonProps = {
    children: undefined,
  },
  menuTriggerProps = {},
  menuIconProps = {},
  renderMenu,
  className,
}) => {
  return (
    <div
      className={`${className} bg-background rtl flex h-[70px] justify-between border-b p-4 `}
    >
      <div className="flex items-center gap-2">
        <h3 className="text-right text-lg font-semibold leading-8">{title}</h3>
        {copyText && <div className="text-sm text-gray-400">{copyText}</div>}
      </div>
      <div className="flex justify-end">
        {buttonTitle ? (
          <Button className={renderMenu && "ml-3"} {...buttonProps}>
            {buttonTitle}
          </Button>
        ) : buttonProps?.children ? (
          buttonProps.children
        ) : null}

        {renderMenu && (
          <DropdownMenu>
            <DropdownMenuTrigger {...menuTriggerProps}>
              <DotsVerticalIcon width={22} height={22} {...menuIconProps} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rtl" side={side}>
              {text && (
                <>
                  <DropdownMenuLabel>{dropdownTitle}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </>
              )}
              {renderMenu && renderMenu()}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default SheetHeader;
