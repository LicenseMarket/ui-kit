import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import Button from "./Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "../../lib/utils";

interface SelectItem {
  value: string;
  label: string;
}

interface Props {
  items: SelectItem[];
  placeholder?: string;
  hasSearch?: boolean;
  className?: string;
  isMultiSelect?: boolean;
  onChange?: (selected: SelectItem[]) => void;
}

const ComboboxDemo = ({
  items,
  placeholder = "جستجو کنید...",
  hasSearch = false,
  className = "",
  isMultiSelect = false,
  onChange,
}: Props) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<SelectItem[]>([]);

  const handleSelect = (currentValue: string) => {
    const item = items.find((i) => i.value === currentValue);
    if (!item) return;

    let newSelected: SelectItem[];

    if (isMultiSelect) {
      const isSelected = selected.some((sel) => sel.value === currentValue);
      newSelected = isSelected
        ? selected.filter((sel) => sel.value !== currentValue)
        : [...selected, item];
    } else {
      newSelected = [item];
    }

    setSelected(newSelected);
    onChange?.(newSelected);

    if (!isMultiSelect) {
      setOpen(false);
    }
  };

  const getDisplayValue = () => {
    if (selected.length === 0) return "انتخاب کنید";
    if (selected.length === 1) return selected[0].label;
    return `${selected.length} مورد انتخاب شده`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {getDisplayValue()}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          {hasSearch && (
            <CommandInput placeholder={placeholder} className="h-9" />
          )}
          <CommandList>
            <CommandEmpty>موردی یافت نشد</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={handleSelect}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selected.some((sel) => sel.value === item.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboboxDemo;
