import * as React from "react";
import Button from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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

const CustomDropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  label,
  items,
  className,
  titleSub,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">{title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={className}>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.children ? (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {item.children.map((subItem, subIndex) => (
                        <DropdownMenuItem key={`${index}-${subIndex}`}>
                          {subItem.label}
                          {subItem.shortcut && (
                            <DropdownMenuShortcut>
                              {subItem.shortcut}
                            </DropdownMenuShortcut>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem>
                  {item.label}
                  {item.shortcut && (
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              )}
            </React.Fragment>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdownMenu;
