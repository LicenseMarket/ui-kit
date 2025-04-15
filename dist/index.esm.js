import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as React from 'react';
import React__default, { useState, useEffect, useMemo, Fragment as Fragment$1, useCallback, useRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronLeftIcon, DotsHorizontalIcon, MagnifyingGlassIcon, CheckIcon, DotFilledIcon, ChevronDownIcon, ChevronUpIcon, DotsVerticalIcon, ViewVerticalIcon } from '@radix-ui/react-icons';
import { Loader2, ChevronRight, ChevronLeft, Check, Dot, MoveDiagonal, ChevronsUpDown, CopyIcon, X, CheckIcon as CheckIcon$1, Pencil, Link, Text, ExternalLink, Unlink, ChevronDown, ListOrdered, List, AlignLeftIcon, AlignCenterIcon, AlignRightIcon, AlignJustifyIcon, BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { useFormContext, FormProvider, Controller } from 'react-hook-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import { OTPInput, OTPInputContext } from 'input-otp';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { useTheme as useTheme$1 } from 'next-themes';
import { Toaster as Toaster$1, toast } from 'sonner';
export { toast } from 'sonner';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { create } from 'zustand';
export { DirectionProvider } from '@radix-ui/react-direction';
import axios from 'axios';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlateContent, useEditorRef, useEditorContainerRef, PlateElement as PlateElement$1, useElement, useFormInputProps, usePlateEditor, ParagraphPlugin, PlateLeaf, useEditorSelector, useMarkToolbarButtonState, useMarkToolbarButton, useEditorReadOnly, Plate } from '@udecode/plate-common/react';
import { cn as cn$1, withRef, withVariants, withProps, withCn, createPrimitiveElement } from '@udecode/cn';
import { BasicMarksPlugin, UnderlinePlugin, StrikethroughPlugin, ItalicPlugin, BoldPlugin } from '@udecode/plate-basic-marks/react';
import { useLink, useFloatingLinkInsertState, useFloatingLinkInsert, useFloatingLinkEditState, useFloatingLinkEdit, FloatingLinkUrlInput, LinkOpenButton, LinkPlugin, useLinkToolbarButtonState, useLinkToolbarButton } from '@udecode/plate-link/react';
import { useBlockSelected } from '@udecode/plate-selection/react';
import { offset, flip } from '@udecode/plate-floating';
import { AlignPlugin, useAlignDropdownMenuState, useAlignDropdownMenu } from '@udecode/plate-alignment/react';
import { HeadingPlugin } from '@udecode/plate-heading/react';
import { IndentPlugin } from '@udecode/plate-indent/react';
import { IndentListPlugin } from '@udecode/plate-indent-list/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { someIndentList, ListStyleType, toggleIndentList } from '@udecode/plate-indent-list';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { useQueryState } from 'nuqs';
import moment from 'moment-jalaali';

const AspectRatio = AspectRatioPrimitive.Root;

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
function Badge({ className, variant, ...props }) {
    return (jsx("div", { className: cn(badgeVariants({ variant }), className), ...props }));
}

const Breadcrumb = React.forwardRef(({ ...props }, ref) => jsx("nav", { ref: ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => (jsx("ol", { ref: ref, className: cn("text-muted-foreground flex flex-wrap items-center break-words text-sm sm:gap-2.5", className), ...props })));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => (jsx("li", { ref: ref, className: cn("inline-flex items-center gap-1.5", className), ...props })));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (jsx(Comp, { ref: ref, className: cn("hover:text-foreground transition-colors", className), ...props }));
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => (jsx("span", { ref: ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: cn("text-foreground font-normal", className), ...props })));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props }) => (jsx("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className), ...props, children: children ?? jsx(ChevronLeftIcon, {}) }));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({ className, ...props }) => (jsxs("span", { role: "presentation", "aria-hidden": "true", className: cn("flex h-9 w-9 items-center justify-center", className), ...props, children: [jsx(DotsHorizontalIcon, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "More" })] }));
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

const buttonVariants$2 = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            success: "bg-green-700 dark:bg-green-800 text-green-100 shadow-sm hover:dark:bg-green-800/90 hover:bg-green-700/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2",
            xs: "h-6 rounded-md px-3 text-xs",
            sm: "h-8 rounded-md px-3 text-sm",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = React.forwardRef(({ className, variant, loading, disabled, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (jsxs(Comp, { disabled: disabled || loading, className: cn(buttonVariants$2({ className, variant, size })), ref: ref, ...props, children: [loading && jsx(Loader2, { className: "animate-spin" }), props.children] }));
});
Button.displayName = "Button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return (jsx(DayPicker, { showOutsideDays: showOutsideDays, className: cn("p-3", className), classNames: {
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn(buttonVariants$2({ variant: "outline" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: cn("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md", props.mode === "range"
                ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                : "[&:has([aria-selected])]:rounded-md"),
            day: cn(buttonVariants$2({ variant: "ghost" }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
            day_range_start: "day-range-start",
            day_range_end: "day-range-end",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            ...classNames,
        }, components: {
            IconLeft: ({ className, ...props }) => (jsx(ChevronLeft, { className: cn("h-4 w-4", className), ...props })),
            IconRight: ({ className, ...props }) => (jsx(ChevronRight, { className: cn("h-4 w-4", className), ...props })),
        }, ...props }));
}
Calendar.displayName = "Calendar";

const Card = React__default.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("bg-card text-card-foreground rounded-xl border shadow", className), ...props })));
Card.displayName = "Card";
const CardHeader = React__default.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React__default.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("font-semibold leading-none tracking-tight", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React__default.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("text-muted-foreground text-sm", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React__default.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React__default.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (jsx(CheckboxPrimitive.Root, { ref: ref, className: cn(`border-primary ring-offset-background focus-visible:ring-ring
      data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground
      peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
      disabled:opacity-50`, className), ...props, children: jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: jsx(Check, { className: "h-4 w-4" }) }) })));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (jsx(DialogPrimitive.Overlay, { ref: ref, className: cn(`data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50
      bg-black/80`, className), ...props })));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (jsxs(DialogPortal, { children: [jsx(DialogOverlay, {}), jsx(DialogPrimitive.Content, { ref: ref, className: cn(`bg-background data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        data-[state=closed]:slide-out-to-left-1/2
        data-[state=closed]:slide-out-to-top-[48%]
        data-[state=open]:slide-in-from-left-1/2
        data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid
        w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border p-6
        shadow-lg duration-200 sm:rounded-lg`, className), ...props, children: children })] })));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => (jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-right", className), ...props }));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => (jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (jsx(DialogPrimitive.Title, { ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props })));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (jsx(DialogPrimitive.Description, { ref: ref, className: cn("text-muted-foreground text-sm", className), ...props })));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Command = React.forwardRef(({ className, ...props }, ref) => (jsx(Command$1, { ref: ref, className: cn(`bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden
      rounded-md`, className), ...props })));
Command.displayName = Command$1.displayName;
const CommandDialog = ({ children, ...props }) => {
    return (jsx(Dialog, { ...props, children: jsx(DialogContent, { className: cn("w-[500px] overflow-hidden p-0", props.className), children: jsx(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2\n            [&_[cmdk-group-heading]]:font-medium\n            [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2\n            [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5\n            [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3\n            [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: children }) }) }));
};
const CommandInput = React.forwardRef(({ className, ...props }, ref) => (jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [jsx(MagnifyingGlassIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }), jsx(Command$1.Input, { ref: ref, className: cn(`placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent
        py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50`, className), ...props })] })));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => (jsx(Command$1.List, { ref: ref, className: cn("rtl overflow-y-auto overflow-x-hidden", className), ...props })));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => (jsx(Command$1.Empty, { ref: ref, className: "py-6 text-center text-sm", ...props })));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (jsx(Command$1.Group, { ref: ref, className: cn(`text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden
      p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5
      [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium`, className), ...props })));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (jsx(Command$1.Separator, { ref: ref, className: cn("bg-border -mx-1 h-px", className), ...props })));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => (jsx(Command$1.Item, { ref: ref, className: cn(`data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground
      relative flex cursor-default select-none items-center gap-2 rounded-sm px-2
      py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none
      data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4
      [&_svg]:shrink-0`, className), ...props })));
CommandItem.displayName = Command$1.Item.displayName;
const CommandShortcut = ({ className, ...props }) => {
    return (jsx("span", { className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className), ...props }));
};
CommandShortcut.displayName = "CommandShortcut";

const DropdownMenu$1 = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger$1 = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup$1 = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup$1 = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (jsxs(DropdownMenuPrimitive.SubTrigger, { ref: ref, className: cn(`focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none
      items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none
      [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`, inset && "pl-8", className), ...props, children: [children, jsx(ChevronLeftIcon, { className: "mr-auto" })] })));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (jsx(DropdownMenuPrimitive.SubContent, { ref: ref, className: cn(`bg-popover text-popover-foreground data-[state=open]:animate-in
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
      data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
      data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
      data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden
      rounded-md border p-1 shadow-lg`, className), ...props })));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent$1 = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsx(DropdownMenuPrimitive.Portal, { children: jsx(DropdownMenuPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: cn(`bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md
        border p-1 shadow-md`, `data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`, className), ...props }) })));
DropdownMenuContent$1.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem$1 = React.forwardRef(({ className, inset, ...props }, ref) => (jsx(DropdownMenuPrimitive.Item, { ref: ref, className: cn(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default
      select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&>svg]:size-4 [&>svg]:shrink-0`, inset && "pl-8", className), ...props })));
DropdownMenuItem$1.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (jsxs(DropdownMenuPrimitive.CheckboxItem, { ref: ref, className: cn(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default
      select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, className), checked: checked, ...props, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(DropdownMenuPrimitive.ItemIndicator, { children: jsx(CheckIcon, { className: "h-4 w-4" }) }) }), children] })));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem$1 = React.forwardRef(({ className, children, ...props }, ref) => (jsxs(DropdownMenuPrimitive.RadioItem, { ref: ref, className: cn(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default
      select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, className), ...props, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(DropdownMenuPrimitive.ItemIndicator, { children: jsx(DotFilledIcon, { className: "h-2 w-2 fill-current" }) }) }), children] })));
DropdownMenuRadioItem$1.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel$1 = React.forwardRef(({ className, inset, ...props }, ref) => (jsx(DropdownMenuPrimitive.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
DropdownMenuLabel$1.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator$1 = React.forwardRef(({ className, ...props }, ref) => (jsx(DropdownMenuPrimitive.Separator, { ref: ref, className: cn("bg-muted -mx-1 my-1 h-px", className), ...props })));
DropdownMenuSeparator$1.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props }) => {
    return (jsx("span", { className: cn("mr-auto text-xs tracking-widest opacity-60", className), ...props }));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => (jsx(LabelPrimitive.Root, { ref: ref, className: cn(labelVariants(), className), ...props })));
Label.displayName = LabelPrimitive.Root.displayName;

const Form = FormProvider;
const FormFieldContext = React.createContext({});
const FormField = ({ ...props }) => {
    return (jsx(FormFieldContext.Provider, { value: { name: props.name }, children: jsx(Controller, { ...props }) }));
};
const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};
const FormItemContext = React.createContext({});
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
    const id = React.useId();
    return (jsx(FormItemContext.Provider, { value: { id }, children: jsx("div", { ref: ref, className: cn("space-y-2", className), ...props }) }));
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return (jsx(Label, { ref: ref, className: cn(error && "text-destructive", className), htmlFor: formItemId, ...props }));
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (jsx(Slot, { ref: ref, id: formItemId, "aria-describedby": !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error, ...props }));
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return (jsx("p", { ref: ref, id: formDescriptionId, className: cn("text-muted-foreground text-[0.8rem]", className), ...props }));
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return (jsx("p", { ref: ref, id: formMessageId, className: cn("text-destructive text-[0.8rem] font-medium", className), ...props, children: body }));
});
FormMessage.displayName = "FormMessage";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (jsx("input", { type: type, className: cn(`border-input file:text-foreground placeholder:text-muted-foreground
          focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3
          py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent
          file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1
          disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`, className), ref: ref, ...props }));
});
Input.displayName = "Input";

const InputOTP = React.forwardRef(({ className, containerClassName, ...props }, ref) => (jsx(OTPInput, { ref: ref, containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName), className: cn("disabled:cursor-not-allowed", className), ...props })));
InputOTP.displayName = "InputOTP";
const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("flex items-center", className), ...props })));
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
    return (jsxs("div", { ref: ref, className: cn(`border-input relative flex h-10 w-10 items-center justify-center border-y
        border-r text-sm transition-all first:rounded-l-md first:border-l
        last:rounded-r-md`, isActive && "ring-ring ring-offset-background z-10 ring-2", className), ...props, children: [char, hasFakeCaret && (jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) }))] }));
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (jsx("div", { ref: ref, role: "separator", ...props, children: jsx(Dot, {}) })));
InputOTPSeparator.displayName = "InputOTPSeparator";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (jsx(PopoverPrimitive.Portal, { children: jsx(PopoverPrimitive.Content, { ref: ref, align: align, sideOffset: sideOffset, className: cn(`bg-popover text-popover-foreground data-[state=open]:animate-in
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 relative z-50 w-72 rounded-md border p-4
        shadow-md outline-none`, className), ...props }) })));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref: ref }));
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx(RadioGroupPrimitive.Item, { ref: ref, className: cn(`border-foreground text-foreground focus-visible:ring-ring aspect-square h-[14px]
        w-[14px] rounded-full border shadow focus:outline-none focus-visible:ring-1
        disabled:cursor-not-allowed disabled:opacity-50`, className), ...props, children: jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: jsx(DotFilledIcon, { className: "fill-foreground h-[12px] w-[12px]" }) }) }));
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const ScrollArea = React.forwardRef(({ className, children, dir = "ltr", ...props }, ref) => (jsxs(ScrollAreaPrimitive.Root, { ref: ref, dir: dir, className: cn("relative overflow-hidden", className), ...props, children: [jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children: children }), jsx(ScrollBar, { dir: dir }), jsx(ScrollAreaPrimitive.Corner, {})] })));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", dir = "ltr", ...props }, ref) => (jsx(ScrollAreaPrimitive.ScrollAreaScrollbar, { ref: ref, orientation: orientation, dir: dir, className: cn("flex touch-none select-none transition-colors", orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]", dir === "rtl" &&
        orientation === "vertical" &&
        "rtl:border-r rtl:border-r-transparent", // Example of RTL-specific styles
    className), ...props, children: jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "bg-border relative flex-1 rounded-full" }) })));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (jsxs(SelectPrimitive.Trigger, { ref: ref, className: cn(` ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex
      h-9 w-full items-center justify-between whitespace-nowrap rounded-md border
      border-[#FFFFFF] bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none
      focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50
      dark:border-[#4A5565] [&>span]:line-clamp-1`, className), ...props, children: [children, jsx(SelectPrimitive.Icon, { asChild: true, children: jsx(ChevronDownIcon, { className: "h-4 w-4 opacity-50" }) })] })));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (jsx(SelectPrimitive.ScrollUpButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: jsx(ChevronUpIcon, { className: "h-4 w-4" }) })));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (jsx(SelectPrimitive.ScrollDownButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: jsx(ChevronDownIcon, { className: "h-4 w-4" }) })));
SelectScrollDownButton.displayName =
    SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (jsx(SelectPrimitive.Portal, { children: jsxs(SelectPrimitive.Content, { ref: ref, className: cn(`bg-popover text-popover-foreground data-[state=open]:animate-in
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem]
        overflow-hidden rounded-md border shadow-md`, position === "popper" &&
            `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1
          data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`, className), position: position, ...props, children: [jsx(SelectScrollUpButton, {}), jsx(SelectPrimitive.Viewport, { className: cn("p-1", position === "popper" &&
                    `h-[var(--radix-select-trigger-height)] w-full
            min-w-[var(--radix-select-trigger-width)]`), children: children }), jsx(SelectScrollDownButton, {})] }) })));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (jsx(SelectPrimitive.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", className), ...props })));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (jsxs(SelectPrimitive.Item, { ref: ref, className: cn(`focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default
      select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, className), ...props, children: [jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(SelectPrimitive.ItemIndicator, { children: jsx(CheckIcon, { className: "h-4 w-4" }) }) }), jsx(SelectPrimitive.ItemText, { children: children })] })));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (jsx(SelectPrimitive.Separator, { ref: ref, className: cn("bg-muted -mx-1 my-1 h-px", className), ...props })));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const Separator$1 = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (jsx(SeparatorPrimitive.Root, { ref: ref, decorative: decorative, orientation: orientation, className: cn("bg-border shrink-0", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props })));
Separator$1.displayName = SeparatorPrimitive.Root.displayName;

const SheetHeader$1 = ({ title = "", buttonTitle = "", dropdownTitle = "", text, side, copyText, buttonProps = {
    children: undefined,
}, menuTriggerProps = {}, menuIconProps = {}, renderMenu, className, }) => {
    return (jsxs("div", { className: `${className} bg-background rtl flex h-[70px] justify-between border-b p-4 `, children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx("h3", { className: "text-right text-lg font-semibold leading-8", children: title }), copyText && jsx("div", { className: "text-sm text-gray-400", children: copyText })] }), jsxs("div", { className: "flex justify-end", children: [buttonTitle ? (jsx(Button, { className: renderMenu && "ml-3", ...buttonProps, children: buttonTitle })) : buttonProps?.children ? (buttonProps.children) : null, renderMenu && (jsxs(DropdownMenu$1, { children: [jsx(DropdownMenuTrigger$1, { ...menuTriggerProps, children: jsx(DotsVerticalIcon, { width: 22, height: 22, ...menuIconProps }) }), jsxs(DropdownMenuContent$1, { className: "rtl", side: side, children: [text && (jsxs(Fragment, { children: [jsx(DropdownMenuLabel$1, { children: dropdownTitle }), jsx(DropdownMenuSeparator$1, {})] })), renderMenu && renderMenu()] })] }))] })] }));
};

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx(DialogPrimitive.Overlay, { className: cn(`bg-black-40 data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50`, className), ...props, ref: ref }));
});
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;
const sheetVariants = cva(`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out`, {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
    },
    defaultVariants: {
        side: "right",
    },
});
const SheetContent = React.forwardRef(({ side = "right", className, nestedOpen = "", nestedClass, children, ...props }, ref) => {
    return (jsxs(SheetPortal, { children: [jsx(SheetOverlay, {}), jsx(DialogPrimitive.Content, { ref: ref, className: `bg-background ${nestedOpen ? nestedClass : ""} ${cn(sheetVariants({ side }), className)}`, ...props, children: children })] }));
});
SheetContent.displayName = DialogPrimitive.Content.displayName;
const SheetHeader = ({ ...props }) => (jsx(SheetHeader$1, { ...props }));
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props }) => (jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (jsx(DialogPrimitive.Title, { ref: ref, className: cn("text-foreground text-lg font-semibold", className), ...props })));
SheetTitle.displayName = DialogPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (jsx(DialogPrimitive.Description, { ref: ref, className: cn("text-muted-foreground text-sm", className), ...props })));
SheetDescription.displayName = DialogPrimitive.Description.displayName;

const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(undefined);
    React__default.useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return () => mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}

function Skeleton({ className, ...props }) {
    return (jsx("div", { className: cn("animate-pulse rounded-md bg-[#99999910]", className), ...props }));
}

const TooltipProvider$1 = TooltipPrimitive.Provider;
const Tooltip$1 = TooltipPrimitive.Root;
const TooltipTrigger$1 = TooltipPrimitive.Trigger;
const TooltipContent$1 = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsx(TooltipPrimitive.Portal, { children: jsx(TooltipPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: cn(`bg-background text-background-foreground animate-in fade-in-0 zoom-in-95
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border
        px-3 py-1.5 text-xs`, className), ...props }) })));
TooltipContent$1.displayName = TooltipPrimitive.Content.displayName;

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "18rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "5rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
    const context = React.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
const SidebarProvider = React.forwardRef(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = useState(false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback((value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        }
        else {
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [setOpenProp, open]);
    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
        return isMobile
            ? setOpenMobile((open) => !open)
            : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);
    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
                (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = React.useMemo(() => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
    }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
    return (jsx(SidebarContext.Provider, { value: contextValue, children: jsx(TooltipProvider$1, { delayDuration: 0, children: jsx("div", { style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style,
                }, className: cn(`group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh
              w-full`, className), ref: ref, ...props, children: children }) }) }));
});
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = React.forwardRef(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return (jsx("div", { className: cn("bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col", className), ref: ref, ...props, children: children }));
    }
    if (isMobile) {
        return (jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: jsx(SheetContent, { "data-sidebar": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden", style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
                }, side: side, children: jsx("div", { className: "flex h-full w-full flex-col", children: children }) }) }));
    }
    return (jsxs("div", { ref: ref, className: "text-sidebar-foreground group peer hidden md:block", "data-state": state, "data-collapsible": state === "collapsed" ? collapsible : "", "data-variant": variant, "data-side": side, children: [jsx("div", { className: cn(`relative h-svh w-[--sidebar-width] bg-transparent transition-[width]
            duration-200 ease-linear`, "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset"
                    ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                    : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]") }), jsx("div", { className: cn(`fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width]
            transition-[left,right,width] duration-200 ease-linear md:flex`, side === "left"
                    ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                    : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", 
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset"
                    ? `p-2
                group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]`
                    : `group-data-[collapsible=icon]:w-[--sidebar-width-icon]
                group-data-[side=left]:border-r group-data-[side=right]:border-l`, className), ...props, children: jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full\n              w-full flex-col group-data-[variant=floating]:rounded-lg\n              group-data-[variant=floating]:border group-data-[variant=floating]:shadow", children: children }) })] }));
});
Sidebar.displayName = "Sidebar";
const SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (jsxs(Button, { ref: ref, "data-sidebar": "trigger", variant: "ghost", size: "icon", className: cn("h-7 w-7", className), onClick: (event) => {
            onClick?.(event);
            toggleSidebar();
        }, ...props, children: [jsx(ViewVerticalIcon, {}), jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] }));
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = React.forwardRef(({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (jsx("button", { ref: ref, "data-sidebar": "rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: toggleSidebar, title: "Toggle Sidebar", className: cn(`hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4
        -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0
        after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4
        group-data-[side=right]:left-0 sm:flex`, "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", `[[data-side=left][data-state=collapsed]_&]:cursor-e-resize
        [[data-side=right][data-state=collapsed]_&]:cursor-w-resize`, `group-data-[collapsible=offcanvas]:hover:bg-sidebar
        group-data-[collapsible=offcanvas]:translate-x-0
        group-data-[collapsible=offcanvas]:after:left-full`, "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className), ...props }));
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx("main", { ref: ref, className: cn("bg-background relative flex min-h-svh flex-1 flex-col", `peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))]
        md:peer-data-[variant=inset]:m-2
        md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2
        md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl
        md:peer-data-[variant=inset]:shadow`, className), ...props }));
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx(Input, { ref: ref, "data-sidebar": "input", className: cn(`bg-background focus-visible:ring-sidebar-ring h-8 w-full shadow-none
        focus-visible:ring-2`, className), ...props }));
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-sidebar": "header", className: cn("flex flex-col gap-2 p-2", className), ...props }));
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-sidebar": "footer", className: cn("flex flex-col gap-2 p-2", className), ...props }));
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx(Separator$1, { ref: ref, "data-sidebar": "separator", className: cn("bg-sidebar-border mx-2 w-auto", className), ...props }));
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-sidebar": "content", className: cn(`flex min-h-0 flex-1 flex-col gap-2 overflow-auto
        group-data-[collapsible=icon]:overflow-hidden`, className), ...props }));
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-sidebar": "group", className: cn("relative flex w-full min-w-0 flex-col p-2", className), ...props }));
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (jsx(Comp, { ref: ref, "data-sidebar": "group-label", className: cn(`text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center
        rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa]
        duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`, "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className), ...props }));
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (jsx(Comp, { ref: ref, "data-sidebar": "group-action", className: cn(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent
        hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square
        w-5 items-center justify-center rounded-md p-0 outline-none transition-transform
        focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`, 
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className), ...props }));
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, "data-sidebar": "group-content", className: cn("w-full text-sm", className), ...props })));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => (jsx("ul", { ref: ref, "data-sidebar": "menu", className: cn("flex w-full min-w-0 flex-col gap-1", className), ...props })));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => (jsx("li", { ref: ref, "data-sidebar": "menu-item", className: cn("group/menu-item relative", className), ...props })));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const SidebarMenuButton = React.forwardRef(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = (jsx(Comp, { ref: ref, "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: cn(sidebarMenuButtonVariants({ variant, size }), className), ...props }));
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip,
        };
    }
    return (jsxs(Tooltip$1, { children: [jsx(TooltipTrigger$1, { asChild: true, children: button }), jsx(TooltipContent$1, { side: "right", align: "center", hidden: state !== "collapsed" || isMobile, ...tooltip })] }));
});
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = React.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (jsx(Comp, { ref: ref, "data-sidebar": "menu-action", className: cn(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent
        hover:text-sidebar-accent-foreground
        peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5
        flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none
        transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`, 
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover &&
            `peer-data-[active=true]/menu-button:text-sidebar-accent-foreground
          group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100
          data-[state=open]:opacity-100 md:opacity-0`, className), ...props }));
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, "data-sidebar": "menu-badge", className: cn(`text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5
      select-none items-center justify-center rounded-md px-1 text-xs font-medium
      tabular-nums`, `peer-hover/menu-button:text-sidebar-accent-foreground
      peer-data-[active=true]/menu-button:text-sidebar-accent-foreground`, "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className), ...props })));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = React.forwardRef(({ className, showIcon = false, ...props }, ref) => {
    // Random width between 50 to 90%.
    const width = React.useMemo(() => {
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);
    return (jsxs("div", { ref: ref, "data-sidebar": "menu-skeleton", className: cn("flex h-8 items-center gap-2 rounded-md px-2", className), ...props, children: [showIcon && (jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" })), jsx(Skeleton, { className: "h-4 max-w-[--skeleton-width] flex-1", "data-sidebar": "menu-skeleton-text", style: {
                    "--skeleton-width": width,
                } })] }));
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => (jsx("ul", { ref: ref, "data-sidebar": "menu-sub", className: cn(`border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l
      px-2.5 py-0.5`, "group-data-[collapsible=icon]:hidden", className), ...props })));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = React.forwardRef(({ ...props }, ref) => jsx("li", { ref: ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = React.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (jsx(Comp, { ref: ref, "data-sidebar": "menu-sub-button", "data-size": size, "data-active": isActive, className: cn(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent
        hover:text-sidebar-accent-foreground active:bg-sidebar-accent
        active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground
        flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md
        px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none
        disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50
        [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`, `data-[active=true]:bg-sidebar-accent
        data-[active=true]:text-sidebar-accent-foreground`, size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className), ...props }));
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

const Toaster = ({ ...props }) => {
    const { theme = localStorage.getItem("lm-theme") } = useTheme$1();
    return (jsx(Toaster$1, { richColors: true, expand: false, position: "top-right", theme: theme, className: "toaster group", ...props }));
};

const Switch = React.forwardRef(({ className, ...props }, ref) => (jsx(SwitchPrimitives.Root, { className: cn(`focus-visible:ring-ring focus-visible:ring-offset-background
      data-[state=checked]:bg-primary ltr data-[state=unchecked]:bg-input peer
      inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2
      border-transparent shadow-sm transition-colors focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
      disabled:opacity-50`, className), ...props, ref: ref, children: jsx(SwitchPrimitives.Thumb, { className: cn(`bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0
        transition-transform data-[state=checked]:translate-x-4
        data-[state=unchecked]:translate-x-0`) }) })));
Switch.displayName = SwitchPrimitives.Root.displayName;

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => (jsx(TabsPrimitive.List, { ref: ref, className: cn(`bg-muted text-muted-foreground inline-flex h-9 items-center justify-center
      rounded-lg p-1`, className), ...props })));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (jsx(TabsPrimitive.Trigger, { ref: ref, className: cn(`ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background
      data-[state=active]:text-foreground inline-flex items-center justify-center
      whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow`, className), ...props })));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (jsx(TabsPrimitive.Content, { ref: ref, className: cn(`ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-offset-2`, className), ...props })));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (jsx("textarea", { className: cn(`border-input placeholder:text-muted-foreground focus-visible:ring-ring flex
        min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base
        shadow-sm focus-visible:outline-none focus-visible:ring-1
        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`, className), ref: ref, ...props }));
});
Textarea.displayName = "Textarea";

const Avatar = React.forwardRef(({ className, ...props }, ref) => (jsx(AvatarPrimitive.Root, { ref: ref, className: cn("relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full", className), ...props })));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (jsx(AvatarPrimitive.Image, { ref: ref, className: cn("aspect-square h-40 w-40 ", className), ...props })));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (jsx(AvatarPrimitive.Fallback, { ref: ref, className: cn("bg-muted flex h-40 w-40 items-center justify-center rounded-full", className), ...props })));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

var avatar = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Avatar: Avatar,
    AvatarFallback: AvatarFallback,
    AvatarImage: AvatarImage
});

const useThemeStore = create((set) => ({
    theme: "system",
    setTheme: (theme) => {
        localStorage.setItem("lm-theme", theme);
        set({ theme });
    },
}));
function ThemeProvider({ children, defaultTheme = "system", storageKey = "lm-theme", }) {
    const { setTheme } = useThemeStore();
    const theme = useThemeStore((state) => state.theme);
    // Set initial theme from localStorage or default value
    useEffect(() => {
        const savedTheme = localStorage.getItem(storageKey) || defaultTheme;
        setTheme(savedTheme);
    }, [defaultTheme, storageKey, setTheme]);
    // Sync theme changes to the DOM
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
            root.classList.add(systemTheme);
        }
        else {
            root.classList.add(theme);
        }
    }, [theme]);
    return jsx(Fragment, { children: children });
}
// Hook for accessing theme and setTheme
const useTheme = () => {
    const { theme, setTheme } = useThemeStore();
    return { theme, setTheme };
};

function AnimatedGradientText({ children, className, ...props }) {
    return (jsxs("div", { className: cn(`group relative mx-auto flex max-w-fit flex-row items-center justify-center
        rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium
        shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow
        duration-500 ease-out [--bg-size:300%]
        hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40`, className), ...props, children: [jsx("div", { className: `animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r
          from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50
          bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit]
          ![mask-composite:subtract]
          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]` }), children] }));
}

const sizeList = {
    xs: "w-[16px] h-[16px]",
    sm: "w-[24px] h-[24px]",
    md: "w-[32px] h-[32px]",
    lg: "w-[45px] h-[45px]",
};
const Pic = ({ tooltip = "", src = "", size = "md", className, }) => {
    return (jsx(TooltipProvider$1, { children: jsxs(Tooltip$1, { children: [jsx(TooltipTrigger$1, { asChild: true, children: jsxs(Avatar, { className: `${sizeList[size]} ${className} border-[1px] border-red-500`, children: [src && (jsx(AvatarImage, { src: src, alt: tooltip, className: `${sizeList[size]}` })), jsx(AvatarFallback, { children: "LM" })] }) }), tooltip && (jsx(TooltipContent$1, { children: jsx("p", { children: tooltip }) }))] }) }));
};
const PicGroup = ({ picList = [], length = 5, direction = "rtl" }) => {
    return (jsx("div", { className: `inline-flex ${direction == "ltr" ? "flex-row-reverse" : ""}`, children: picList.slice(0, length + 1).map((item, index) => {
            return (jsx(Fragment, { children: index < length ? (jsx("div", { style: {
                        transform: `translate(${direction == "ltr" ? "-" : ""}${index * (item.size === "lg" ? 15 : 6)}px, 0)`,
                    }, children: jsx(Pic, { ...item }) }, `pic-item-${index}`)) : (jsxs("span", { className: `${sizeList[item?.size || "md"]} ${item.className} bg-primary flex items-center
                  justify-center rounded-full border-[1px] border-white text-xs text-white`, style: {
                        transform: `translate(${direction == "ltr" ? "-" : ""}${length * (item.size === "lg" ? 15 : 6)}px, 0)`,
                    }, children: ["+", picList.length - length] })) }));
        }) }));
};

const getAvatarUrl = (avatarUrl) => `https://lm-public-storage.s3-website.ir-thr-at1.arvanstorage.ir/publicImageManager/${avatarUrl}`;

function OperatorsSelect({ selectedUsers = [], setSelectedUsers, users, }) {
    return (jsx(Card, { className: "rounded border-0", children: jsx(CardContent, { className: "gap-0 p-0 outline-none", children: jsxs(Command, { className: "overflow-hidden", children: [jsx(CommandInput, { placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u06A9\u0627\u0631\u0628\u0631..." }), jsxs(CommandList, { className: "h-[400px] overflow-y-auto", children: [jsx(CommandEmpty, { children: "\u0645\u0648\u0631\u062F\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F" }), jsx(CommandGroup, { className: "p-2", children: users?.map((user) => {
                                    const isActive = Array.isArray(selectedUsers)
                                        ? selectedUsers.includes(user)
                                        : selectedUsers === user;
                                    return (jsxs(CommandItem, { className: "flex items-center px-2", onSelect: () => {
                                            if (Array.isArray(selectedUsers)) {
                                                if (selectedUsers.includes(user)) {
                                                    return setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user));
                                                }
                                                return setSelectedUsers([...users].filter((u) => [...selectedUsers, user].includes(u)));
                                            }
                                            else {
                                                setSelectedUsers(user);
                                            }
                                        }, children: [jsx(PicGroup, { picList: [
                                                    {
                                                        src: getAvatarUrl(user?.avatarUrl?.[0]?.thumbnail ||
                                                            user?.avatarThumbnail ||
                                                            user?.avatar),
                                                        tooltip: user.name,
                                                    },
                                                ] }), jsx("div", { className: "ml-2", children: jsx("p", { className: "text-sm font-medium leading-none", children: user.name || user.fullName }) }), isActive ? (jsx(Check, { className: "text-primary mr-auto flex h-5 w-5" })) : null] }, user.email));
                                }) })] })] }) }) }));
}

class Api {
    xhr;
    maxRetries = 100;
    retryDelay = 2000; // 2 second
    constructor(opts = { baseURL: "", headers: {}, tokenKey: "", token: "" }) {
        const apiBaseUrl = process.env.API_BASE_URL;
        const cookie = localStorage.getItem("cookie");
        const headers = {
            "Content-Type": "application/json; charset=UTF8",
            ...opts.headers,
        };
        const token = opts.token || localStorage.getItem(opts.tokenKey || "token");
        if (token)
            headers["Authorization"] = token;
        if (cookie)
            headers["X-Custom-Cookie"] = cookie;
        this.xhr = axios.create({
            baseURL: opts.baseURL || apiBaseUrl,
            headers,
        });
        this.xhr.interceptors.request.use((config) => {
            if (config.method === "options") {
                config.headers["Access-Control-Request-Method"] = config.method;
            }
            return config;
        });
    }
    handleErr = (err, retryCount = 0, originalRequest) => {
        // const systemError = "سیستم در حال بررسی مشکل از سمت سعیده، تا اون موقع پاشو واسه خودت چایی بریز c😊"
        if (err.response) {
            const message = err.response?.data?.message;
            const { status } = err.response;
            switch (true) {
                case status === 400:
                    if (message && Array.isArray(message.errors)) {
                        message.errors.map((error) => {
                            toast.error(error.message || error);
                        });
                    }
                    else if (err.response?.data?.errors?.message) {
                        toast.error(err.response?.data?.errors.message);
                    }
                    else
                        toast.error("درخواست نامعتبر");
                    break;
                case status === 401:
                    toast.error("عدم احراز هویت");
                    window.location.href = "/auth/login";
                    window.localStorage.removeItem("token");
                    window.localStorage.removeItem("user_info");
                    window.localStorage.removeItem("permissions");
                    break;
                case status === 403:
                    toast.error("دسترسی غیرمجاز");
                    if (!["staff"].includes(window.location.pathname)) {
                        setTimeout(() => {
                            window.location.href = "/crm/react/403";
                        }, 2000);
                    }
                    break;
                case status === 404:
                    toast.error("منبع یافت نشد");
                    break;
                case status >= 500:
                    // toast.error(systemError);
                    return this.retryRequest(err, retryCount, originalRequest);
                case status === 0 && err.message.includes("Network Error"):
                    // toast.error(systemError);
                    return this.retryRequest(err, retryCount, originalRequest);
                default:
                    toast.error(message || "خطای ناشناخته");
            }
        }
        else if (err.request) {
            if (err.message.includes("Network Error")) {
                // toast.error(systemError);
                return this.retryRequest(err, retryCount, originalRequest);
            }
            else {
                // toast.error(systemError);
                return this.retryRequest(err, retryCount, originalRequest);
            }
        }
        else ;
        console.error("API Error:", err);
    };
    handleRes = (res) => {
        const responseCookie = res.data.cookie;
        if (responseCookie) {
            try {
                const existingCookie = window.localStorage.getItem("cookie");
                const parsedExistingCookie = existingCookie
                    ? JSON.parse(existingCookie)
                    : null;
                const parsedResponseCookie = JSON.parse(responseCookie);
                window.localStorage.setItem("cookie", responseCookie);
                if (parsedExistingCookie) {
                    const isEqualCallStatus = parsedExistingCookie.callStatus === parsedResponseCookie.callStatus;
                    const isEqualGoftinoStatus = parsedExistingCookie.goftinoStatus ===
                        parsedResponseCookie.goftinoStatus;
                    const isEqualHighestRank = parsedExistingCookie.highestRank ===
                        parsedResponseCookie.highestRank;
                    const isEqualroles = parsedExistingCookie.roles.length ===
                        parsedResponseCookie.roles.length;
                    if (!isEqualCallStatus ||
                        !isEqualGoftinoStatus ||
                        !isEqualHighestRank ||
                        !isEqualroles) {
                        window.location.reload();
                        return;
                    }
                }
            }
            catch (error) {
                console.error("Error handling cookie:", error);
            }
        }
    };
    retryRequest = (err, retryCount, originalRequest) => {
        if (retryCount < this.maxRetries) {
            retryCount++;
            console.log(`Retrying request (${retryCount}/${this.maxRetries})...`);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(this.xhr(originalRequest));
                }, this.retryDelay * retryCount);
            }).catch((error) => this.handleErr(error, retryCount, originalRequest));
        }
        return Promise.reject(err);
    };
    setToken(token) {
        if (token) {
            this.xhr.defaults.headers.common["Authorization"] = token;
        }
        else {
            delete this.xhr.defaults.headers.common["Authorization"];
        }
    }
    get(url, params) {
        return new Promise((resolve, reject) => {
            this.xhr
                .get(url, {
                params,
            })
                .then((res) => {
                resolve(res);
                this.handleRes(res);
            })
                .catch((err) => {
                reject(err);
                this.handleErr(err, 0, { method: "GET", url, params });
            });
        });
    }
    post(url, params, config) {
        return new Promise((resolve, reject) => {
            this.xhr
                .post(url, params, config)
                .then((res) => {
                resolve(res);
                this.handleRes(res);
            })
                .catch((err) => {
                reject(err);
                this.handleErr(err);
            });
        });
    }
    put(url, params) {
        return new Promise((resolve, reject) => {
            this.xhr
                .put(url, params)
                .then((res) => {
                resolve(res);
                this.handleRes(res);
            })
                .catch((err) => {
                reject(err);
                this.handleErr(err);
            });
        });
    }
    patch(url, params) {
        return new Promise((resolve, reject) => {
            this.xhr
                .patch(url, params)
                .then((res) => {
                resolve(res);
                this.handleRes(res);
            })
                .catch((err) => {
                reject(err);
                this.handleErr(err);
            });
        });
    }
    delete(url, params) {
        return new Promise((resolve, reject) => {
            this.xhr
                .delete(url, { data: params })
                .then((res) => {
                resolve(res);
                this.handleRes(res);
            })
                .catch((err) => {
                reject(err);
                this.handleErr(err);
            });
        });
    }
}

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (jsx(AccordionPrimitive.Item, { ref: ref, className: cn(className), ...props })));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (jsx(AccordionPrimitive.Header, { className: "flex", children: jsx(AccordionPrimitive.Trigger, { ref: ref, className: cn(`flex flex-1 items-center justify-between text-left text-sm font-medium
        transition-all [&[data-state=open]>svg]:rotate-180`, className), ...props, children: children }) })));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (jsx(AccordionPrimitive.Content, { ref: ref, className: "data-[state=closed]:animate-accordion-up\n      data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...props, children: jsx("div", { className: cn("pb-4 pt-0", className), children: children }) })));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const AccordionComponent = ({ items: accordions = [], counts, className, entireRolePermissionIds, onDialogSubmit, onDialogClose, label, badge, value, }) => {
    const [selectedContent, setSelectedContent] = useState(null);
    const [ids, setIds] = useState([]);
    const isContentOpen = useMemo(() => !!selectedContent, [selectedContent]);
    const allPermissionIds = selectedContent?.children?.map((p) => p.id).sort() || [];
    const allChecked = JSON.stringify(allPermissionIds) === JSON.stringify(ids.sort());
    const handleContentSubmit = () => {
        if (onDialogSubmit)
            onDialogSubmit(ids, allPermissionIds);
        setSelectedContent(null);
    };
    const handleContentClose = () => {
        if (onDialogClose)
            onDialogClose(selectedContent?.ids || []);
        setSelectedContent(null);
    };
    useEffect(() => {
        if (selectedContent) {
            setIds(allPermissionIds.filter((pId) => entireRolePermissionIds?.includes(pId)));
        }
        else {
            setIds([]);
        }
    }, [selectedContent]);
    return (jsxs(Fragment$1, { children: [jsx(Accordion, { type: "single", collapsible: true, className: cn("rtl h-[calc(100vh-475px)] w-full overflow-y-auto px-3", className), children: jsxs(AccordionItem, { value: value, className: "border-b", children: [jsxs(AccordionTrigger, { className: "flex items-center justify-between py-4", children: [jsxs("div", { className: "flex items-center gap-3", children: [counts && (jsx("span", { className: "size-5 flex items-center justify-center rounded-full text-[#EF394E] ring\r\n                    ring-[#EF394E]", children: counts })), label] }), jsxs("div", { className: "flex items-center justify-between gap-2.5", children: [badge && jsx(Badge, { className: "bg-[#1E293B]", children: badge }), jsx(ChevronDownIcon, { className: "text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" })] })] }), accordions.map((accordion, accordionIndex) => (jsx(AccordionContent, { children: accordion.content?.length
                                ? accordion.content.map((cont, contIndex) => (jsx("div", { className: "mb-4 rounded-[16px] border", children: jsx(Accordion, { type: "single", collapsible: true, children: jsx(AccordionItem, { value: `nested-${contIndex}`, children: jsxs("div", { className: "flex cursor-pointer items-center justify-between p-2.5", onClick: () => setSelectedContent(isContentOpen ? null : cont), children: [jsxs("div", { className: "flex flex-col space-y-2 p-1", children: [jsx("p", { className: "ml-[45px]", children: cont.label }), jsx("span", { children: cont.subLabel })] }), jsx(MoveDiagonal, { className: "text-muted-foreground h-[24px] w-[24px]" })] }) }) }) }, `nested-${contIndex}`)))
                                : accordion.children }, accordionIndex)))] }) }), jsx(Dialog, { open: isContentOpen, onOpenChange: handleContentClose, children: jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [jsxs(DialogHeader, { children: [jsxs(DialogTitle, { className: "flex items-center justify-between", children: [selectedContent?.label, jsxs("div", { className: "flex items-center gap-[8px]", children: [jsx("span", { className: "text-[14px]", children: "\u0647\u0645\u0647" }), jsx(Switch, { checked: allChecked, onCheckedChange: () => {
                                                        if (allChecked) {
                                                            setIds([]);
                                                        }
                                                        else {
                                                            setIds(allPermissionIds);
                                                        }
                                                    } })] })] }), jsx(DialogDescription, { children: selectedContent?.subLabel })] }), jsx("div", { className: "flex flex-col items-start justify-start", children: selectedContent?.children?.map((permissionItem, permissionIndex) => {
                                const lastItemBorder = permissionIndex + 1 === selectedContent?.children?.length
                                    ? "border-b"
                                    : "";
                                const permissionChecked = ids.includes(permissionItem.id);
                                return (jsxs("div", { className: `flex w-full items-center justify-between border-t px-2 py-3 ${lastItemBorder}`, children: [jsx("p", { children: permissionItem.persianName }), jsx("div", { children: jsx(Switch, { checked: permissionChecked, onCheckedChange: () => {
                                                    if (permissionChecked) {
                                                        setIds(ids.filter((p) => p !== permissionItem.id));
                                                    }
                                                    else {
                                                        setIds([...ids, permissionItem.id]);
                                                    }
                                                } }) })] }, `permissionItem-${permissionIndex}`));
                            }) }), jsxs(DialogFooter, { className: "justify-end gap-[8px]", children: [jsx(Button, { type: "button", variant: "outline", onClick: handleContentClose, children: "\u0628\u0633\u062A\u0646" }), jsx(Button, { type: "button", onClick: handleContentSubmit, children: "\u062A\u0627\u0626\u06CC\u062F" })] })] }) })] }));
};

const buttonVariants$1 = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: " bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
        },
        block: {
            true: "w-full",
            false: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        block: false,
    },
});
const _Button = ({ children, size = "default", variant = "default", loading, danger, block, icon, iconPosition = "start", ghost, disabled, className, onClick, role, dataType = "button", }) => {
    const type = danger ? "destructive" : ghost ? "ghost" : variant;
    return (jsxs(Button, { role: role, onClick: onClick, "data-type": dataType, disabled: disabled || loading, variant: type, size: size, className: cn(buttonVariants$1({ variant, size, block }), className), children: [loading && jsx(Loader2, { className: "animate-spin" }), icon && iconPosition === "start" && icon, children, icon && iconPosition === "end" && icon] }));
};

const ComboboxDemo = ({ items, placeholder = "جستجو کنید...", hasSearch = false, className = "", isMultiSelect = false, onChange, }) => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState([]);
    const handleSelect = (currentValue) => {
        const item = items.find((i) => i.value === currentValue);
        if (!item)
            return;
        let newSelected;
        if (isMultiSelect) {
            const isSelected = selected.some((sel) => sel.value === currentValue);
            newSelected = isSelected
                ? selected.filter((sel) => sel.value !== currentValue)
                : [...selected, item];
        }
        else {
            newSelected = [item];
        }
        setSelected(newSelected);
        onChange?.(newSelected);
        if (!isMultiSelect) {
            setOpen(false);
        }
    };
    const getDisplayValue = () => {
        if (selected.length === 0)
            return "انتخاب کنید";
        if (selected.length === 1)
            return selected[0].label;
        return `${selected.length} مورد انتخاب شده`;
    };
    return (jsxs(Popover, { open: open, onOpenChange: setOpen, children: [jsx(PopoverTrigger, { children: jsxs(_Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: cn("w-full justify-between", className), children: [getDisplayValue(), jsx(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), jsx(PopoverContent, { className: "p-0", children: jsxs(Command, { children: [hasSearch && (jsx(CommandInput, { placeholder: placeholder, className: "h-9" })), jsxs(CommandList, { children: [jsx(CommandEmpty, { children: "\u0645\u0648\u0631\u062F\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F" }), jsx(CommandGroup, { children: items.map((item) => (jsxs(CommandItem, { value: item.value, onSelect: handleSelect, children: [item.label, jsx(Check, { className: cn("ml-auto h-4 w-4", selected.some((sel) => sel.value === item.value)
                                                    ? "opacity-100"
                                                    : "opacity-0") })] }, item.value))) })] })] }) })] }));
};

const Copy = ({ text = "" }) => {
    const [copied, setCopied] = useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 800);
    };
    return (jsx(TooltipProvider$1, { disableHoverableContent: false, children: jsxs(Tooltip$1, { open: copied, children: [jsx(TooltipTrigger$1, { asChild: true, children: jsx(CopyIcon, { onClick: handleClick, className: "text-secondary-foreground h-[16px] w-[16px] cursor-pointer" }) }), jsx(TooltipContent$1, { className: "bg-green-500 text-white", children: jsx("p", { children: "\u06A9\u067E\u06CC \u0634\u062F" }) })] }) }));
};

const CustomDropdownMenu = ({ title, label, items, className, titleSub, }) => {
    return (jsxs(DropdownMenu$1, { children: [jsx(DropdownMenuTrigger$1, { children: jsx(_Button, { variant: "outline", children: title }) }), jsxs(DropdownMenuContent$1, { className: className, children: [jsx(DropdownMenuLabel$1, { children: label }), jsx(DropdownMenuSeparator$1, {}), jsx(DropdownMenuGroup$1, { children: items.map((item, index) => (jsx(React.Fragment, { children: item.children ? (jsxs(DropdownMenuSub, { children: [jsx(DropdownMenuSubTrigger, { children: item.label }), jsx(DropdownMenuPortal, { children: jsx(DropdownMenuSubContent, { children: item.children.map((subItem, subIndex) => (jsxs(DropdownMenuItem$1, { children: [subItem.label, subItem.shortcut && (jsx(DropdownMenuShortcut, { children: subItem.shortcut }))] }, `${index}-${subIndex}`))) }) })] })) : (jsxs(DropdownMenuItem$1, { children: [item.label, item.shortcut && (jsx(DropdownMenuShortcut, { children: item.shortcut }))] })) }, index))) })] })] }));
};

const Editable = ({ labelProps, editInputProps, editOpen, handleEditClose, editable = true, handleEditOpen, onSubmit, }) => {
    return (jsxs("p", { className: `${labelProps?.className} text-md flex items-center`, children: [editOpen ? (jsx(Input, { type: "text", ...editInputProps, onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        onSubmit && onSubmit();
                    }
                } })) : (labelProps?.children), editable && (jsx("button", { className: "mr-2 text-gray-500 focus:outline-none", children: editOpen ? (jsxs("div", { className: "flex", children: [jsx(X, { onClick: handleEditClose, className: "h-5 w-5 hover:text-gray-700" }), jsx(CheckIcon$1, { onClick: onSubmit, className: "h-5 w-5 hover:text-gray-500" })] })) : (jsx(Pencil, { onClick: handleEditOpen, className: "h-5 w-5 hover:text-gray-500" })) }))] }));
};

const editorContainerVariants = cva("relative w-full cursor-text select-text overflow-y-auto caret-primary selection:bg-brand/25 focus-visible:outline-none [&_.slate-selection-area]:border [&_.slate-selection-area]:border-brand/25 [&_.slate-selection-area]:bg-brand/15", {
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: {
            default: "h-full",
            demo: "h-[650px]",
            select: cn$1("group rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2", "has-[[data-readonly]]:w-fit has-[[data-readonly]]:cursor-default has-[[data-readonly]]:border-transparent has-[[data-readonly]]:focus-within:[box-shadow:none]"),
        },
    },
});
const EditorContainer = ({ className, variant, ...props }) => {
    const editor = useEditorRef();
    const containerRef = useEditorContainerRef();
    return (jsx("div", { id: editor.uid, ref: containerRef, className: cn$1("ignore-click-outside/toolbar", editorContainerVariants({ variant }), className), ...props }));
};
EditorContainer.displayName = "EditorContainer";
const editorVariants = cva(cn$1("group/editor", "relative w-full cursor-text select-text overflow-x-hidden whitespace-pre-wrap break-words", "rounded-md ring-offset-background  focus-visible:outline-none", "placeholder:text-muted-foreground/80 [&_[data-slate-placeholder]]:top-[auto_!important] [&_[data-slate-placeholder]]:text-muted-foreground/80 [&_[data-slate-placeholder]]:!opacity-100", "[&_strong]:font-bold"), {
    defaultVariants: {
        variant: "default",
    },
    variants: {
        disabled: {
            true: "cursor-not-allowed opacity-50",
        },
        focused: {
            true: "ring-2 ring-ring ring-offset-2",
        },
        variant: {
            ai: "w-full px-0 text-base md:text-sm",
            aiChat: "max-h-[min(70vh,320px)] w-full max-w-[700px] overflow-y-auto px-3 py-2 text-base md:text-sm",
            default: "size-full px-16 pb-72 pt-4 text-base sm:px-[max(64px,calc(50%-350px))]",
            demo: "size-full px-16 pb-72 pt-4 text-base sm:px-[max(64px,calc(50%-350px))]",
            fullWidth: "size-full px-16 pb-72 pt-4 text-base sm:px-24",
            none: "",
            select: "px-3 py-2 text-base data-[readonly]:w-fit",
        },
    },
});
const Editor = React__default.forwardRef(({ className, disabled, focused, variant, ...props }, ref) => {
    return (jsx(PlateContent, { ref: ref, className: cn$1("h-full", editorVariants({
            disabled,
            focused,
            variant,
        }), className), disabled: disabled, disableDefaultStyles: true, ...props }));
});
Editor.displayName = "Editor";

const blockSelectionVariants = cva("pointer-events-none absolute inset-0 z-[1] bg-brand/[.13] transition-opacity", {
    defaultVariants: {
        active: true,
    },
    variants: {
        active: {
            false: "opacity-0",
            true: "opacity-100",
        },
    },
});
function BlockSelection({ className, ...props }) {
    const isBlockSelected = useBlockSelected();
    if (!isBlockSelected)
        return null;
    return (jsx("div", { className: cn$1(blockSelectionVariants({
            active: isBlockSelected,
        }), className), ...props }));
}

const PlateElement = React__default.forwardRef(({ children, ...props }, ref) => {
    return (jsxs(PlateElement$1, { ref: ref, ...props, children: [children, props.className?.includes("slate-selectable") && jsx(BlockSelection, {})] }));
});

const LinkElement = withRef(({ children, className, ...props }, ref) => {
    const element = useElement();
    const { props: linkProps } = useLink({ element });
    return (jsx(PlateElement, { ref: ref, as: "a", className: cn$1(className, "text-primary decoration-primary font-medium underline underline-offset-4"), ...linkProps, ...props, children: children }));
});

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    defaultVariants: {
        size: "sm",
        variant: "default",
    },
    variants: {
        isMenu: {
            true: "w-full cursor-pointer justify-start",
        },
        size: {
            icon: "size-[28px] rounded-md px-1.5",
            lg: "h-9 rounded-md px-4",
            md: "h-8 px-3 text-sm",
            none: "",
            sm: "h-[28px] rounded-md px-2.5",
            xs: "h-8 rounded-md px-3 text-xs",
        },
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            inlineLink: "text-base text-primary underline underline-offset-4",
            link: "text-primary underline-offset-4 hover:underline",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        },
    },
});
withRef(({ asChild = false, className, isMenu, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (jsx(Comp, { ref: ref, className: cn$1(buttonVariants({ className, isMenu, size, variant })), ...props }));
});

const inputVariants = cva("flex w-full rounded-md bg-transparent text-base file:border-0 file:bg-background file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", {
    defaultVariants: {
        h: "md",
        variant: "default",
    },
    variants: {
        h: {
            md: "h-10 px-3 py-2",
            sm: "h-[28px] px-1.5 py-1",
        },
        variant: {
            default: "border border-input ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            ghost: "border-none focus-visible:ring-transparent",
        },
    },
});
withVariants("input", inputVariants, ["variant", "h"]);

const popoverVariants = cva("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none print:hidden", {
    defaultVariants: {
        animate: true,
    },
    variants: {
        animate: {
            true: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        },
    },
});
withRef(({ align = "center", animate, className, sideOffset = 4, ...props }, ref) => (jsx(PopoverPrimitive.Portal, { children: jsx(PopoverPrimitive.Content, { ref: ref, className: cn$1(popoverVariants({ animate }), className), align: align, sideOffset: sideOffset, ...props }) })));

const separatorVariants = cva("shrink-0 bg-border", {
    defaultVariants: {
        orientation: "horizontal",
    },
    variants: {
        orientation: {
            horizontal: "h-px w-full",
            vertical: "h-full w-px",
        },
    },
});
const Separator = withVariants(withProps(SeparatorPrimitive.Root, {
    decorative: true,
    orientation: "horizontal",
}), separatorVariants);

const floatingOptions = {
    middleware: [
        offset(12),
        flip({
            fallbackPlacements: ["bottom-end", "top-start", "top-end"],
            padding: 12,
        }),
    ],
    placement: "bottom-start",
};
function LinkFloatingToolbar({ state }) {
    const insertState = useFloatingLinkInsertState({
        ...state,
        floatingOptions: {
            ...floatingOptions,
            ...state?.floatingOptions,
        },
    });
    const { hidden, props: insertProps, ref: insertRef, textInputProps, } = useFloatingLinkInsert(insertState);
    const editState = useFloatingLinkEditState({
        ...state,
        floatingOptions: {
            ...floatingOptions,
            ...state?.floatingOptions,
        },
    });
    const { editButtonProps, props: editProps, ref: editRef, unlinkButtonProps, } = useFloatingLinkEdit(editState);
    const inputProps = useFormInputProps({
        preventDefaultOnEnterKeydown: true,
    });
    if (hidden)
        return null;
    const input = (jsxs("div", { className: "flex w-[330px] flex-col", ...inputProps, children: [jsxs("div", { className: "flex items-center", children: [jsx("div", { className: "text-muted-foreground flex items-center pl-2 pr-1", children: jsx(Link, { className: "size-4" }) }), jsx(FloatingLinkUrlInput, { className: inputVariants({ h: "sm", variant: "ghost" }), placeholder: "Paste link", "data-plate-focus": true })] }), jsx(Separator, { className: "my-1" }), jsxs("div", { className: "flex items-center", children: [jsx("div", { className: "text-muted-foreground flex items-center pl-2 pr-1", children: jsx(Text, { className: "size-4" }) }), jsx("input", { className: inputVariants({ h: "sm", variant: "ghost" }), placeholder: "Text to display", "data-plate-focus": true, ...textInputProps })] })] }));
    const editContent = editState.isEditing ? (input) : (jsxs("div", { className: "box-content flex items-center", children: [jsx("button", { className: buttonVariants({ size: "sm", variant: "ghost" }), type: "button", ...editButtonProps, children: "Edit link" }), jsx(Separator, { orientation: "vertical" }), jsx(LinkOpenButton, { className: buttonVariants({
                    size: "icon",
                    variant: "ghost",
                }), children: jsx(ExternalLink, { width: 18 }) }), jsx(Separator, { orientation: "vertical" }), jsx("button", { className: buttonVariants({
                    size: "icon",
                    variant: "ghost",
                }), type: "button", ...unlinkButtonProps, children: jsx(Unlink, { width: 18 }) })] }));
    return (jsxs(Fragment, { children: [jsx("div", { ref: insertRef, className: cn$1(popoverVariants(), "w-auto p-1"), ...insertProps, children: input }), jsx("div", { ref: editRef, className: cn$1(popoverVariants(), "w-auto p-1"), ...editProps, children: editContent })] }));
}

const linkPlugin = LinkPlugin.extend({
    render: { afterEditable: () => jsx(LinkFloatingToolbar, {}) },
});

const useCreateEditor = ({ value = "" }) => {
    return usePlateEditor({
        override: {
            components: {
                [LinkPlugin.key]: LinkElement,
                [BoldPlugin.key]: withProps(PlateLeaf, { as: "strong" }),
                [ItalicPlugin.key]: withProps(PlateLeaf, { as: "em" }),
                [ParagraphPlugin.key]: withProps(PlateElement$1, {
                    as: "p",
                    className: "mb-4",
                }),
                [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: "s" }),
                [UnderlinePlugin.key]: withProps(PlateLeaf, { as: "u" }),
                blockquote: withProps(PlateElement$1, {
                    as: "blockquote",
                    className: "mb-4 border-l-4 border-[#d0d7de] pl-4 text-[#636c76]",
                }),
                h1: withProps(PlateElement$1, {
                    as: "h1",
                    className: "mb-4 mt-6 text-3xl font-semibold tracking-tight lg:text-4xl",
                }),
                h2: withProps(PlateElement$1, {
                    as: "h2",
                    className: "mb-4 mt-6 text-2xl font-semibold tracking-tight",
                }),
                h3: withProps(PlateElement$1, {
                    as: "h3",
                    className: "mb-4 mt-6 text-xl font-semibold tracking-tight",
                }),
            },
        },
        plugins: [
            BasicMarksPlugin,
            HeadingPlugin,
            linkPlugin,
            AlignPlugin.configure({
                inject: {
                    targetPlugins: [ParagraphPlugin.key, HeadingPlugin.key],
                },
            }),
            IndentPlugin.configure({
                inject: {
                    targetPlugins: [ParagraphPlugin.key, HEADING_KEYS.h1],
                },
            }),
            IndentListPlugin.configure({
                inject: {
                    targetPlugins: [ParagraphPlugin.key, HEADING_KEYS.h1],
                },
            }),
        ],
        value: typeof value === "string" && value.trim().length > 0
            ? () => {
                try {
                    const parsedValue = JSON.parse(value);
                    return Array.isArray(parsedValue) ? parsedValue : [];
                }
                catch (error) {
                    console.error("Error parsing editor value:", error);
                    return [];
                }
            }
            : [],
    });
};

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = React__default.forwardRef(({ label, ...props }, ref) => {
    return (jsxs(Fragment, { children: [jsx(DropdownMenuSeparator, { className: cn$1("hidden", `mb-0 shrink-0 peer-has-[[role=menuitem]]/menu-group:block
          peer-has-[[role=menuitemcheckbox]]/menu-group:block
          peer-has-[[role=option]]/menu-group:block`) }), jsxs(DropdownMenuPrimitive.Group, { ref: ref, ...props, className: cn$1("hidden", `peer/menu-group group/menu-group my-1.5 has-[[role=menuitem]]:block
          has-[[role=menuitemcheckbox]]:block has-[[role=option]]:block`, props.className), children: [label && jsx(DropdownMenuLabel, { children: label }), props.children] })] }));
});
const DropdownMenuRadioGroup = React__default.forwardRef(({ label, ...props }, ref) => {
    return (jsxs(Fragment, { children: [jsx(DropdownMenuSeparator, { className: cn$1("hidden", `mb-0 shrink-0 peer-has-[[role=menuitemradio]]/menu-group:block
          peer-has-[[role=option]]/menu-group:block`) }), jsxs(DropdownMenuPrimitive.RadioGroup, { ref: ref, ...props, className: cn$1("hidden", `peer/menu-group group/menu-group my-1.5 has-[[role=menuitemradio]]:block
          has-[[role=option]]:block`, props.className), children: [label && jsx(DropdownMenuLabel, { children: label }), props.children] })] }));
});
withRef(({ children, className, inset, ...props }, ref) => (jsxs(DropdownMenuPrimitive.SubTrigger, { ref: ref, className: cn$1(`focus:bg-accent data-[state=open]:bg-accent mx-1 flex cursor-default select-none
      items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`, inset && "pl-8", className), ...props, children: [children, jsx(ChevronRight, { className: "ml-auto" })] })));
withCn(DropdownMenuPrimitive.SubContent, "z-50 min-w-32 overflow-hidden rounded-md border bg-popover py-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2");
const DropdownMenuContentVariants = withProps(DropdownMenuPrimitive.Content, {
    className: cn$1("z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"),
    sideOffset: 4,
});
const DropdownMenuContent = withRef(({ ...props }, ref) => (jsx(DropdownMenuPrimitive.Portal, { children: jsx(DropdownMenuContentVariants, { ref: ref, onCloseAutoFocus: (e) => {
            e.preventDefault();
        }, ...props }) })));
const menuItemVariants = cva("relative mx-1 flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        inset: {
            true: "pl-8",
        },
    },
});
const DropdownMenuItem = withVariants(DropdownMenuPrimitive.Item, menuItemVariants, ["inset"]);
withRef(({ children, className, ...props }, ref) => (jsxs(DropdownMenuPrimitive.CheckboxItem, { ref: ref, className: cn$1(`focus:bg-accent focus:text-accent-foreground relative mx-1 flex select-none
      items-center gap-2 rounded-sm py-1 pl-8 pr-2 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&_svg]:size-4 [&_svg]:shrink-0`, "cursor-pointer", className), ...props, children: [jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: jsx(DropdownMenuPrimitive.ItemIndicator, { children: jsx(Check, { className: "size-4" }) }) }), children] })));
const DropdownMenuRadioItem = withRef(({ children, className, hideIcon, ...props }, ref) => (jsxs(DropdownMenuPrimitive.RadioItem, { ref: ref, className: cn$1(`focus:bg-accent focus:text-accent-foreground
      data-[state=checked]:text-accent-foreground relative mx-1 flex cursor-pointer
      select-none items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&_svg]:size-4`, className), ...props, children: [!hideIcon && (jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: jsx(DropdownMenuPrimitive.ItemIndicator, { children: jsx(Check, {}) }) })), children] })));
const dropdownMenuLabelVariants = cva(cn$1("mx-1 select-none px-2 pb-2 pt-1.5 text-xs font-semibold text-muted-foreground"), {
    variants: {
        inset: {
            true: "pl-8",
        },
    },
});
const DropdownMenuLabel = withVariants(DropdownMenuPrimitive.Label, dropdownMenuLabelVariants, ["inset"]);
const DropdownMenuSeparator = withCn(DropdownMenuPrimitive.Separator, "-mx-1 my-1 h-px bg-muted");
withCn(createPrimitiveElement("span"), "ml-auto text-xs tracking-widest opacity-60");
const useOpenState = () => {
    const [open, setOpen] = useState(false);
    const onOpenChange = useCallback((_value = !open) => {
        setOpen(_value);
    }, [open]);
    return {
        open,
        onOpenChange,
    };
};

const TooltipProvider = withProps(TooltipPrimitive.Provider, {
    delayDuration: 0,
    disableHoverableContent: true,
    skipDelayDuration: 0,
});
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;
const TooltipContent = withCn(withProps(TooltipPrimitive.Content, {
    sideOffset: 4,
}), "z-50 overflow-hidden rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-md");
function withTooltip(Component) {
    return React__default.forwardRef(function ExtendComponent({ delayDuration = 0, disableHoverableContent = true, skipDelayDuration = 0, tooltip, tooltipContentProps, tooltipProps, ...props }, ref) {
        const [mounted, setMounted] = React__default.useState(false);
        React__default.useEffect(() => {
            setMounted(true);
        }, []);
        const component = jsx(Component, { ref: ref, ...props });
        if (tooltip && mounted) {
            return (jsx(TooltipProvider, { delayDuration: delayDuration, disableHoverableContent: disableHoverableContent, skipDelayDuration: skipDelayDuration, children: jsxs(Tooltip, { ...tooltipProps, children: [jsx(TooltipTrigger, { asChild: true, children: component }), jsx(TooltipPortal, { children: jsx(TooltipContent, { ...tooltipContentProps, children: tooltip }) })] }) }));
        }
        return component;
    });
}

const Toolbar = withCn(ToolbarPrimitive.Root, "relative flex select-none items-center");
const ToolbarToggleGroup = withCn(ToolbarPrimitive.ToolbarToggleGroup, "flex items-center");
withCn(ToolbarPrimitive.Link, "font-medium underline underline-offset-4");
withCn(ToolbarPrimitive.Separator, "mx-2 my-1 w-px shrink-0 bg-border");
const toolbarButtonVariants = cva(cn$1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([data-icon])]:size-4"), {
    defaultVariants: {
        size: "sm",
        variant: "default",
    },
    variants: {
        size: {
            default: "h-10 px-3",
            lg: "h-11 px-5",
            sm: "h-7 px-2",
        },
        variant: {
            default: "bg-transparent hover:bg-muted hover:text-muted-foreground aria-checked:bg-accent aria-checked:text-accent-foreground",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        },
    },
});
const dropdownArrowVariants = cva(cn$1("inline-flex items-center justify-center rounded-r-md text-sm font-medium text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"), {
    defaultVariants: {
        size: "sm",
        variant: "default",
    },
    variants: {
        size: {
            default: "h-10 w-6",
            lg: "h-11 w-8",
            sm: "h-7 w-4",
        },
        variant: {
            default: "bg-transparent hover:bg-muted hover:text-muted-foreground aria-checked:bg-accent aria-checked:text-accent-foreground",
            outline: "border border-l-0 border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        },
    },
});
const ToolbarButton = withTooltip(React__default.forwardRef(({ children, className, isDropdown, pressed, size, variant, ...props }, ref) => {
    return typeof pressed === "boolean" ? (jsx(ToolbarToggleGroup, { disabled: props.disabled, value: "single", type: "single", children: jsx(ToolbarToggleItem, { ref: ref, className: cn$1(toolbarButtonVariants({
                size,
                variant,
            }), isDropdown && "justify-between gap-1 pr-1", className), value: pressed ? "single" : "", ...props, children: isDropdown ? (jsxs(Fragment, { children: [jsx("div", { className: "flex flex-1 items-center gap-2 whitespace-nowrap", children: children }), jsx("div", { children: jsx(ChevronDown, { className: "text-muted-foreground size-3.5", "data-icon": true }) })] })) : (children) }) })) : (jsx(ToolbarPrimitive.Button, { ref: ref, className: cn$1(toolbarButtonVariants({
            size,
            variant,
        }), isDropdown && "pr-1", className), ...props, children: children }));
}));
ToolbarButton.displayName = "ToolbarButton";
const ToolbarSplitButton = React__default.forwardRef(({ children, className, ...props }, ref) => {
    return (jsx(ToolbarButton, { ref: ref, className: cn$1("group flex gap-0 px-0 hover:bg-transparent", className), ...props, children: children }));
});
const ToolbarSplitButtonPrimary = withTooltip(React__default.forwardRef(({ children, className, size, variant, ...props }, ref) => {
    return (jsx("span", { ref: ref, className: cn$1(toolbarButtonVariants({
            size,
            variant,
        }), "rounded-r-none", `group-data-[pressed=true]:bg-accent
          group-data-[pressed=true]:text-accent-foreground`, className), ...props, children: children }));
}));
const ToolbarSplitButtonSecondary = React__default.forwardRef(({ className, size, variant, ...props }, ref) => {
    return (jsx("span", { ref: ref, className: cn$1(dropdownArrowVariants({
            size,
            variant,
        }), `group-data-[pressed=true]:bg-accent
        group-data-[pressed=true]:text-accent-foreground`, className), onClick: (e) => e.stopPropagation(), role: "button", ...props, children: jsx(ChevronDown, { className: "text-muted-foreground size-3.5", "data-icon": true }) }));
});
ToolbarSplitButton.displayName = "ToolbarButton";
const ToolbarToggleItem = withVariants(ToolbarPrimitive.ToggleItem, toolbarButtonVariants, ["variant", "size"]);
const ToolbarGroup = withRef(({ children, className }, ref) => {
    return (jsxs("div", { ref: ref, className: cn$1("group/toolbar-group", "relative hidden has-[button]:flex", className), children: [jsx("div", { className: "flex items-center", children: children }), jsx("div", { className: "mx-1.5 py-0.5 group-last/toolbar-group:!hidden", children: jsx(Separator, { orientation: "vertical" }) })] }));
});

function NumberedIndentListToolbarButton() {
    const editor = useEditorRef();
    const openState = useOpenState();
    const pressed = useEditorSelector((editor) => someIndentList(editor, [
        ListStyleType.Decimal,
        ListStyleType.LowerAlpha,
        ListStyleType.UpperAlpha,
        ListStyleType.LowerRoman,
        ListStyleType.UpperRoman,
    ]), []);
    return (jsxs(ToolbarSplitButton, { pressed: openState.open, children: [jsx(ToolbarSplitButtonPrimary, { className: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", onClick: () => toggleIndentList(editor, {
                    listStyleType: ListStyleType.Decimal,
                }), "data-state": pressed ? "on" : "off", tooltip: "Numbered List", children: jsx(ListOrdered, { className: "size-4" }) }), jsxs(DropdownMenu, { ...openState, modal: false, children: [jsx(DropdownMenuTrigger, { asChild: true, children: jsx(ToolbarSplitButtonSecondary, {}) }), jsx(DropdownMenuContent, { align: "start", alignOffset: -32, children: jsxs(DropdownMenuGroup, { children: [jsx(DropdownMenuItem, { onSelect: () => toggleIndentList(editor, {
                                        listStyleType: ListStyleType.Decimal,
                                    }), children: "Decimal (1, 2, 3)" }), jsx(DropdownMenuItem, { onSelect: () => toggleIndentList(editor, {
                                        listStyleType: ListStyleType.LowerAlpha,
                                    }), children: "Lower Alpha (a, b, c)" }), jsx(DropdownMenuItem, { onSelect: () => toggleIndentList(editor, {
                                        listStyleType: ListStyleType.UpperAlpha,
                                    }), children: "Upper Alpha (A, B, C)" }), jsx(DropdownMenuItem, { onSelect: () => toggleIndentList(editor, {
                                        listStyleType: ListStyleType.LowerRoman,
                                    }), children: "Lower Roman (i, ii, iii)" }), jsx(DropdownMenuItem, { onSelect: () => toggleIndentList(editor, {
                                        listStyleType: ListStyleType.UpperRoman,
                                    }), children: "Upper Roman (I, II, III)" })] }) })] })] }));
}
function BulletedIndentListToolbarButton() {
    const editor = useEditorRef();
    const openState = useOpenState();
    const pressed = useEditorSelector((editor) => someIndentList(editor, [
        ListStyleType.Disc,
        ListStyleType.Circle,
        ListStyleType.Square,
    ]), []);
    return (jsxs(ToolbarSplitButton, { pressed: openState.open, children: [jsx(ToolbarSplitButtonPrimary, { className: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", onClick: () => {
                    toggleIndentList(editor, {
                        listStyleType: ListStyleType.Disc,
                    });
                }, "data-state": pressed ? "on" : "off", tooltip: "Bulleted List", children: jsx(List, { className: "size-4" }) }), jsxs(DropdownMenu, { ...openState, modal: false, children: [jsx(DropdownMenuTrigger, { asChild: true, children: jsx(ToolbarSplitButtonSecondary, {}) }), jsx(DropdownMenuContent, { align: "start", alignOffset: -32, children: jsxs(DropdownMenuGroup, { children: [jsx(DropdownMenuItem, { onClick: () => toggleIndentList(editor, {
                                        listStyleType: ListStyleType.Disc,
                                    }), children: jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "size-2 rounded-full border border-current bg-current" }), "Default"] }) }), jsx(DropdownMenuItem, { onClick: () => toggleIndentList(editor, {
                                        listStyleType: ListStyleType.Circle,
                                    }), children: jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "size-2 rounded-full border border-current" }), "Circle"] }) }), jsx(DropdownMenuItem, { onClick: () => toggleIndentList(editor, {
                                        listStyleType: ListStyleType.Square,
                                    }), children: jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "size-2 border border-current bg-current" }), "Square"] }) })] }) })] })] }));
}

const LinkToolbarButton = withRef((rest, ref) => {
    const state = useLinkToolbarButtonState();
    const { props } = useLinkToolbarButton(state);
    return (jsx(ToolbarButton, { ref: ref, "data-plate-focus": true, tooltip: "Link", ...props, ...rest, children: jsx(Link, {}) }));
});

const MarkToolbarButton = withRef(({ clear, nodeType, ...rest }, ref) => {
    const state = useMarkToolbarButtonState({ clear, nodeType });
    const { props } = useMarkToolbarButton(state);
    return jsx(ToolbarButton, { ref: ref, ...props, ...rest });
});

const items = [
    {
        icon: AlignLeftIcon,
        value: "left",
    },
    {
        icon: AlignCenterIcon,
        value: "center",
    },
    {
        icon: AlignRightIcon,
        value: "right",
    },
    {
        icon: AlignJustifyIcon,
        value: "justify",
    },
];
function AlignDropdownMenu({ children, ...props }) {
    const state = useAlignDropdownMenuState();
    const { radioGroupProps } = useAlignDropdownMenu(state);
    const openState = useOpenState();
    const IconValue = items.find((item) => item.value === radioGroupProps.value)?.icon ??
        AlignLeftIcon;
    return (jsxs(DropdownMenu, { modal: false, ...openState, ...props, children: [jsx(DropdownMenuTrigger, { asChild: true, children: jsx(ToolbarButton, { pressed: openState.open, tooltip: "Align", isDropdown: true, children: jsx(IconValue, {}) }) }), jsx(DropdownMenuContent, { className: "min-w-0", align: "start", children: jsx(DropdownMenuRadioGroup, { ...radioGroupProps, children: items.map(({ icon: Icon, value: itemValue }) => (jsx(DropdownMenuRadioItem, { value: itemValue, hideIcon: true, children: jsx(Icon, {}) }, itemValue))) }) })] }));
}

function FixedToolbarButtons() {
    const readOnly = useEditorReadOnly();
    return (jsx("div", { className: "flex w-full", children: !readOnly && (jsxs(Toolbar, { children: [jsxs(ToolbarGroup, { children: [jsx(MarkToolbarButton, { nodeType: BoldPlugin.key, tooltip: "Bold (\u2318+B)", children: jsx(BoldIcon, {}) }), jsx(MarkToolbarButton, { nodeType: ItalicPlugin.key, tooltip: "Italic (\u2318+I)", children: jsx(ItalicIcon, {}) }), jsx(MarkToolbarButton, { nodeType: UnderlinePlugin.key, tooltip: "Underline (\u2318+U)", children: jsx(UnderlineIcon, {}) })] }), jsxs(ToolbarGroup, { children: [jsx(AlignDropdownMenu, {}), jsx(NumberedIndentListToolbarButton, {}), jsx(BulletedIndentListToolbarButton, {})] }), jsx(ToolbarGroup, { children: jsx(LinkToolbarButton, {}) })] })) }));
}

function _Editor({ onChange, value }) {
    const editor = useCreateEditor({ value });
    return (jsx("div", { className: "rounded-lg border p-1 dark:border-neutral-700", children: jsx(Plate, { editor: editor, onValueChange: (e) => onChange(JSON.stringify(e.value)), children: jsxs(EditorContainer, { children: [jsx(FixedToolbarButtons, {}), jsx(Separator, { className: "my-2" }), jsx("div", { className: "rtl hidden-scrollbar h-[calc(100vh-175px)] pr-5", children: jsx(Editor, { variant: "ai", placeholder: "\u0627\u06CC\u0646\u062C\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..." }) })] }) }) }));
}

const Pagination = ({ meta }) => {
    const [page, setPage] = useQueryState("page");
    const nextTimeout = useRef(null);
    const hasNextPage = meta?.hasNextPage ||
        (meta?.totalPage ? meta?.totalPage > meta?.currentPage : false);
    const [currentPage, setCurrentPage] = useState(meta?.page + 1 || Number(page) || 1);
    Math.ceil(meta?.itemCount / meta?.limit);
    const handlePrevious = () => {
        if (currentPage > 1) {
            setPage((+currentPage - 1).toString());
        }
    };
    const handleNext = () => {
        if (hasNextPage) {
            setPage((+currentPage + 1).toString());
        }
    };
    useEffect(() => {
        if (nextTimeout.current)
            clearTimeout(nextTimeout.current);
        nextTimeout.current = setTimeout(() => {
            if (page != currentPage.toString())
                setCurrentPage(Number(page) || 1);
        }, 200);
    }, [page]);
    return (jsx("div", { className: "flex items-center justify-end gap-2", children: jsxs("div", { className: "flex items-center gap-x-2", children: [jsx(Button, { className: "h-8 text-xs", variant: "outline", onClick: handlePrevious, disabled: currentPage === 1, children: "\u0635\u0641\u062D\u0647 \u0642\u0628\u0644\u06CC" }), jsx(Input, { type: "number", disabled: !hasNextPage, className: "no-spinner h-8 w-10 px-1 text-center", value: currentPage.toString(), onInput: (e) => setCurrentPage(e.target.value), onKeyDown: (e) => e.keyCode == 13 ? setPage(currentPage.toString()) : null }), jsx(Button, { className: "h-8 text-xs", variant: "outline", onClick: handleNext, disabled: !hasNextPage, children: "\u0635\u0641\u062D\u0647 \u0628\u0639\u062F\u06CC" })] }) }));
};

const SheetGridCard = ({ children, className, onClick }) => {
    return (jsx("div", { className: `${className} bg-primary/20 relative flex w-full flex-1 items-center
        rounded-[16px] p-4 text-center dark:bg-[#1E1E21]`, onClick: onClick, children: children }));
};
const SheetGrid = ({ left, right }) => {
    return (jsx("div", { className: "flex items-center justify-between", children: jsxs("div", { className: "flex w-full", children: [jsx("div", { className: "ml-[5px] flex h-[243px] flex-1 flex-col items-center justify-center gap-[10px]", children: right.map((item, index) => {
                        if (!item)
                            return null;
                        return (jsx(SheetGridCard, { className: `flex-col justify-center gap-[10px] ${item.onClick && "cursor-pointer"}`, onClick: item.onClick, children: item.render && item.render() }, `right-sheetgrid-item-${index}`));
                    }) }), jsx("div", { className: "mr-[5px] flex flex-1 flex-col items-center justify-center gap-[10px]", children: left.map((item, index) => {
                        if (!item)
                            return null;
                        return (jsx(SheetGridCard, { className: `justify-between ${item.onClick && "cursor-pointer"}`, onClick: item.onClick, children: item.render && item.render() }, `left-sheetgrid-item-${index}`));
                    }) })] }) }));
};

const Table = React.forwardRef(({ className, ...props }, ref) => (jsx("table", { ref: ref, className: cn("w-full caption-bottom text-sm", className), ...props })));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (jsx("thead", { ref: ref, className: `${cn("[&_tr]:border-b", className)} bg-background sticky top-0 z-[10] h-[40px]`, ...props })));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => (jsx("tbody", { ref: ref, className: cn("[&_tr:last-child]:border-0", className), ...props })));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (jsx("tfoot", { ref: ref, className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className), ...props })));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => (jsx("tr", { ref: ref, className: cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors ", className), ...props })));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => (jsx("th", { ref: ref, className: cn(`text-muted-foreground h-10 px-2 text-left align-middle font-medium
      [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] `, className), ...props })));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => (jsx("td", { ref: ref, className: cn("align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props })));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (jsx("caption", { ref: ref, className: cn("text-muted-foreground mt-4 text-sm", className), ...props })));
TableCaption.displayName = "TableCaption";

const handlePreviousRowSession = () => {
    const previousRowName = "previous-selected-table-row";
    const previousRowSession = sessionStorage.getItem(previousRowName);
    const parsedRowSession = previousRowSession
        ? JSON.parse(previousRowSession)
        : { [window.location.pathname]: null };
    return {
        get: () => parsedRowSession[window.location.pathname] || null,
        set: (keyValue) => {
            const rowSelectedOfPage = {
                ...parsedRowSession,
                [window.location.pathname]: keyValue,
            };
            sessionStorage.setItem(previousRowName, JSON.stringify(rowSelectedOfPage));
        },
    };
};
const _Table = ({ data, columns, caption, onRow, className, loading = false, hrefPattern, rowClassName, }) => {
    const [previousRow, setPreviousRow] = useState("");
    const memoizedPreviousRow = useMemo(() => previousRow, [previousRow]);
    const tableId = useMemo(() => Math.floor(Math.random() * 10000), []);
    useEffect(() => {
        const previousRowValue = handlePreviousRowSession().get();
        if (previousRowValue)
            setPreviousRow(previousRowValue);
        if (data?.length) {
            const tableContainer = document.querySelector(`#table-${tableId}`);
            tableContainer?.scroll({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [data, tableId]);
    const handleTableRowClick = useCallback((onRowHandler, tableRowKey, item) => {
        if (onRowHandler) {
            setPreviousRow(tableRowKey);
            handlePreviousRowSession().set(tableRowKey);
            setTimeout(() => onRowHandler(item), 0);
        }
    }, []);
    const generateHref = (item) => {
        if (!hrefPattern)
            return String(item.id);
        const id = hrefPattern.split(":")[1];
        const regex = /\[([^\]]+)\]/;
        const findChild = hrefPattern.match(regex);
        return `?${hrefPattern
            .replace(`:${id}`, findChild ? item[findChild[1]][id] : item[id])
            .replace(regex, "")}`;
    };
    return (jsx("div", { id: `table-${tableId}`, className: `${className} rtl hidden-scrollbar h-[calc(100vh-167px)] rounded-2xl border
        border-neutral-300 dark:border-neutral-700`, children: jsxs("div", { className: "relative h-full w-full", children: [loading && (jsx("div", { className: "absolute inset-0 z-50 flex items-center justify-center bg-background/50", children: jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }) })), jsxs(Table, { children: [caption && jsx(TableCaption, { children: caption }), jsx(TableHeader, { children: jsx(TableRow, { children: columns.map((column, i) => (jsx(TableHead, { className: `text-right ${column.className}`, children: column.title }, i))) }) }), jsx(TableBody, { children: data?.map((item, rowIndex) => {
                                const tableRowKey = `table-row-${item.id}-${rowIndex}`;
                                const previousRowClassName = memoizedPreviousRow === tableRowKey ? "bg-red-800/10" : "";
                                return (jsx(TableRow, { className: `${previousRowClassName} hover:bg-secondary/40 relative transition-all ${"link" in item ? "cursor-pointer" : ""} ${rowClassName}`, onClick: () => handleTableRowClick(onRow, tableRowKey, item), children: columns.map((column, columnIndex) => (jsx(TableCell, { className: "text-center", children: jsx("a", { href: generateHref(item), onClick: (e) => e.preventDefault(), className: `flex h-14 cursor-pointer items-center ${column.align}`, children: column.render
                                                ? column.render(column.dataIndex ? item[column.dataIndex] : null, item, rowIndex, data || [])
                                                : column.dataIndex && item[column.dataIndex] }) }, `table-column-${columnIndex}`))) }, tableRowKey));
                            }) })] })] }) }));
};

const TableOptions = () => {
    return jsx("div", { className: "flex", children: "Hi there" });
};

const Tag = ({ children, tooltipText, className = "" }) => {
    return (jsx(TooltipProvider$1, { children: jsxs(Tooltip$1, { children: [jsx(TooltipTrigger$1, { asChild: true, children: jsx("div", { className: `${className} bg-secondary text-white" flex h-[22px] w-[170px] items-center
              justify-center rounded border text-xs dark:border-neutral-700 `, children: children }) }), tooltipText && (jsx(TooltipContent$1, { children: jsx("p", { children: tooltipText }) }))] }) }));
};

const TooltipGlobal = ({ trigger, content, className }) => {
    return (jsx(TooltipProvider$1, { children: jsxs(Tooltip$1, { children: [jsx(TooltipTrigger$1, { asChild: true, children: trigger }), jsx(TooltipContent$1, { className: className, children: content })] }) }));
};

moment.loadPersian({
    usePersianDigits: true,
});
function getDateDifference(date, format) {
    // const Colors = {
    //   امروز: "#eab308",
    //   دیروز: "#7f1d1d",
    //   فردا: "#22c55e",
    // };
    // const currentTime = new Date();
    date = new Date(date);
    if (isNaN(date.getTime()))
        return "تاریخ معتبر نیست";
    return moment(date).format(format || "jDD jMMMM jYYYY - hh:mm");
}

const parseArrayToHTML = (data) => {
    return data?.map((item, index) => {
        const { type, align, children } = item;
        const style = { textAlign: align };
        switch (type) {
            case "p":
                return (jsx("p", { style: style, children: children.map((child, childIndex) => {
                        if (child.type == "a") {
                            return (jsxs("a", { href: child.url, target: "_blank", className: "text-primary flex items-center gap-2", children: [jsx(Link, { className: "size-4" }), " ", child.children[0].text] }));
                        }
                        return (jsx("span", { className: `${child.bold && "font-bold"} ${child.italic && "italic"} ${child.underline &&
                                "underline"}`, children: child.text == "\n" || child.text == "" ? jsx("br", {}) : child.text }, childIndex));
                    }) }, index));
            default:
                return null;
        }
    });
};
const parseArrayToString = (data) => {
    return data
        .map((item) => {
        return item.children.map((child) => child.text).join("");
    })
        .join("\n");
};

export { AccordionComponent as Accordion, AnimatedGradientText, Api, AspectRatio, PicGroup as Avatar, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, ComboboxDemo as Combobox, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, Copy, CustomDropdownMenu, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu$1 as DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent$1 as DropdownMenuContent, DropdownMenuGroup$1 as DropdownMenuGroup, DropdownMenuItem$1 as DropdownMenuItem, DropdownMenuLabel$1 as DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup$1 as DropdownMenuRadioGroup, DropdownMenuRadioItem$1 as DropdownMenuRadioItem, DropdownMenuSeparator$1 as DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger$1 as DropdownMenuTrigger, Editable, _Editor as Editor, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, OperatorsSelect, Pagination, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator$1 as Separator, avatar as ShadCNAvatar, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetGrid, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, Switch, _Table as Table, TableOptions, Tabs, TabsContent, TabsList, TabsTrigger, Tag, Textarea, ThemeProvider, Toaster, Tooltip$1 as Tooltip, TooltipContent$1 as TooltipContent, TooltipGlobal, TooltipProvider$1 as TooltipProvider, TooltipTrigger$1 as TooltipTrigger, badgeVariants, buttonVariants$2 as buttonVariants, getDateDifference, parseArrayToHTML, parseArrayToString, useFormField, useSidebar, useTheme, useThemeStore };
