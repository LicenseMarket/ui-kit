// import React from "react";
// import {
//   Command,
//   CommandList,
//   CommandEmpty,
//   CommandGroup,
//   CommandItem,
// } from "../ui/command";
// import {
//   ArrowLeft,
//   CheckIcon,
//   SearchIcon,
//   Undo2,
// } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { isEqual } from "lodash";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import Button from "./Button";
// import { Separator } from "../ui/separator";
// import { Badge } from "../ui/badge";
// import { Tooltip, TooltipProvider } from "../ui/tooltip";
// import { Input } from "../ui/input";
// import { cn } from "../../lib/utils";
//
// export interface SelectType {
//   value: string;
//   label: string;
//   isVariant?: boolean;
//   children?: SelectType[];
//   subtitle?: string;
//   avatar?: string;
//   tags?: string[];
//   disabled?: boolean;
// }
//
// interface Props {
//   title: string;
//   placeholder?: string;
//   width?: string;
//   items: SelectType[];
//   customList?: any;
//   defaultValue?: SelectType[];
//   onSearch: (value: string) => void;
//   onSubmit?: () => void;
//   onSelect: (value: SelectType[]) => void;
//   actions?: JSX.Element;
//   className?: string;
//   numbersInRow?: number;
//   icon?: JSX.Element;
//   text?: string;
// }
//
//
//
// export interface SelectType {
//   value: string;
//   label: string;
//   isVariant?: boolean;
//   children?: SelectType[];
//   subtitle?: string;
//   avatar?: string;
//   tags?: string[];
//   disabled?: boolean;
// }
//
// interface Props {
//   title: string;
//   placeholder?: string;
//   width?: string;
//   items: SelectType[];
//   customList?: any;
//   defaultValue?: SelectType[];
//   onSearch: (value: string) => void;
//   onSubmit?: () => void;
//   onSelect: (value: SelectType) => void;
//   actions?: JSX.Element;
//   className?: string;
//   icon?: JSX.Element;
//   text?: string;
// }
//
// const SelectComponent = ({
//                            defaultValue,
//                            placeholder,
//                            title,
//                            items,
//                            onSearch,
//                            onSubmit,
//                            onSelect,
//                            customList,
//                            actions,
//                            width,
//                            className,
//                            icon,
//                            text,
//                          }: Props) => {
//   const [selected, setSelected] = useState<SelectType | null>(defaultValue || null);
//   const [open, setOpen] = useState(false);
//   const firstInit = useRef(true);
//
//   useEffect(() => {
//     if (firstInit.current) {
//       firstInit.current = false;
//     } else if (defaultValue) {
//       setSelected(defaultValue);
//     } else {
//       setSelected(null);
//     }
//   }, [defaultValue]);
//
//   return (
//     <>
//       <p className="mb-2 text-[16px]">{title}</p>
//       <Popover open={open} onOpenChange={() => setOpen(!open)}>
//         <PopoverTrigger>
//           <Button
//             onClick={() => setOpen(!open)}
//             danger={!!selected}
//             variant="outline"
//             className="h-auto items-center justify-start !py-2"
//           >
//             <div className="flex items-center justify-between gap-2">
//               {icon}
//               {text}
//             </div>
//             {selected && (
//               <div className="flex flex-wrap gap-1 px-4">
//                 <Badge>{selected.label}</Badge>
//               </div>
//             )}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent
//           className={`w-[567px] p-2 ${className}`}
//           style={{
//             width,
//           }}
//           align="start"
//         >
//           <SelectContent
//             actions={actions}
//             items={items}
//             defaultValue={selected}
//             customList={customList}
//             placeholder={placeholder}
//             onSelect={(_selected) => {
//               onSelect(_selected);
//               setSelected(_selected);
//             }}
//             onSearch={onSearch}
//             onSubmit={() => {
//               if (onSubmit) {
//                 onSubmit();
//               }
//               setOpen(false);
//             }}
//           />
//         </PopoverContent>
//       </Popover>
//     </>
//   );
// };
//
// interface SelectContentProps {
//   items: SelectType[];
//   placeholder?: string;
//   customList?: JSX.Element[];
//   defaultValue?: SelectType | null;
//   isSearched?: boolean;
//   onSearch: (value: string) => void;
//   onSelect: (value: SelectType) => void;
//   onSubmit: () => void;
//   onReset?: () => void;
//   from?: "table" | "filter";
//   actions?: JSX.Element;
//   hasSearch?: boolean;
// }
//
// export const SelectContent = ({
//                                 items,
//                                 placeholder,
//                                 defaultValue,
//                                 onSearch,
//                                 onSelect,
//                                 onSubmit,
//                                 onReset,
//                                 customList,
//                                 isSearched,
//                                 actions,
//                                 hasSearch,
//                               }: SelectContentProps) => {
//   const [selected, setSelected] = useState<SelectType | null>(defaultValue || null);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//
//   const handleSelect = (item: SelectType) => {
//     setSelected(item);
//   };
//
//   const handleReset = () => {
//     setSelected(null);
//     setSearch("");
//     onSearch("");
//     setLoading(false);
//     if (onReset) {
//       onReset();
//     }
//   };
//
//   useEffect(() => {
//     if (selected) {
//       onSelect(selected);
//     }
//   }, [selected, onSelect]);
//
//   useEffect(() => {
//     if (defaultValue && !isEqual(defaultValue, selected)) {
//       setSelected(defaultValue);
//     }
//   }, [isSearched]);
//
//   useEffect(() => {
//     if (items.length) setLoading(false);
//   }, [items]);
//
//   return (
//     <div className="relative z-10 grid gap-2">
//       {hasSearch && (
//         <>
//           <TooltipProvider>
//             <Tooltip>
//               <div className="flex items-center gap-0 pr-2">
//                 <SearchIcon className="size-5" />
//                 <Input
//                   autoFocus
//                   value={search}
//                   onInput={(e: any) => {
//                     const value = e.target.value;
//                     setSearch(value);
//                   }}
//                   onKeyDown={(e) => {
//                     if (e.code == "Enter") {
//                       const value = e.target.value;
//                       setLoading(true);
//                       onSearch(value);
//                     }
//                   }}
//                   className="select-input h-8 w-full"
//                   placeholder={placeholder || "جستجو..."}
//                 />
//               </div>
//             </Tooltip>
//           </TooltipProvider>
//           <Separator />
//         </>
//       )}
//
//       <div
//         className={`flex max-h-[350px] flex-col overflow-y-auto ${
//           !items.length ? "items-center" : ""
//         }`}
//       >
//         {customList ? (
//           customList
//         ) : items.length ? (
//           <Command>
//             <CommandList>
//               <CommandEmpty>دیتایی پیدا نشد!</CommandEmpty>
//               <CommandGroup>
//                 {items.map((item: SelectType, index: number) => (
//                   <CommandItem
//                     key={index}
//                     value={item.value}
//                     onSelect={() => {
//                       handleSelect(item);
//                     }}
//                   >
//                     <CheckIcon
//                       className={cn(
//                         selected?.value === item.value
//                           ? "opacity-100"
//                           : "opacity-0"
//                       )}
//                     />
//                     {item.label}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         ) : (
//           <img
//             src="https://portal-dev-provision.darkube.app/images/empty.jpg"
//             alt="empty"
//             width={350}
//           />
//         )}
//       </div>
//       <Separator />
//       <div className="flex justify-between gap-2">
//         <div>
//           <Button
//             onClick={() => onSubmit()}
//             variant="default"
//             className=""
//             iconPosition="start"
//             icon={<ArrowLeft className="h-4 w-4" />}
//           >
//             تایید
//           </Button>
//           <Button
//             onClick={handleReset}
//             variant="link"
//             iconPosition="start"
//             icon={<Undo2 className="h-4 w-4" />}
//           >
//             ریست
//           </Button>
//         </div>
//         {actions && <div>{actions}</div>}
//       </div>
//     </div>
//   );
// };
//
// export default SelectComponent;
