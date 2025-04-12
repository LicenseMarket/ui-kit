'use strict';

var AspectRatioPrimitive = require('@radix-ui/react-aspect-ratio');
var jsxRuntime = require('react/jsx-runtime');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var React = require('react');
var reactSlot = require('@radix-ui/react-slot');
var reactIcons = require('@radix-ui/react-icons');
var lucideReact = require('lucide-react');
var reactDayPicker = require('react-day-picker');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var cmdk = require('cmdk');
var DialogPrimitive = require('@radix-ui/react-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var reactHookForm = require('react-hook-form');
var LabelPrimitive = require('@radix-ui/react-label');
var inputOtp = require('input-otp');
var PopoverPrimitive = require('@radix-ui/react-popover');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var SelectPrimitive = require('@radix-ui/react-select');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var nextThemes = require('next-themes');
var sonner = require('sonner');
var SwitchPrimitives = require('@radix-ui/react-switch');
var TabsPrimitive = require('@radix-ui/react-tabs');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var zustand = require('zustand');
var reactDirection = require('@radix-ui/react-direction');
require('axios');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var react = require('@udecode/plate-common/react');
var cn$1 = require('@udecode/cn');
var react$3 = require('@udecode/plate-basic-marks/react');
var react$2 = require('@udecode/plate-link/react');
var react$1 = require('@udecode/plate-selection/react');
var plateFloating = require('@udecode/plate-floating');
var react$5 = require('@udecode/plate-alignment/react');
var react$4 = require('@udecode/plate-heading/react');
var react$6 = require('@udecode/plate-indent/react');
var react$7 = require('@udecode/plate-indent-list/react');
var plateHeading = require('@udecode/plate-heading');
var plateIndentList = require('@udecode/plate-indent-list');
var ToolbarPrimitive = require('@radix-ui/react-toolbar');
var nuqs = require('nuqs');
var moment = require('moment-jalaali');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var AspectRatioPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(AspectRatioPrimitive);
var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(CheckboxPrimitive);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(CollapsiblePrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(DialogPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(DropdownMenuPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(LabelPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(PopoverPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(RadioGroupPrimitive);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(ScrollAreaPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(SelectPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(SeparatorPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(TooltipPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespaceDefault(SwitchPrimitives);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(TabsPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(AvatarPrimitive);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(AccordionPrimitive);
var ToolbarPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(ToolbarPrimitive);

const AspectRatio = AspectRatioPrimitive__namespace.Root;

function cn(...inputs) {
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}

const badgeVariants = classVarianceAuthority.cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return (jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props }));
}

const Breadcrumb = React__namespace.forwardRef(({ ...props }, ref) => jsxRuntime.jsx("nav", { ref: ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("ol", { ref: ref, className: cn("text-muted-foreground flex flex-wrap items-center break-words text-sm sm:gap-2.5", className), ...props })));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("li", { ref: ref, className: cn("inline-flex items-center gap-1.5", className), ...props })));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React__namespace.forwardRef(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "a";
    return (jsxRuntime.jsx(Comp, { ref: ref, className: cn("hover:text-foreground transition-colors", className), ...props }));
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("span", { ref: ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: cn("text-foreground font-normal", className), ...props })));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props }) => (jsxRuntime.jsx("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className), ...props, children: children ?? jsxRuntime.jsx(reactIcons.ChevronLeftIcon, {}) }));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({ className, ...props }) => (jsxRuntime.jsxs("span", { role: "presentation", "aria-hidden": "true", className: cn("flex h-9 w-9 items-center justify-center", className), ...props, children: [jsxRuntime.jsx(reactIcons.DotsHorizontalIcon, { className: "h-4 w-4" }), jsxRuntime.jsx("span", { className: "sr-only", children: "More" })] }));
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

const buttonVariants$2 = classVarianceAuthority.cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = React__namespace.forwardRef(({ className, variant, loading, disabled, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsxs(Comp, { disabled: disabled || loading, className: cn(buttonVariants$2({ className, variant, size })), ref: ref, ...props, children: [loading && jsxRuntime.jsx(lucideReact.Loader2, { className: "animate-spin" }), props.children] }));
});
Button.displayName = "Button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return (jsxRuntime.jsx(reactDayPicker.DayPicker, { showOutsideDays: showOutsideDays, className: cn("p-3", className), classNames: {
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
            IconLeft: ({ className, ...props }) => (jsxRuntime.jsx(lucideReact.ChevronLeft, { className: cn("h-4 w-4", className), ...props })),
            IconRight: ({ className, ...props }) => (jsxRuntime.jsx(lucideReact.ChevronRight, { className: cn("h-4 w-4", className), ...props })),
        }, ...props }));
}
Calendar.displayName = "Calendar";

const Card = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("bg-card text-card-foreground rounded-xl border shadow", className), ...props })));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("font-semibold leading-none tracking-tight", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("text-muted-foreground text-sm", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";

const Checkbox = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(CheckboxPrimitive__namespace.Root, { ref: ref, className: cn(`border-primary ring-offset-background focus-visible:ring-ring
      data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground
      peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
      disabled:opacity-50`, className), ...props, children: jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, { className: cn("flex items-center justify-center text-current"), children: jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) })));
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;

const Collapsible = CollapsiblePrimitive__namespace.Root;
const CollapsibleTrigger = CollapsiblePrimitive__namespace.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive__namespace.CollapsibleContent;

const Dialog = DialogPrimitive__namespace.Root;
const DialogTrigger = DialogPrimitive__namespace.Trigger;
const DialogPortal = DialogPrimitive__namespace.Portal;
const DialogClose = DialogPrimitive__namespace.Close;
const DialogOverlay = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Overlay, { ref: ref, className: cn(`data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50
      bg-black/80`, className), ...props })));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
const DialogContent = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(DialogPortal, { children: [jsxRuntime.jsx(DialogOverlay, {}), jsxRuntime.jsx(DialogPrimitive__namespace.Content, { ref: ref, className: cn(`bg-background data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        data-[state=closed]:slide-out-to-left-1/2
        data-[state=closed]:slide-out-to-top-[48%]
        data-[state=open]:slide-in-from-left-1/2
        data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid
        w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border p-6
        shadow-lg duration-200 sm:rounded-lg`, className), ...props, children: children })] })));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
const DialogHeader = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-right", className), ...props }));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Title, { ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props })));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
const DialogDescription = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref: ref, className: cn("text-muted-foreground text-sm", className), ...props })));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;

const Command = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command, { ref: ref, className: cn(`bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden
      rounded-md`, className), ...props })));
Command.displayName = cmdk.Command.displayName;
const CommandDialog = ({ children, ...props }) => {
    return (jsxRuntime.jsx(Dialog, { ...props, children: jsxRuntime.jsx(DialogContent, { className: cn("w-[500px] overflow-hidden p-0", props.className), children: jsxRuntime.jsx(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2\n            [&_[cmdk-group-heading]]:font-medium\n            [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2\n            [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5\n            [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3\n            [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: children }) }) }));
};
const CommandInput = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [jsxRuntime.jsx(reactIcons.MagnifyingGlassIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }), jsxRuntime.jsx(cmdk.Command.Input, { ref: ref, className: cn(`placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent
        py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50`, className), ...props })] })));
CommandInput.displayName = cmdk.Command.Input.displayName;
const CommandList = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command.List, { ref: ref, className: cn("rtl overflow-y-auto overflow-x-hidden", className), ...props })));
CommandList.displayName = cmdk.Command.List.displayName;
const CommandEmpty = React__namespace.forwardRef((props, ref) => (jsxRuntime.jsx(cmdk.Command.Empty, { ref: ref, className: "py-6 text-center text-sm", ...props })));
CommandEmpty.displayName = cmdk.Command.Empty.displayName;
const CommandGroup = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command.Group, { ref: ref, className: cn(`text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden
      p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5
      [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium`, className), ...props })));
CommandGroup.displayName = cmdk.Command.Group.displayName;
const CommandSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command.Separator, { ref: ref, className: cn("bg-border -mx-1 h-px", className), ...props })));
CommandSeparator.displayName = cmdk.Command.Separator.displayName;
const CommandItem = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command.Item, { ref: ref, className: cn(`data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground
      relative flex cursor-default select-none items-center gap-2 rounded-sm px-2
      py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none
      data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4
      [&_svg]:shrink-0`, className), ...props })));
CommandItem.displayName = cmdk.Command.Item.displayName;
const CommandShortcut = ({ className, ...props }) => {
    return (jsxRuntime.jsx("span", { className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className), ...props }));
};
CommandShortcut.displayName = "CommandShortcut";

const DropdownMenu$1 = DropdownMenuPrimitive__namespace.Root;
const DropdownMenuTrigger$1 = DropdownMenuPrimitive__namespace.Trigger;
const DropdownMenuGroup$1 = DropdownMenuPrimitive__namespace.Group;
const DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
const DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
const DropdownMenuRadioGroup$1 = DropdownMenuPrimitive__namespace.RadioGroup;
const DropdownMenuSubTrigger = React__namespace.forwardRef(({ className, inset, children, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.SubTrigger, { ref: ref, className: cn(`focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none
      items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none
      [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`, inset && "pl-8", className), ...props, children: [children, jsxRuntime.jsx(reactIcons.ChevronLeftIcon, { className: "mr-auto" })] })));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive__namespace.SubTrigger.displayName;
const DropdownMenuSubContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.SubContent, { ref: ref, className: cn(`bg-popover text-popover-foreground data-[state=open]:animate-in
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
      data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
      data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
      data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden
      rounded-md border p-1 shadow-lg`, className), ...props })));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive__namespace.SubContent.displayName;
const DropdownMenuContent$1 = React__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Content, { ref: ref, sideOffset: sideOffset, className: cn(`bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md
        border p-1 shadow-md`, `data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`, className), ...props }) })));
DropdownMenuContent$1.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
const DropdownMenuItem$1 = React__namespace.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Item, { ref: ref, className: cn(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default
      select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&>svg]:size-4 [&>svg]:shrink-0`, inset && "pl-8", className), ...props })));
DropdownMenuItem$1.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
const DropdownMenuCheckboxItem = React__namespace.forwardRef(({ className, children, checked, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.CheckboxItem, { ref: ref, className: cn(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default
      select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, className), checked: checked, ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(reactIcons.CheckIcon, { className: "h-4 w-4" }) }) }), children] })));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
const DropdownMenuRadioItem$1 = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.RadioItem, { ref: ref, className: cn(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default
      select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, className), ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(reactIcons.DotFilledIcon, { className: "h-2 w-2 fill-current" }) }) }), children] })));
DropdownMenuRadioItem$1.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
const DropdownMenuLabel$1 = React__namespace.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
DropdownMenuLabel$1.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
const DropdownMenuSeparator$1 = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Separator, { ref: ref, className: cn("bg-muted -mx-1 my-1 h-px", className), ...props })));
DropdownMenuSeparator$1.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props }) => {
    return (jsxRuntime.jsx("span", { className: cn("mr-auto text-xs tracking-widest opacity-60", className), ...props }));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

const labelVariants = classVarianceAuthority.cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(LabelPrimitive__namespace.Root, { ref: ref, className: cn(labelVariants(), className), ...props })));
Label.displayName = LabelPrimitive__namespace.Root.displayName;

const Form = reactHookForm.FormProvider;
const FormFieldContext = React__namespace.createContext({});
const FormField = ({ ...props }) => {
    return (jsxRuntime.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: jsxRuntime.jsx(reactHookForm.Controller, { ...props }) }));
};
const useFormField = () => {
    const fieldContext = React__namespace.useContext(FormFieldContext);
    const itemContext = React__namespace.useContext(FormItemContext);
    const { getFieldState, formState } = reactHookForm.useFormContext();
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
const FormItemContext = React__namespace.createContext({});
const FormItem = React__namespace.forwardRef(({ className, ...props }, ref) => {
    const id = React__namespace.useId();
    return (jsxRuntime.jsx(FormItemContext.Provider, { value: { id }, children: jsxRuntime.jsx("div", { ref: ref, className: cn("space-y-2", className), ...props }) }));
});
FormItem.displayName = "FormItem";
const FormLabel = React__namespace.forwardRef(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return (jsxRuntime.jsx(Label, { ref: ref, className: cn(error && "text-destructive", className), htmlFor: formItemId, ...props }));
});
FormLabel.displayName = "FormLabel";
const FormControl = React__namespace.forwardRef(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (jsxRuntime.jsx(reactSlot.Slot, { ref: ref, id: formItemId, "aria-describedby": !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error, ...props }));
});
FormControl.displayName = "FormControl";
const FormDescription = React__namespace.forwardRef(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return (jsxRuntime.jsx("p", { ref: ref, id: formDescriptionId, className: cn("text-muted-foreground text-[0.8rem]", className), ...props }));
});
FormDescription.displayName = "FormDescription";
const FormMessage = React__namespace.forwardRef(({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return (jsxRuntime.jsx("p", { ref: ref, id: formMessageId, className: cn("text-destructive text-[0.8rem] font-medium", className), ...props, children: body }));
});
FormMessage.displayName = "FormMessage";

const Input = React__namespace.forwardRef(({ className, type, ...props }, ref) => {
    return (jsxRuntime.jsx("input", { type: type, className: cn(`border-input file:text-foreground placeholder:text-muted-foreground
          focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3
          py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent
          file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1
          disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`, className), ref: ref, ...props }));
});
Input.displayName = "Input";

const InputOTP = React__namespace.forwardRef(({ className, containerClassName, ...props }, ref) => (jsxRuntime.jsx(inputOtp.OTPInput, { ref: ref, containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName), className: cn("disabled:cursor-not-allowed", className), ...props })));
InputOTP.displayName = "InputOTP";
const InputOTPGroup = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex items-center", className), ...props })));
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = React__namespace.forwardRef(({ index, className, ...props }, ref) => {
    const inputOTPContext = React__namespace.useContext(inputOtp.OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
    return (jsxRuntime.jsxs("div", { ref: ref, className: cn(`border-input relative flex h-10 w-10 items-center justify-center border-y
        border-r text-sm transition-all first:rounded-l-md first:border-l
        last:rounded-r-md`, isActive && "ring-ring ring-offset-background z-10 ring-2", className), ...props, children: [char, hasFakeCaret && (jsxRuntime.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: jsxRuntime.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) }))] }));
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = React__namespace.forwardRef(({ ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, role: "separator", ...props, children: jsxRuntime.jsx(lucideReact.Dot, {}) })));
InputOTPSeparator.displayName = "InputOTPSeparator";

const Popover = PopoverPrimitive__namespace.Root;
const PopoverTrigger = PopoverPrimitive__namespace.Trigger;
const PopoverAnchor = PopoverPrimitive__namespace.Anchor;
const PopoverContent = React__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: jsxRuntime.jsx(PopoverPrimitive__namespace.Content, { ref: ref, align: align, sideOffset: sideOffset, className: cn(`bg-popover text-popover-foreground data-[state=open]:animate-in
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 relative z-50 w-72 rounded-md border p-4
        shadow-md outline-none`, className), ...props }) })));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;

const RadioGroup = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx(RadioGroupPrimitive__namespace.Root, { className: cn("grid gap-2", className), ...props, ref: ref }));
});
RadioGroup.displayName = RadioGroupPrimitive__namespace.Root.displayName;
const RadioGroupItem = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx(RadioGroupPrimitive__namespace.Item, { ref: ref, className: cn(`border-foreground text-foreground focus-visible:ring-ring aspect-square h-[14px]
        w-[14px] rounded-full border shadow focus:outline-none focus-visible:ring-1
        disabled:cursor-not-allowed disabled:opacity-50`, className), ...props, children: jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: jsxRuntime.jsx(reactIcons.DotFilledIcon, { className: "fill-foreground h-[12px] w-[12px]" }) }) }));
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;

const ScrollArea = React__namespace.forwardRef(({ className, children, dir = "ltr", ...props }, ref) => (jsxRuntime.jsxs(ScrollAreaPrimitive__namespace.Root, { ref: ref, dir: dir, className: cn("relative overflow-hidden", className), ...props, children: [jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Viewport, { className: "h-full w-full rounded-[inherit]", children: children }), jsxRuntime.jsx(ScrollBar, { dir: dir }), jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})] })));
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
const ScrollBar = React__namespace.forwardRef(({ className, orientation = "vertical", dir = "ltr", ...props }, ref) => (jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaScrollbar, { ref: ref, orientation: orientation, dir: dir, className: cn("flex touch-none select-none transition-colors", orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]", dir === "rtl" &&
        orientation === "vertical" &&
        "rtl:border-r rtl:border-r-transparent", // Example of RTL-specific styles
    className), ...props, children: jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaThumb, { className: "bg-border relative flex-1 rounded-full" }) })));
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;

const Select = SelectPrimitive__namespace.Root;
const SelectGroup = SelectPrimitive__namespace.Group;
const SelectValue = SelectPrimitive__namespace.Value;
const SelectTrigger = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(SelectPrimitive__namespace.Trigger, { ref: ref, className: cn(` ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex
      h-9 w-full items-center justify-between whitespace-nowrap rounded-md border
      border-[#FFFFFF] bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none
      focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50
      dark:border-[#4A5565] [&>span]:line-clamp-1`, className), ...props, children: [children, jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: jsxRuntime.jsx(reactIcons.ChevronDownIcon, { className: "h-4 w-4 opacity-50" }) })] })));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
const SelectScrollUpButton = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.ScrollUpButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: jsxRuntime.jsx(reactIcons.ChevronUpIcon, { className: "h-4 w-4" }) })));
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
const SelectScrollDownButton = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.ScrollDownButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: jsxRuntime.jsx(reactIcons.ChevronDownIcon, { className: "h-4 w-4" }) })));
SelectScrollDownButton.displayName =
    SelectPrimitive__namespace.ScrollDownButton.displayName;
const SelectContent = React__namespace.forwardRef(({ className, children, position = "popper", ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: jsxRuntime.jsxs(SelectPrimitive__namespace.Content, { ref: ref, className: cn(`bg-popover text-popover-foreground data-[state=open]:animate-in
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem]
        overflow-hidden rounded-md border shadow-md`, position === "popper" &&
            `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1
          data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`, className), position: position, ...props, children: [jsxRuntime.jsx(SelectScrollUpButton, {}), jsxRuntime.jsx(SelectPrimitive__namespace.Viewport, { className: cn("p-1", position === "popper" &&
                    `h-[var(--radix-select-trigger-height)] w-full
            min-w-[var(--radix-select-trigger-width)]`), children: children }), jsxRuntime.jsx(SelectScrollDownButton, {})] }) })));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
const SelectLabel = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", className), ...props })));
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
const SelectItem = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(SelectPrimitive__namespace.Item, { ref: ref, className: cn(`focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default
      select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50`, className), ...props, children: [jsxRuntime.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(reactIcons.CheckIcon, { className: "h-4 w-4" }) }) }), jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children: children })] })));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
const SelectSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Separator, { ref: ref, className: cn("bg-muted -mx-1 my-1 h-px", className), ...props })));
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;

const Separator$1 = React__namespace.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (jsxRuntime.jsx(SeparatorPrimitive__namespace.Root, { ref: ref, decorative: decorative, orientation: orientation, className: cn("bg-border shrink-0", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props })));
Separator$1.displayName = SeparatorPrimitive__namespace.Root.displayName;

const SheetHeader$1 = ({ title = "", buttonTitle = "", dropdownTitle = "", text, side, copyText, buttonProps = {
    children: undefined,
}, menuTriggerProps = {}, menuIconProps = {}, renderMenu, className, }) => {
    return (jsxRuntime.jsxs("div", { className: `${className} bg-background rtl flex h-[70px] justify-between border-b p-4 `, children: [jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("h3", { className: "text-right text-lg font-semibold leading-8", children: title }), copyText && jsxRuntime.jsx("div", { className: "text-sm text-gray-400", children: copyText })] }), jsxRuntime.jsxs("div", { className: "flex justify-end", children: [buttonTitle ? (jsxRuntime.jsx(Button, { className: renderMenu && "ml-3", ...buttonProps, children: buttonTitle })) : buttonProps?.children ? (buttonProps.children) : null, renderMenu && (jsxRuntime.jsxs(DropdownMenu$1, { children: [jsxRuntime.jsx(DropdownMenuTrigger$1, { ...menuTriggerProps, children: jsxRuntime.jsx(reactIcons.DotsVerticalIcon, { width: 22, height: 22, ...menuIconProps }) }), jsxRuntime.jsxs(DropdownMenuContent$1, { className: "rtl", side: side, children: [text && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DropdownMenuLabel$1, { children: dropdownTitle }), jsxRuntime.jsx(DropdownMenuSeparator$1, {})] })), renderMenu && renderMenu()] })] }))] })] }));
};

const Sheet = DialogPrimitive__namespace.Root;
const SheetTrigger = DialogPrimitive__namespace.Trigger;
const SheetClose = DialogPrimitive__namespace.Close;
const SheetPortal = DialogPrimitive__namespace.Portal;
const SheetOverlay = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx(DialogPrimitive__namespace.Overlay, { className: cn(`bg-black-40 data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50`, className), ...props, ref: ref }));
});
SheetOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
const sheetVariants = classVarianceAuthority.cva(`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out`, {
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
const SheetContent = React__namespace.forwardRef(({ side = "right", className, nestedOpen = "", nestedClass, children, ...props }, ref) => {
    return (jsxRuntime.jsxs(SheetPortal, { children: [jsxRuntime.jsx(SheetOverlay, {}), jsxRuntime.jsx(DialogPrimitive__namespace.Content, { ref: ref, className: `bg-background ${nestedOpen ? nestedClass : ""} ${cn(sheetVariants({ side }), className)}`, ...props, children: children })] }));
});
SheetContent.displayName = DialogPrimitive__namespace.Content.displayName;
const SheetHeader = ({ ...props }) => (jsxRuntime.jsx(SheetHeader$1, { ...props }));
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Title, { ref: ref, className: cn("text-foreground text-lg font-semibold", className), ...props })));
SheetTitle.displayName = DialogPrimitive__namespace.Title.displayName;
const SheetDescription = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref: ref, className: cn("text-muted-foreground text-sm", className), ...props })));
SheetDescription.displayName = DialogPrimitive__namespace.Description.displayName;

const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState(undefined);
    React.useEffect(() => {
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
    return (jsxRuntime.jsx("div", { className: cn("animate-pulse rounded-md bg-[#99999910]", className), ...props }));
}

const TooltipProvider$1 = TooltipPrimitive__namespace.Provider;
const Tooltip$1 = TooltipPrimitive__namespace.Root;
const TooltipTrigger$1 = TooltipPrimitive__namespace.Trigger;
const TooltipContent$1 = React__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: jsxRuntime.jsx(TooltipPrimitive__namespace.Content, { ref: ref, sideOffset: sideOffset, className: cn(`bg-background text-background-foreground animate-in fade-in-0 zoom-in-95
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border
        px-3 py-1.5 text-xs`, className), ...props }) })));
TooltipContent$1.displayName = TooltipPrimitive__namespace.Content.displayName;

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "18rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "5rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React__namespace.createContext(null);
function useSidebar() {
    const context = React__namespace.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
const SidebarProvider = React__namespace.forwardRef(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React__namespace.useCallback((value) => {
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
    const toggleSidebar = React__namespace.useCallback(() => {
        return isMobile
            ? setOpenMobile((open) => !open)
            : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);
    // Adds a keyboard shortcut to toggle the sidebar.
    React__namespace.useEffect(() => {
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
    const contextValue = React__namespace.useMemo(() => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
    }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
    return (jsxRuntime.jsx(SidebarContext.Provider, { value: contextValue, children: jsxRuntime.jsx(TooltipProvider$1, { delayDuration: 0, children: jsxRuntime.jsx("div", { style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style,
                }, className: cn(`group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh
              w-full`, className), ref: ref, ...props, children: children }) }) }));
});
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = React__namespace.forwardRef(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return (jsxRuntime.jsx("div", { className: cn("bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col", className), ref: ref, ...props, children: children }));
    }
    if (isMobile) {
        return (jsxRuntime.jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: jsxRuntime.jsx(SheetContent, { "data-sidebar": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden", style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
                }, side: side, children: jsxRuntime.jsx("div", { className: "flex h-full w-full flex-col", children: children }) }) }));
    }
    return (jsxRuntime.jsxs("div", { ref: ref, className: "text-sidebar-foreground group peer hidden md:block", "data-state": state, "data-collapsible": state === "collapsed" ? collapsible : "", "data-variant": variant, "data-side": side, children: [jsxRuntime.jsx("div", { className: cn(`relative h-svh w-[--sidebar-width] bg-transparent transition-[width]
            duration-200 ease-linear`, "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset"
                    ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                    : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]") }), jsxRuntime.jsx("div", { className: cn(`fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width]
            transition-[left,right,width] duration-200 ease-linear md:flex`, side === "left"
                    ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                    : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", 
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset"
                    ? `p-2
                group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]`
                    : `group-data-[collapsible=icon]:w-[--sidebar-width-icon]
                group-data-[side=left]:border-r group-data-[side=right]:border-l`, className), ...props, children: jsxRuntime.jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full\n              w-full flex-col group-data-[variant=floating]:rounded-lg\n              group-data-[variant=floating]:border group-data-[variant=floating]:shadow", children: children }) })] }));
});
Sidebar.displayName = "Sidebar";
const SidebarTrigger = React__namespace.forwardRef(({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (jsxRuntime.jsxs(Button, { ref: ref, "data-sidebar": "trigger", variant: "ghost", size: "icon", className: cn("h-7 w-7", className), onClick: (event) => {
            onClick?.(event);
            toggleSidebar();
        }, ...props, children: [jsxRuntime.jsx(reactIcons.ViewVerticalIcon, {}), jsxRuntime.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] }));
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = React__namespace.forwardRef(({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (jsxRuntime.jsx("button", { ref: ref, "data-sidebar": "rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: toggleSidebar, title: "Toggle Sidebar", className: cn(`hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4
        -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0
        after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4
        group-data-[side=right]:left-0 sm:flex`, "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", `[[data-side=left][data-state=collapsed]_&]:cursor-e-resize
        [[data-side=right][data-state=collapsed]_&]:cursor-w-resize`, `group-data-[collapsible=offcanvas]:hover:bg-sidebar
        group-data-[collapsible=offcanvas]:translate-x-0
        group-data-[collapsible=offcanvas]:after:left-full`, "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className), ...props }));
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx("main", { ref: ref, className: cn("bg-background relative flex min-h-svh flex-1 flex-col", `peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))]
        md:peer-data-[variant=inset]:m-2
        md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2
        md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl
        md:peer-data-[variant=inset]:shadow`, className), ...props }));
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx(Input, { ref: ref, "data-sidebar": "input", className: cn(`bg-background focus-visible:ring-sidebar-ring h-8 w-full shadow-none
        focus-visible:ring-2`, className), ...props }));
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, "data-sidebar": "header", className: cn("flex flex-col gap-2 p-2", className), ...props }));
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, "data-sidebar": "footer", className: cn("flex flex-col gap-2 p-2", className), ...props }));
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx(Separator$1, { ref: ref, "data-sidebar": "separator", className: cn("bg-sidebar-border mx-2 w-auto", className), ...props }));
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, "data-sidebar": "content", className: cn(`flex min-h-0 flex-1 flex-col gap-2 overflow-auto
        group-data-[collapsible=icon]:overflow-hidden`, className), ...props }));
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, "data-sidebar": "group", className: cn("relative flex w-full min-w-0 flex-col p-2", className), ...props }));
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = React__namespace.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "div";
    return (jsxRuntime.jsx(Comp, { ref: ref, "data-sidebar": "group-label", className: cn(`text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center
        rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa]
        duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`, "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className), ...props }));
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = React__namespace.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsx(Comp, { ref: ref, "data-sidebar": "group-action", className: cn(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent
        hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square
        w-5 items-center justify-center rounded-md p-0 outline-none transition-transform
        focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`, 
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className), ...props }));
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, "data-sidebar": "group-content", className: cn("w-full text-sm", className), ...props })));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("ul", { ref: ref, "data-sidebar": "menu", className: cn("flex w-full min-w-0 flex-col gap-1", className), ...props })));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("li", { ref: ref, "data-sidebar": "menu-item", className: cn("group/menu-item relative", className), ...props })));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = classVarianceAuthority.cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
const SidebarMenuButton = React__namespace.forwardRef(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = (jsxRuntime.jsx(Comp, { ref: ref, "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: cn(sidebarMenuButtonVariants({ variant, size }), className), ...props }));
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip,
        };
    }
    return (jsxRuntime.jsxs(Tooltip$1, { children: [jsxRuntime.jsx(TooltipTrigger$1, { asChild: true, children: button }), jsxRuntime.jsx(TooltipContent$1, { side: "right", align: "center", hidden: state !== "collapsed" || isMobile, ...tooltip })] }));
});
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = React__namespace.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsx(Comp, { ref: ref, "data-sidebar": "menu-action", className: cn(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent
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
const SidebarMenuBadge = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, "data-sidebar": "menu-badge", className: cn(`text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5
      select-none items-center justify-center rounded-md px-1 text-xs font-medium
      tabular-nums`, `peer-hover/menu-button:text-sidebar-accent-foreground
      peer-data-[active=true]/menu-button:text-sidebar-accent-foreground`, "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className), ...props })));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = React__namespace.forwardRef(({ className, showIcon = false, ...props }, ref) => {
    // Random width between 50 to 90%.
    const width = React__namespace.useMemo(() => {
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);
    return (jsxRuntime.jsxs("div", { ref: ref, "data-sidebar": "menu-skeleton", className: cn("flex h-8 items-center gap-2 rounded-md px-2", className), ...props, children: [showIcon && (jsxRuntime.jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" })), jsxRuntime.jsx(Skeleton, { className: "h-4 max-w-[--skeleton-width] flex-1", "data-sidebar": "menu-skeleton-text", style: {
                    "--skeleton-width": width,
                } })] }));
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("ul", { ref: ref, "data-sidebar": "menu-sub", className: cn(`border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l
      px-2.5 py-0.5`, "group-data-[collapsible=icon]:hidden", className), ...props })));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = React__namespace.forwardRef(({ ...props }, ref) => jsxRuntime.jsx("li", { ref: ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = React__namespace.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "a";
    return (jsxRuntime.jsx(Comp, { ref: ref, "data-sidebar": "menu-sub-button", "data-size": size, "data-active": isActive, className: cn(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent
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
    const { theme = localStorage.getItem("lm-theme") } = nextThemes.useTheme();
    return (jsxRuntime.jsx(sonner.Toaster, { richColors: true, expand: false, position: "top-right", theme: theme, className: "toaster group", ...props }));
};

const Switch = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SwitchPrimitives__namespace.Root, { className: cn(`focus-visible:ring-ring focus-visible:ring-offset-background
      data-[state=checked]:bg-primary ltr data-[state=unchecked]:bg-input peer
      inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2
      border-transparent shadow-sm transition-colors focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
      disabled:opacity-50`, className), ...props, ref: ref, children: jsxRuntime.jsx(SwitchPrimitives__namespace.Thumb, { className: cn(`bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0
        transition-transform data-[state=checked]:translate-x-4
        data-[state=unchecked]:translate-x-0`) }) })));
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;

const Tabs = TabsPrimitive__namespace.Root;
const TabsList = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(TabsPrimitive__namespace.List, { ref: ref, className: cn(`bg-muted text-muted-foreground inline-flex h-9 items-center justify-center
      rounded-lg p-1`, className), ...props })));
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
const TabsTrigger = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(TabsPrimitive__namespace.Trigger, { ref: ref, className: cn(`ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background
      data-[state=active]:text-foreground inline-flex items-center justify-center
      whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow`, className), ...props })));
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
const TabsContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(TabsPrimitive__namespace.Content, { ref: ref, className: cn(`ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-offset-2`, className), ...props })));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;

const Textarea = React__namespace.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx("textarea", { className: cn(`border-input placeholder:text-muted-foreground focus-visible:ring-ring flex
        min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base
        shadow-sm focus-visible:outline-none focus-visible:ring-1
        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`, className), ref: ref, ...props }));
});
Textarea.displayName = "Textarea";

const Avatar = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AvatarPrimitive__namespace.Root, { ref: ref, className: cn("relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full", className), ...props })));
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
const AvatarImage = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AvatarPrimitive__namespace.Image, { ref: ref, className: cn("aspect-square h-40 w-40 ", className), ...props })));
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
const AvatarFallback = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AvatarPrimitive__namespace.Fallback, { ref: ref, className: cn("bg-muted flex h-40 w-40 items-center justify-center rounded-full", className), ...props })));
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;

var avatar = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Avatar: Avatar,
    AvatarFallback: AvatarFallback,
    AvatarImage: AvatarImage
});

const useThemeStore = zustand.create((set) => ({
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
    React.useEffect(() => {
        const savedTheme = localStorage.getItem(storageKey) || defaultTheme;
        setTheme(savedTheme);
    }, [defaultTheme, storageKey, setTheme]);
    // Sync theme changes to the DOM
    React.useEffect(() => {
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
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: children });
}
// Hook for accessing theme and setTheme
const useTheme = () => {
    const { theme, setTheme } = useThemeStore();
    return { theme, setTheme };
};

function AnimatedGradientText({ children, className, ...props }) {
    return (jsxRuntime.jsxs("div", { className: cn(`group relative mx-auto flex max-w-fit flex-row items-center justify-center
        rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium
        shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow
        duration-500 ease-out [--bg-size:300%]
        hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40`, className), ...props, children: [jsxRuntime.jsx("div", { className: `animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r
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
    return (jsxRuntime.jsx(TooltipProvider$1, { children: jsxRuntime.jsxs(Tooltip$1, { children: [jsxRuntime.jsx(TooltipTrigger$1, { asChild: true, children: jsxRuntime.jsxs(Avatar, { className: `${sizeList[size]} ${className} border-[1px] border-red-500`, children: [src && (jsxRuntime.jsx(AvatarImage, { src: src, alt: tooltip, className: `${sizeList[size]}` })), jsxRuntime.jsx(AvatarFallback, { children: "LM" })] }) }), tooltip && (jsxRuntime.jsx(TooltipContent$1, { children: jsxRuntime.jsx("p", { children: tooltip }) }))] }) }));
};
const PicGroup = ({ picList = [], length = 5, direction = "rtl" }) => {
    return (jsxRuntime.jsx("div", { className: `inline-flex ${direction == "ltr" ? "flex-row-reverse" : ""}`, children: picList.slice(0, length + 1).map((item, index) => {
            return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: index < length ? (jsxRuntime.jsx("div", { style: {
                        transform: `translate(${direction == "ltr" ? "-" : ""}${index * (item.size === "lg" ? 15 : 6)}px, 0)`,
                    }, children: jsxRuntime.jsx(Pic, { ...item }) }, `pic-item-${index}`)) : (jsxRuntime.jsxs("span", { className: `${sizeList[item?.size || "md"]} ${item.className} bg-primary flex items-center
                  justify-center rounded-full border-[1px] border-white text-xs text-white`, style: {
                        transform: `translate(${direction == "ltr" ? "-" : ""}${length * (item.size === "lg" ? 15 : 6)}px, 0)`,
                    }, children: ["+", picList.length - length] })) }));
        }) }));
};

const getAvatarUrl = (avatarUrl) => `https://lm-public-storage.s3-website.ir-thr-at1.arvanstorage.ir/publicImageManager/${avatarUrl}`;

function OperatorsSelect({ selectedUsers = [], setSelectedUsers, users, }) {
    return (jsxRuntime.jsx(Card, { className: "rounded border-0", children: jsxRuntime.jsx(CardContent, { className: "gap-0 p-0 outline-none", children: jsxRuntime.jsxs(Command, { className: "overflow-hidden", children: [jsxRuntime.jsx(CommandInput, { placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u06A9\u0627\u0631\u0628\u0631..." }), jsxRuntime.jsxs(CommandList, { className: "h-[400px] overflow-y-auto", children: [jsxRuntime.jsx(CommandEmpty, { children: "\u0645\u0648\u0631\u062F\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F" }), jsxRuntime.jsx(CommandGroup, { className: "p-2", children: users?.map((user) => {
                                    const isActive = Array.isArray(selectedUsers)
                                        ? selectedUsers.includes(user)
                                        : selectedUsers === user;
                                    return (jsxRuntime.jsxs(CommandItem, { className: "flex items-center px-2", onSelect: () => {
                                            if (Array.isArray(selectedUsers)) {
                                                if (selectedUsers.includes(user)) {
                                                    return setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user));
                                                }
                                                return setSelectedUsers([...users].filter((u) => [...selectedUsers, user].includes(u)));
                                            }
                                            else {
                                                setSelectedUsers(user);
                                            }
                                        }, children: [jsxRuntime.jsx(PicGroup, { picList: [
                                                    {
                                                        src: getAvatarUrl(user?.avatarUrl?.[0]?.thumbnail ||
                                                            user?.avatarThumbnail ||
                                                            user?.avatar),
                                                        tooltip: user.name,
                                                    },
                                                ] }), jsxRuntime.jsx("div", { className: "ml-2", children: jsxRuntime.jsx("p", { className: "text-sm font-medium leading-none", children: user.name || user.fullName }) }), isActive ? (jsxRuntime.jsx(lucideReact.Check, { className: "text-primary mr-auto flex h-5 w-5" })) : null] }, user.email));
                                }) })] })] }) }) }));
}

const getToken = () => localStorage.getItem("token");

const Accordion = AccordionPrimitive__namespace.Root;
const AccordionItem = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AccordionPrimitive__namespace.Item, { ref: ref, className: cn(className), ...props })));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: jsxRuntime.jsx(AccordionPrimitive__namespace.Trigger, { ref: ref, className: cn(`flex flex-1 items-center justify-between text-left text-sm font-medium
        transition-all [&[data-state=open]>svg]:rotate-180`, className), ...props, children: children }) })));
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
const AccordionContent = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsx(AccordionPrimitive__namespace.Content, { ref: ref, className: "data-[state=closed]:animate-accordion-up\n      data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...props, children: jsxRuntime.jsx("div", { className: cn("pb-4 pt-0", className), children: children }) })));
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;

const AccordionComponent = ({ items: accordions = [], counts, className, entireRolePermissionIds, onDialogSubmit, onDialogClose, label, badge, value, }) => {
    const [selectedContent, setSelectedContent] = React.useState(null);
    const [ids, setIds] = React.useState([]);
    const isContentOpen = React.useMemo(() => !!selectedContent, [selectedContent]);
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
    React.useEffect(() => {
        if (selectedContent) {
            setIds(allPermissionIds.filter((pId) => entireRolePermissionIds?.includes(pId)));
        }
        else {
            setIds([]);
        }
    }, [selectedContent]);
    return (jsxRuntime.jsxs(React.Fragment, { children: [jsxRuntime.jsx(Accordion, { type: "single", collapsible: true, className: cn("rtl h-[calc(100vh-475px)] w-full overflow-y-auto px-3", className), children: jsxRuntime.jsxs(AccordionItem, { value: value, className: "border-b", children: [jsxRuntime.jsxs(AccordionTrigger, { className: "flex items-center justify-between py-4", children: [jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [counts && (jsxRuntime.jsx("span", { className: "size-5 flex items-center justify-center rounded-full text-[#EF394E] ring\r\n                    ring-[#EF394E]", children: counts })), label] }), jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-2.5", children: [badge && jsxRuntime.jsx(Badge, { className: "bg-[#1E293B]", children: badge }), jsxRuntime.jsx(reactIcons.ChevronDownIcon, { className: "text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" })] })] }), accordions.map((accordion, accordionIndex) => (jsxRuntime.jsx(AccordionContent, { children: accordion.content?.length
                                ? accordion.content.map((cont, contIndex) => (jsxRuntime.jsx("div", { className: "mb-4 rounded-[16px] border", children: jsxRuntime.jsx(Accordion, { type: "single", collapsible: true, children: jsxRuntime.jsx(AccordionItem, { value: `nested-${contIndex}`, children: jsxRuntime.jsxs("div", { className: "flex cursor-pointer items-center justify-between p-2.5", onClick: () => setSelectedContent(isContentOpen ? null : cont), children: [jsxRuntime.jsxs("div", { className: "flex flex-col space-y-2 p-1", children: [jsxRuntime.jsx("p", { className: "ml-[45px]", children: cont.label }), jsxRuntime.jsx("span", { children: cont.subLabel })] }), jsxRuntime.jsx(lucideReact.MoveDiagonal, { className: "text-muted-foreground h-[24px] w-[24px]" })] }) }) }) }, `nested-${contIndex}`)))
                                : accordion.children }, accordionIndex)))] }) }), jsxRuntime.jsx(Dialog, { open: isContentOpen, onOpenChange: handleContentClose, children: jsxRuntime.jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [jsxRuntime.jsxs(DialogHeader, { children: [jsxRuntime.jsxs(DialogTitle, { className: "flex items-center justify-between", children: [selectedContent?.label, jsxRuntime.jsxs("div", { className: "flex items-center gap-[8px]", children: [jsxRuntime.jsx("span", { className: "text-[14px]", children: "\u0647\u0645\u0647" }), jsxRuntime.jsx(Switch, { checked: allChecked, onCheckedChange: () => {
                                                        if (allChecked) {
                                                            setIds([]);
                                                        }
                                                        else {
                                                            setIds(allPermissionIds);
                                                        }
                                                    } })] })] }), jsxRuntime.jsx(DialogDescription, { children: selectedContent?.subLabel })] }), jsxRuntime.jsx("div", { className: "flex flex-col items-start justify-start", children: selectedContent?.children?.map((permissionItem, permissionIndex) => {
                                const lastItemBorder = permissionIndex + 1 === selectedContent?.children?.length
                                    ? "border-b"
                                    : "";
                                const permissionChecked = ids.includes(permissionItem.id);
                                return (jsxRuntime.jsxs("div", { className: `flex w-full items-center justify-between border-t px-2 py-3 ${lastItemBorder}`, children: [jsxRuntime.jsx("p", { children: permissionItem.persianName }), jsxRuntime.jsx("div", { children: jsxRuntime.jsx(Switch, { checked: permissionChecked, onCheckedChange: () => {
                                                    if (permissionChecked) {
                                                        setIds(ids.filter((p) => p !== permissionItem.id));
                                                    }
                                                    else {
                                                        setIds([...ids, permissionItem.id]);
                                                    }
                                                } }) })] }, `permissionItem-${permissionIndex}`));
                            }) }), jsxRuntime.jsxs(DialogFooter, { className: "justify-end gap-[8px]", children: [jsxRuntime.jsx(Button, { type: "button", variant: "outline", onClick: handleContentClose, children: "\u0628\u0633\u062A\u0646" }), jsxRuntime.jsx(Button, { type: "button", onClick: handleContentSubmit, children: "\u062A\u0627\u0626\u06CC\u062F" })] })] }) })] }));
};

const buttonVariants$1 = classVarianceAuthority.cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
    return (jsxRuntime.jsxs(Button, { role: role, onClick: onClick, "data-type": dataType, disabled: disabled || loading, variant: type, size: size, className: cn(buttonVariants$1({ variant, size, block }), className), children: [loading && jsxRuntime.jsx(lucideReact.Loader2, { className: "animate-spin" }), icon && iconPosition === "start" && icon, children, icon && iconPosition === "end" && icon] }));
};

const ComboboxDemo = ({ items, placeholder = "جستجو کنید...", hasSearch = false, className = "", isMultiSelect = false, onChange, }) => {
    const [open, setOpen] = React__namespace.useState(false);
    const [selected, setSelected] = React__namespace.useState([]);
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
    return (jsxRuntime.jsxs(Popover, { open: open, onOpenChange: setOpen, children: [jsxRuntime.jsx(PopoverTrigger, { children: jsxRuntime.jsxs(_Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: cn("w-full justify-between", className), children: [getDisplayValue(), jsxRuntime.jsx(lucideReact.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), jsxRuntime.jsx(PopoverContent, { className: "p-0", children: jsxRuntime.jsxs(Command, { children: [hasSearch && (jsxRuntime.jsx(CommandInput, { placeholder: placeholder, className: "h-9" })), jsxRuntime.jsxs(CommandList, { children: [jsxRuntime.jsx(CommandEmpty, { children: "\u0645\u0648\u0631\u062F\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F" }), jsxRuntime.jsx(CommandGroup, { children: items.map((item) => (jsxRuntime.jsxs(CommandItem, { value: item.value, onSelect: handleSelect, children: [item.label, jsxRuntime.jsx(lucideReact.Check, { className: cn("ml-auto h-4 w-4", selected.some((sel) => sel.value === item.value)
                                                    ? "opacity-100"
                                                    : "opacity-0") })] }, item.value))) })] })] }) })] }));
};

const Copy = ({ text = "" }) => {
    const [copied, setCopied] = React.useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 800);
    };
    return (jsxRuntime.jsx(TooltipProvider$1, { disableHoverableContent: false, children: jsxRuntime.jsxs(Tooltip$1, { open: copied, children: [jsxRuntime.jsx(TooltipTrigger$1, { asChild: true, children: jsxRuntime.jsx(lucideReact.CopyIcon, { onClick: handleClick, className: "text-secondary-foreground h-[16px] w-[16px] cursor-pointer" }) }), jsxRuntime.jsx(TooltipContent$1, { className: "bg-green-500 text-white", children: jsxRuntime.jsx("p", { children: "\u06A9\u067E\u06CC \u0634\u062F" }) })] }) }));
};

const CustomDropdownMenu = ({ title, label, items, className, titleSub, }) => {
    return (jsxRuntime.jsxs(DropdownMenu$1, { children: [jsxRuntime.jsx(DropdownMenuTrigger$1, { children: jsxRuntime.jsx(_Button, { variant: "outline", children: title }) }), jsxRuntime.jsxs(DropdownMenuContent$1, { className: className, children: [jsxRuntime.jsx(DropdownMenuLabel$1, { children: label }), jsxRuntime.jsx(DropdownMenuSeparator$1, {}), jsxRuntime.jsx(DropdownMenuGroup$1, { children: items.map((item, index) => (jsxRuntime.jsx(React__namespace.Fragment, { children: item.children ? (jsxRuntime.jsxs(DropdownMenuSub, { children: [jsxRuntime.jsx(DropdownMenuSubTrigger, { children: item.label }), jsxRuntime.jsx(DropdownMenuPortal, { children: jsxRuntime.jsx(DropdownMenuSubContent, { children: item.children.map((subItem, subIndex) => (jsxRuntime.jsxs(DropdownMenuItem$1, { children: [subItem.label, subItem.shortcut && (jsxRuntime.jsx(DropdownMenuShortcut, { children: subItem.shortcut }))] }, `${index}-${subIndex}`))) }) })] })) : (jsxRuntime.jsxs(DropdownMenuItem$1, { children: [item.label, item.shortcut && (jsxRuntime.jsx(DropdownMenuShortcut, { children: item.shortcut }))] })) }, index))) })] })] }));
};

const Editable = ({ labelProps, editInputProps, editOpen, handleEditClose, editable = true, handleEditOpen, onSubmit, }) => {
    return (jsxRuntime.jsxs("p", { className: `${labelProps?.className} text-md flex items-center`, children: [editOpen ? (jsxRuntime.jsx(Input, { type: "text", ...editInputProps, onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        onSubmit && onSubmit();
                    }
                } })) : (labelProps?.children), editable && (jsxRuntime.jsx("button", { className: "mr-2 text-gray-500 focus:outline-none", children: editOpen ? (jsxRuntime.jsxs("div", { className: "flex", children: [jsxRuntime.jsx(lucideReact.X, { onClick: handleEditClose, className: "h-5 w-5 hover:text-gray-700" }), jsxRuntime.jsx(lucideReact.CheckIcon, { onClick: onSubmit, className: "h-5 w-5 hover:text-gray-500" })] })) : (jsxRuntime.jsx(lucideReact.Pencil, { onClick: handleEditOpen, className: "h-5 w-5 hover:text-gray-500" })) }))] }));
};

const editorContainerVariants = classVarianceAuthority.cva("relative w-full cursor-text select-text overflow-y-auto caret-primary selection:bg-brand/25 focus-visible:outline-none [&_.slate-selection-area]:border [&_.slate-selection-area]:border-brand/25 [&_.slate-selection-area]:bg-brand/15", {
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: {
            default: "h-full",
            demo: "h-[650px]",
            select: cn$1.cn("group rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2", "has-[[data-readonly]]:w-fit has-[[data-readonly]]:cursor-default has-[[data-readonly]]:border-transparent has-[[data-readonly]]:focus-within:[box-shadow:none]"),
        },
    },
});
const EditorContainer = ({ className, variant, ...props }) => {
    const editor = react.useEditorRef();
    const containerRef = react.useEditorContainerRef();
    return (jsxRuntime.jsx("div", { id: editor.uid, ref: containerRef, className: cn$1.cn("ignore-click-outside/toolbar", editorContainerVariants({ variant }), className), ...props }));
};
EditorContainer.displayName = "EditorContainer";
const editorVariants = classVarianceAuthority.cva(cn$1.cn("group/editor", "relative w-full cursor-text select-text overflow-x-hidden whitespace-pre-wrap break-words", "rounded-md ring-offset-background  focus-visible:outline-none", "placeholder:text-muted-foreground/80 [&_[data-slate-placeholder]]:top-[auto_!important] [&_[data-slate-placeholder]]:text-muted-foreground/80 [&_[data-slate-placeholder]]:!opacity-100", "[&_strong]:font-bold"), {
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
const Editor = React.forwardRef(({ className, disabled, focused, variant, ...props }, ref) => {
    return (jsxRuntime.jsx(react.PlateContent, { ref: ref, className: cn$1.cn("h-full", editorVariants({
            disabled,
            focused,
            variant,
        }), className), disabled: disabled, disableDefaultStyles: true, ...props }));
});
Editor.displayName = "Editor";

const blockSelectionVariants = classVarianceAuthority.cva("pointer-events-none absolute inset-0 z-[1] bg-brand/[.13] transition-opacity", {
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
    const isBlockSelected = react$1.useBlockSelected();
    if (!isBlockSelected)
        return null;
    return (jsxRuntime.jsx("div", { className: cn$1.cn(blockSelectionVariants({
            active: isBlockSelected,
        }), className), ...props }));
}

const PlateElement = React.forwardRef(({ children, ...props }, ref) => {
    return (jsxRuntime.jsxs(react.PlateElement, { ref: ref, ...props, children: [children, props.className?.includes("slate-selectable") && jsxRuntime.jsx(BlockSelection, {})] }));
});

const LinkElement = cn$1.withRef(({ children, className, ...props }, ref) => {
    const element = react.useElement();
    const { props: linkProps } = react$2.useLink({ element });
    return (jsxRuntime.jsx(PlateElement, { ref: ref, as: "a", className: cn$1.cn(className, "text-primary decoration-primary font-medium underline underline-offset-4"), ...linkProps, ...props, children: children }));
});

const buttonVariants = classVarianceAuthority.cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
cn$1.withRef(({ asChild = false, className, isMenu, size, variant, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsx(Comp, { ref: ref, className: cn$1.cn(buttonVariants({ className, isMenu, size, variant })), ...props }));
});

const inputVariants = classVarianceAuthority.cva("flex w-full rounded-md bg-transparent text-base file:border-0 file:bg-background file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", {
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
cn$1.withVariants("input", inputVariants, ["variant", "h"]);

const popoverVariants = classVarianceAuthority.cva("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none print:hidden", {
    defaultVariants: {
        animate: true,
    },
    variants: {
        animate: {
            true: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        },
    },
});
cn$1.withRef(({ align = "center", animate, className, sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: jsxRuntime.jsx(PopoverPrimitive__namespace.Content, { ref: ref, className: cn$1.cn(popoverVariants({ animate }), className), align: align, sideOffset: sideOffset, ...props }) })));

const separatorVariants = classVarianceAuthority.cva("shrink-0 bg-border", {
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
const Separator = cn$1.withVariants(cn$1.withProps(SeparatorPrimitive__namespace.Root, {
    decorative: true,
    orientation: "horizontal",
}), separatorVariants);

const floatingOptions = {
    middleware: [
        plateFloating.offset(12),
        plateFloating.flip({
            fallbackPlacements: ["bottom-end", "top-start", "top-end"],
            padding: 12,
        }),
    ],
    placement: "bottom-start",
};
function LinkFloatingToolbar({ state }) {
    const insertState = react$2.useFloatingLinkInsertState({
        ...state,
        floatingOptions: {
            ...floatingOptions,
            ...state?.floatingOptions,
        },
    });
    const { hidden, props: insertProps, ref: insertRef, textInputProps, } = react$2.useFloatingLinkInsert(insertState);
    const editState = react$2.useFloatingLinkEditState({
        ...state,
        floatingOptions: {
            ...floatingOptions,
            ...state?.floatingOptions,
        },
    });
    const { editButtonProps, props: editProps, ref: editRef, unlinkButtonProps, } = react$2.useFloatingLinkEdit(editState);
    const inputProps = react.useFormInputProps({
        preventDefaultOnEnterKeydown: true,
    });
    if (hidden)
        return null;
    const input = (jsxRuntime.jsxs("div", { className: "flex w-[330px] flex-col", ...inputProps, children: [jsxRuntime.jsxs("div", { className: "flex items-center", children: [jsxRuntime.jsx("div", { className: "text-muted-foreground flex items-center pl-2 pr-1", children: jsxRuntime.jsx(lucideReact.Link, { className: "size-4" }) }), jsxRuntime.jsx(react$2.FloatingLinkUrlInput, { className: inputVariants({ h: "sm", variant: "ghost" }), placeholder: "Paste link", "data-plate-focus": true })] }), jsxRuntime.jsx(Separator, { className: "my-1" }), jsxRuntime.jsxs("div", { className: "flex items-center", children: [jsxRuntime.jsx("div", { className: "text-muted-foreground flex items-center pl-2 pr-1", children: jsxRuntime.jsx(lucideReact.Text, { className: "size-4" }) }), jsxRuntime.jsx("input", { className: inputVariants({ h: "sm", variant: "ghost" }), placeholder: "Text to display", "data-plate-focus": true, ...textInputProps })] })] }));
    const editContent = editState.isEditing ? (input) : (jsxRuntime.jsxs("div", { className: "box-content flex items-center", children: [jsxRuntime.jsx("button", { className: buttonVariants({ size: "sm", variant: "ghost" }), type: "button", ...editButtonProps, children: "Edit link" }), jsxRuntime.jsx(Separator, { orientation: "vertical" }), jsxRuntime.jsx(react$2.LinkOpenButton, { className: buttonVariants({
                    size: "icon",
                    variant: "ghost",
                }), children: jsxRuntime.jsx(lucideReact.ExternalLink, { width: 18 }) }), jsxRuntime.jsx(Separator, { orientation: "vertical" }), jsxRuntime.jsx("button", { className: buttonVariants({
                    size: "icon",
                    variant: "ghost",
                }), type: "button", ...unlinkButtonProps, children: jsxRuntime.jsx(lucideReact.Unlink, { width: 18 }) })] }));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { ref: insertRef, className: cn$1.cn(popoverVariants(), "w-auto p-1"), ...insertProps, children: input }), jsxRuntime.jsx("div", { ref: editRef, className: cn$1.cn(popoverVariants(), "w-auto p-1"), ...editProps, children: editContent })] }));
}

const linkPlugin = react$2.LinkPlugin.extend({
    render: { afterEditable: () => jsxRuntime.jsx(LinkFloatingToolbar, {}) },
});

const useCreateEditor = ({ value = "" }) => {
    return react.usePlateEditor({
        override: {
            components: {
                [react$2.LinkPlugin.key]: LinkElement,
                [react$3.BoldPlugin.key]: cn$1.withProps(react.PlateLeaf, { as: "strong" }),
                [react$3.ItalicPlugin.key]: cn$1.withProps(react.PlateLeaf, { as: "em" }),
                [react.ParagraphPlugin.key]: cn$1.withProps(react.PlateElement, {
                    as: "p",
                    className: "mb-4",
                }),
                [react$3.StrikethroughPlugin.key]: cn$1.withProps(react.PlateLeaf, { as: "s" }),
                [react$3.UnderlinePlugin.key]: cn$1.withProps(react.PlateLeaf, { as: "u" }),
                blockquote: cn$1.withProps(react.PlateElement, {
                    as: "blockquote",
                    className: "mb-4 border-l-4 border-[#d0d7de] pl-4 text-[#636c76]",
                }),
                h1: cn$1.withProps(react.PlateElement, {
                    as: "h1",
                    className: "mb-4 mt-6 text-3xl font-semibold tracking-tight lg:text-4xl",
                }),
                h2: cn$1.withProps(react.PlateElement, {
                    as: "h2",
                    className: "mb-4 mt-6 text-2xl font-semibold tracking-tight",
                }),
                h3: cn$1.withProps(react.PlateElement, {
                    as: "h3",
                    className: "mb-4 mt-6 text-xl font-semibold tracking-tight",
                }),
            },
        },
        plugins: [
            react$3.BasicMarksPlugin,
            react$4.HeadingPlugin,
            linkPlugin,
            react$5.AlignPlugin.configure({
                inject: {
                    targetPlugins: [react.ParagraphPlugin.key, react$4.HeadingPlugin.key],
                },
            }),
            react$6.IndentPlugin.configure({
                inject: {
                    targetPlugins: [react.ParagraphPlugin.key, plateHeading.HEADING_KEYS.h1],
                },
            }),
            react$7.IndentListPlugin.configure({
                inject: {
                    targetPlugins: [react.ParagraphPlugin.key, plateHeading.HEADING_KEYS.h1],
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

const DropdownMenu = DropdownMenuPrimitive__namespace.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
const DropdownMenuGroup = React.forwardRef(({ label, ...props }, ref) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DropdownMenuSeparator, { className: cn$1.cn("hidden", `mb-0 shrink-0 peer-has-[[role=menuitem]]/menu-group:block
          peer-has-[[role=menuitemcheckbox]]/menu-group:block
          peer-has-[[role=option]]/menu-group:block`) }), jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.Group, { ref: ref, ...props, className: cn$1.cn("hidden", `peer/menu-group group/menu-group my-1.5 has-[[role=menuitem]]:block
          has-[[role=menuitemcheckbox]]:block has-[[role=option]]:block`, props.className), children: [label && jsxRuntime.jsx(DropdownMenuLabel, { children: label }), props.children] })] }));
});
const DropdownMenuRadioGroup = React.forwardRef(({ label, ...props }, ref) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DropdownMenuSeparator, { className: cn$1.cn("hidden", `mb-0 shrink-0 peer-has-[[role=menuitemradio]]/menu-group:block
          peer-has-[[role=option]]/menu-group:block`) }), jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.RadioGroup, { ref: ref, ...props, className: cn$1.cn("hidden", `peer/menu-group group/menu-group my-1.5 has-[[role=menuitemradio]]:block
          has-[[role=option]]:block`, props.className), children: [label && jsxRuntime.jsx(DropdownMenuLabel, { children: label }), props.children] })] }));
});
cn$1.withRef(({ children, className, inset, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.SubTrigger, { ref: ref, className: cn$1.cn(`focus:bg-accent data-[state=open]:bg-accent mx-1 flex cursor-default select-none
      items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`, inset && "pl-8", className), ...props, children: [children, jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto" })] })));
cn$1.withCn(DropdownMenuPrimitive__namespace.SubContent, "z-50 min-w-32 overflow-hidden rounded-md border bg-popover py-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2");
const DropdownMenuContentVariants = cn$1.withProps(DropdownMenuPrimitive__namespace.Content, {
    className: cn$1.cn("z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"),
    sideOffset: 4,
});
const DropdownMenuContent = cn$1.withRef(({ ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: jsxRuntime.jsx(DropdownMenuContentVariants, { ref: ref, onCloseAutoFocus: (e) => {
            e.preventDefault();
        }, ...props }) })));
const menuItemVariants = classVarianceAuthority.cva("relative mx-1 flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        inset: {
            true: "pl-8",
        },
    },
});
const DropdownMenuItem = cn$1.withVariants(DropdownMenuPrimitive__namespace.Item, menuItemVariants, ["inset"]);
cn$1.withRef(({ children, className, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.CheckboxItem, { ref: ref, className: cn$1.cn(`focus:bg-accent focus:text-accent-foreground relative mx-1 flex select-none
      items-center gap-2 rounded-sm py-1 pl-8 pr-2 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&_svg]:size-4 [&_svg]:shrink-0`, "cursor-pointer", className), ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(lucideReact.Check, { className: "size-4" }) }) }), children] })));
const DropdownMenuRadioItem = cn$1.withRef(({ children, className, hideIcon, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.RadioItem, { ref: ref, className: cn$1.cn(`focus:bg-accent focus:text-accent-foreground
      data-[state=checked]:text-accent-foreground relative mx-1 flex cursor-pointer
      select-none items-center gap-2 rounded-sm px-2 py-1 text-sm outline-none
      transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&_svg]:size-4`, className), ...props, children: [!hideIcon && (jsxRuntime.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(lucideReact.Check, {}) }) })), children] })));
const dropdownMenuLabelVariants = classVarianceAuthority.cva(cn$1.cn("mx-1 select-none px-2 pb-2 pt-1.5 text-xs font-semibold text-muted-foreground"), {
    variants: {
        inset: {
            true: "pl-8",
        },
    },
});
const DropdownMenuLabel = cn$1.withVariants(DropdownMenuPrimitive__namespace.Label, dropdownMenuLabelVariants, ["inset"]);
const DropdownMenuSeparator = cn$1.withCn(DropdownMenuPrimitive__namespace.Separator, "-mx-1 my-1 h-px bg-muted");
cn$1.withCn(cn$1.createPrimitiveElement("span"), "ml-auto text-xs tracking-widest opacity-60");
const useOpenState = () => {
    const [open, setOpen] = React.useState(false);
    const onOpenChange = React.useCallback((_value = !open) => {
        setOpen(_value);
    }, [open]);
    return {
        open,
        onOpenChange,
    };
};

const TooltipProvider = cn$1.withProps(TooltipPrimitive__namespace.Provider, {
    delayDuration: 0,
    disableHoverableContent: true,
    skipDelayDuration: 0,
});
const Tooltip = TooltipPrimitive__namespace.Root;
const TooltipTrigger = TooltipPrimitive__namespace.Trigger;
const TooltipPortal = TooltipPrimitive__namespace.Portal;
const TooltipContent = cn$1.withCn(cn$1.withProps(TooltipPrimitive__namespace.Content, {
    sideOffset: 4,
}), "z-50 overflow-hidden rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-md");
function withTooltip(Component) {
    return React.forwardRef(function ExtendComponent({ delayDuration = 0, disableHoverableContent = true, skipDelayDuration = 0, tooltip, tooltipContentProps, tooltipProps, ...props }, ref) {
        const [mounted, setMounted] = React.useState(false);
        React.useEffect(() => {
            setMounted(true);
        }, []);
        const component = jsxRuntime.jsx(Component, { ref: ref, ...props });
        if (tooltip && mounted) {
            return (jsxRuntime.jsx(TooltipProvider, { delayDuration: delayDuration, disableHoverableContent: disableHoverableContent, skipDelayDuration: skipDelayDuration, children: jsxRuntime.jsxs(Tooltip, { ...tooltipProps, children: [jsxRuntime.jsx(TooltipTrigger, { asChild: true, children: component }), jsxRuntime.jsx(TooltipPortal, { children: jsxRuntime.jsx(TooltipContent, { ...tooltipContentProps, children: tooltip }) })] }) }));
        }
        return component;
    });
}

const Toolbar = cn$1.withCn(ToolbarPrimitive__namespace.Root, "relative flex select-none items-center");
const ToolbarToggleGroup = cn$1.withCn(ToolbarPrimitive__namespace.ToolbarToggleGroup, "flex items-center");
cn$1.withCn(ToolbarPrimitive__namespace.Link, "font-medium underline underline-offset-4");
cn$1.withCn(ToolbarPrimitive__namespace.Separator, "mx-2 my-1 w-px shrink-0 bg-border");
const toolbarButtonVariants = classVarianceAuthority.cva(cn$1.cn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([data-icon])]:size-4"), {
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
const dropdownArrowVariants = classVarianceAuthority.cva(cn$1.cn("inline-flex items-center justify-center rounded-r-md text-sm font-medium text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"), {
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
const ToolbarButton = withTooltip(React.forwardRef(({ children, className, isDropdown, pressed, size, variant, ...props }, ref) => {
    return typeof pressed === "boolean" ? (jsxRuntime.jsx(ToolbarToggleGroup, { disabled: props.disabled, value: "single", type: "single", children: jsxRuntime.jsx(ToolbarToggleItem, { ref: ref, className: cn$1.cn(toolbarButtonVariants({
                size,
                variant,
            }), isDropdown && "justify-between gap-1 pr-1", className), value: pressed ? "single" : "", ...props, children: isDropdown ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "flex flex-1 items-center gap-2 whitespace-nowrap", children: children }), jsxRuntime.jsx("div", { children: jsxRuntime.jsx(lucideReact.ChevronDown, { className: "text-muted-foreground size-3.5", "data-icon": true }) })] })) : (children) }) })) : (jsxRuntime.jsx(ToolbarPrimitive__namespace.Button, { ref: ref, className: cn$1.cn(toolbarButtonVariants({
            size,
            variant,
        }), isDropdown && "pr-1", className), ...props, children: children }));
}));
ToolbarButton.displayName = "ToolbarButton";
const ToolbarSplitButton = React.forwardRef(({ children, className, ...props }, ref) => {
    return (jsxRuntime.jsx(ToolbarButton, { ref: ref, className: cn$1.cn("group flex gap-0 px-0 hover:bg-transparent", className), ...props, children: children }));
});
const ToolbarSplitButtonPrimary = withTooltip(React.forwardRef(({ children, className, size, variant, ...props }, ref) => {
    return (jsxRuntime.jsx("span", { ref: ref, className: cn$1.cn(toolbarButtonVariants({
            size,
            variant,
        }), "rounded-r-none", `group-data-[pressed=true]:bg-accent
          group-data-[pressed=true]:text-accent-foreground`, className), ...props, children: children }));
}));
const ToolbarSplitButtonSecondary = React.forwardRef(({ className, size, variant, ...props }, ref) => {
    return (jsxRuntime.jsx("span", { ref: ref, className: cn$1.cn(dropdownArrowVariants({
            size,
            variant,
        }), `group-data-[pressed=true]:bg-accent
        group-data-[pressed=true]:text-accent-foreground`, className), onClick: (e) => e.stopPropagation(), role: "button", ...props, children: jsxRuntime.jsx(lucideReact.ChevronDown, { className: "text-muted-foreground size-3.5", "data-icon": true }) }));
});
ToolbarSplitButton.displayName = "ToolbarButton";
const ToolbarToggleItem = cn$1.withVariants(ToolbarPrimitive__namespace.ToggleItem, toolbarButtonVariants, ["variant", "size"]);
const ToolbarGroup = cn$1.withRef(({ children, className }, ref) => {
    return (jsxRuntime.jsxs("div", { ref: ref, className: cn$1.cn("group/toolbar-group", "relative hidden has-[button]:flex", className), children: [jsxRuntime.jsx("div", { className: "flex items-center", children: children }), jsxRuntime.jsx("div", { className: "mx-1.5 py-0.5 group-last/toolbar-group:!hidden", children: jsxRuntime.jsx(Separator, { orientation: "vertical" }) })] }));
});

function NumberedIndentListToolbarButton() {
    const editor = react.useEditorRef();
    const openState = useOpenState();
    const pressed = react.useEditorSelector((editor) => plateIndentList.someIndentList(editor, [
        plateIndentList.ListStyleType.Decimal,
        plateIndentList.ListStyleType.LowerAlpha,
        plateIndentList.ListStyleType.UpperAlpha,
        plateIndentList.ListStyleType.LowerRoman,
        plateIndentList.ListStyleType.UpperRoman,
    ]), []);
    return (jsxRuntime.jsxs(ToolbarSplitButton, { pressed: openState.open, children: [jsxRuntime.jsx(ToolbarSplitButtonPrimary, { className: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", onClick: () => plateIndentList.toggleIndentList(editor, {
                    listStyleType: plateIndentList.ListStyleType.Decimal,
                }), "data-state": pressed ? "on" : "off", tooltip: "Numbered List", children: jsxRuntime.jsx(lucideReact.ListOrdered, { className: "size-4" }) }), jsxRuntime.jsxs(DropdownMenu, { ...openState, modal: false, children: [jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: jsxRuntime.jsx(ToolbarSplitButtonSecondary, {}) }), jsxRuntime.jsx(DropdownMenuContent, { align: "start", alignOffset: -32, children: jsxRuntime.jsxs(DropdownMenuGroup, { children: [jsxRuntime.jsx(DropdownMenuItem, { onSelect: () => plateIndentList.toggleIndentList(editor, {
                                        listStyleType: plateIndentList.ListStyleType.Decimal,
                                    }), children: "Decimal (1, 2, 3)" }), jsxRuntime.jsx(DropdownMenuItem, { onSelect: () => plateIndentList.toggleIndentList(editor, {
                                        listStyleType: plateIndentList.ListStyleType.LowerAlpha,
                                    }), children: "Lower Alpha (a, b, c)" }), jsxRuntime.jsx(DropdownMenuItem, { onSelect: () => plateIndentList.toggleIndentList(editor, {
                                        listStyleType: plateIndentList.ListStyleType.UpperAlpha,
                                    }), children: "Upper Alpha (A, B, C)" }), jsxRuntime.jsx(DropdownMenuItem, { onSelect: () => plateIndentList.toggleIndentList(editor, {
                                        listStyleType: plateIndentList.ListStyleType.LowerRoman,
                                    }), children: "Lower Roman (i, ii, iii)" }), jsxRuntime.jsx(DropdownMenuItem, { onSelect: () => plateIndentList.toggleIndentList(editor, {
                                        listStyleType: plateIndentList.ListStyleType.UpperRoman,
                                    }), children: "Upper Roman (I, II, III)" })] }) })] })] }));
}
function BulletedIndentListToolbarButton() {
    const editor = react.useEditorRef();
    const openState = useOpenState();
    const pressed = react.useEditorSelector((editor) => plateIndentList.someIndentList(editor, [
        plateIndentList.ListStyleType.Disc,
        plateIndentList.ListStyleType.Circle,
        plateIndentList.ListStyleType.Square,
    ]), []);
    return (jsxRuntime.jsxs(ToolbarSplitButton, { pressed: openState.open, children: [jsxRuntime.jsx(ToolbarSplitButtonPrimary, { className: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", onClick: () => {
                    plateIndentList.toggleIndentList(editor, {
                        listStyleType: plateIndentList.ListStyleType.Disc,
                    });
                }, "data-state": pressed ? "on" : "off", tooltip: "Bulleted List", children: jsxRuntime.jsx(lucideReact.List, { className: "size-4" }) }), jsxRuntime.jsxs(DropdownMenu, { ...openState, modal: false, children: [jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: jsxRuntime.jsx(ToolbarSplitButtonSecondary, {}) }), jsxRuntime.jsx(DropdownMenuContent, { align: "start", alignOffset: -32, children: jsxRuntime.jsxs(DropdownMenuGroup, { children: [jsxRuntime.jsx(DropdownMenuItem, { onClick: () => plateIndentList.toggleIndentList(editor, {
                                        listStyleType: plateIndentList.ListStyleType.Disc,
                                    }), children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "size-2 rounded-full border border-current bg-current" }), "Default"] }) }), jsxRuntime.jsx(DropdownMenuItem, { onClick: () => plateIndentList.toggleIndentList(editor, {
                                        listStyleType: plateIndentList.ListStyleType.Circle,
                                    }), children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "size-2 rounded-full border border-current" }), "Circle"] }) }), jsxRuntime.jsx(DropdownMenuItem, { onClick: () => plateIndentList.toggleIndentList(editor, {
                                        listStyleType: plateIndentList.ListStyleType.Square,
                                    }), children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "size-2 border border-current bg-current" }), "Square"] }) })] }) })] })] }));
}

const LinkToolbarButton = cn$1.withRef((rest, ref) => {
    const state = react$2.useLinkToolbarButtonState();
    const { props } = react$2.useLinkToolbarButton(state);
    return (jsxRuntime.jsx(ToolbarButton, { ref: ref, "data-plate-focus": true, tooltip: "Link", ...props, ...rest, children: jsxRuntime.jsx(lucideReact.Link, {}) }));
});

const MarkToolbarButton = cn$1.withRef(({ clear, nodeType, ...rest }, ref) => {
    const state = react.useMarkToolbarButtonState({ clear, nodeType });
    const { props } = react.useMarkToolbarButton(state);
    return jsxRuntime.jsx(ToolbarButton, { ref: ref, ...props, ...rest });
});

const items = [
    {
        icon: lucideReact.AlignLeftIcon,
        value: "left",
    },
    {
        icon: lucideReact.AlignCenterIcon,
        value: "center",
    },
    {
        icon: lucideReact.AlignRightIcon,
        value: "right",
    },
    {
        icon: lucideReact.AlignJustifyIcon,
        value: "justify",
    },
];
function AlignDropdownMenu({ children, ...props }) {
    const state = react$5.useAlignDropdownMenuState();
    const { radioGroupProps } = react$5.useAlignDropdownMenu(state);
    const openState = useOpenState();
    const IconValue = items.find((item) => item.value === radioGroupProps.value)?.icon ??
        lucideReact.AlignLeftIcon;
    return (jsxRuntime.jsxs(DropdownMenu, { modal: false, ...openState, ...props, children: [jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: jsxRuntime.jsx(ToolbarButton, { pressed: openState.open, tooltip: "Align", isDropdown: true, children: jsxRuntime.jsx(IconValue, {}) }) }), jsxRuntime.jsx(DropdownMenuContent, { className: "min-w-0", align: "start", children: jsxRuntime.jsx(DropdownMenuRadioGroup, { ...radioGroupProps, children: items.map(({ icon: Icon, value: itemValue }) => (jsxRuntime.jsx(DropdownMenuRadioItem, { value: itemValue, hideIcon: true, children: jsxRuntime.jsx(Icon, {}) }, itemValue))) }) })] }));
}

function FixedToolbarButtons() {
    const readOnly = react.useEditorReadOnly();
    return (jsxRuntime.jsx("div", { className: "flex w-full", children: !readOnly && (jsxRuntime.jsxs(Toolbar, { children: [jsxRuntime.jsxs(ToolbarGroup, { children: [jsxRuntime.jsx(MarkToolbarButton, { nodeType: react$3.BoldPlugin.key, tooltip: "Bold (\u2318+B)", children: jsxRuntime.jsx(lucideReact.BoldIcon, {}) }), jsxRuntime.jsx(MarkToolbarButton, { nodeType: react$3.ItalicPlugin.key, tooltip: "Italic (\u2318+I)", children: jsxRuntime.jsx(lucideReact.ItalicIcon, {}) }), jsxRuntime.jsx(MarkToolbarButton, { nodeType: react$3.UnderlinePlugin.key, tooltip: "Underline (\u2318+U)", children: jsxRuntime.jsx(lucideReact.UnderlineIcon, {}) })] }), jsxRuntime.jsxs(ToolbarGroup, { children: [jsxRuntime.jsx(AlignDropdownMenu, {}), jsxRuntime.jsx(NumberedIndentListToolbarButton, {}), jsxRuntime.jsx(BulletedIndentListToolbarButton, {})] }), jsxRuntime.jsx(ToolbarGroup, { children: jsxRuntime.jsx(LinkToolbarButton, {}) })] })) }));
}

function _Editor({ onChange, value }) {
    const editor = useCreateEditor({ value });
    return (jsxRuntime.jsx("div", { className: "rounded-lg border p-1 dark:border-neutral-700", children: jsxRuntime.jsx(react.Plate, { editor: editor, onValueChange: (e) => onChange(JSON.stringify(e.value)), children: jsxRuntime.jsxs(EditorContainer, { children: [jsxRuntime.jsx(FixedToolbarButtons, {}), jsxRuntime.jsx(Separator, { className: "my-2" }), jsxRuntime.jsx("div", { className: "rtl hidden-scrollbar h-[calc(100vh-175px)] pr-5", children: jsxRuntime.jsx(Editor, { variant: "ai", placeholder: "\u0627\u06CC\u0646\u062C\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F..." }) })] }) }) }));
}

const Pagination = ({ meta }) => {
    const [page, setPage] = nuqs.useQueryState("page");
    const nextTimeout = React.useRef(null);
    const hasNextPage = meta?.hasNextPage ||
        (meta?.totalPage ? meta?.totalPage > meta?.currentPage : false);
    const [currentPage, setCurrentPage] = React.useState(meta?.page + 1 || Number(page) || 1);
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
    React.useEffect(() => {
        if (nextTimeout.current)
            clearTimeout(nextTimeout.current);
        nextTimeout.current = setTimeout(() => {
            if (page != currentPage.toString())
                setCurrentPage(Number(page) || 1);
        }, 200);
    }, [page]);
    return (jsxRuntime.jsx("div", { className: "flex items-center justify-end gap-2", children: jsxRuntime.jsxs("div", { className: "flex items-center gap-x-2", children: [jsxRuntime.jsx(Button, { className: "h-8 text-xs", variant: "outline", onClick: handlePrevious, disabled: currentPage === 1, children: "\u0635\u0641\u062D\u0647 \u0642\u0628\u0644\u06CC" }), jsxRuntime.jsx(Input, { type: "number", disabled: !hasNextPage, className: "no-spinner h-8 w-10 px-1 text-center", value: currentPage.toString(), onInput: (e) => setCurrentPage(e.target.value), onKeyDown: (e) => e.keyCode == 13 ? setPage(currentPage.toString()) : null }), jsxRuntime.jsx(Button, { className: "h-8 text-xs", variant: "outline", onClick: handleNext, disabled: !hasNextPage, children: "\u0635\u0641\u062D\u0647 \u0628\u0639\u062F\u06CC" })] }) }));
};

const SheetGridCard = ({ children, className, onClick }) => {
    return (jsxRuntime.jsx("div", { className: `${className} bg-primary/20 relative flex w-full flex-1 items-center
        rounded-[16px] p-4 text-center dark:bg-[#1E1E21]`, onClick: onClick, children: children }));
};
const SheetGrid = ({ left, right }) => {
    return (jsxRuntime.jsx("div", { className: "flex items-center justify-between", children: jsxRuntime.jsxs("div", { className: "flex w-full", children: [jsxRuntime.jsx("div", { className: "ml-[5px] flex h-[243px] flex-1 flex-col items-center justify-center gap-[10px]", children: right.map((item, index) => {
                        if (!item)
                            return null;
                        return (jsxRuntime.jsx(SheetGridCard, { className: `flex-col justify-center gap-[10px] ${item.onClick && "cursor-pointer"}`, onClick: item.onClick, children: item.render && item.render() }, `right-sheetgrid-item-${index}`));
                    }) }), jsxRuntime.jsx("div", { className: "mr-[5px] flex flex-1 flex-col items-center justify-center gap-[10px]", children: left.map((item, index) => {
                        if (!item)
                            return null;
                        return (jsxRuntime.jsx(SheetGridCard, { className: `justify-between ${item.onClick && "cursor-pointer"}`, onClick: item.onClick, children: item.render && item.render() }, `left-sheetgrid-item-${index}`));
                    }) })] }) }));
};

const Table = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("table", { ref: ref, className: cn("w-full caption-bottom text-sm", className), ...props })));
Table.displayName = "Table";
const TableHeader = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("thead", { ref: ref, className: `${cn("[&_tr]:border-b", className)} bg-background sticky top-0 z-[10] h-[40px]`, ...props })));
TableHeader.displayName = "TableHeader";
const TableBody = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("tbody", { ref: ref, className: cn("[&_tr:last-child]:border-0", className), ...props })));
TableBody.displayName = "TableBody";
const TableFooter = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("tfoot", { ref: ref, className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className), ...props })));
TableFooter.displayName = "TableFooter";
const TableRow = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("tr", { ref: ref, className: cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors ", className), ...props })));
TableRow.displayName = "TableRow";
const TableHead = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("th", { ref: ref, className: cn(`text-muted-foreground h-10 px-2 text-left align-middle font-medium
      [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] `, className), ...props })));
TableHead.displayName = "TableHead";
const TableCell = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("td", { ref: ref, className: cn("align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props })));
TableCell.displayName = "TableCell";
const TableCaption = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("caption", { ref: ref, className: cn("text-muted-foreground mt-4 text-sm", className), ...props })));
TableCaption.displayName = "TableCaption";

const handlePreviousRowSession = function () {
    const previousRowName = `previous-selected-table-row`;
    const previousRowSession = sessionStorage.getItem(previousRowName);
    const parsedRowSession = previousRowSession
        ? JSON.parse(previousRowSession)
        : { [window.location.pathname]: null };
    return {
        get: function () {
            return parsedRowSession[window.location.pathname] || null;
        },
        set: function (keyValue) {
            const rowSelectedOfPage = {
                ...parsedRowSession,
                [window.location.pathname]: keyValue,
            };
            sessionStorage.setItem(previousRowName, JSON.stringify(rowSelectedOfPage));
        },
    };
};
const _Table = ({ data, columns, caption, onRow, className, loading = false, hrefPattern, rowClassName, }) => {
    const [previousRow, setPreviousRow] = React.useState("");
    const memoizedPreviousRow = React.useMemo(() => previousRow, [previousRow]);
    const [randomNumber, setRandomNumber] = React.useState(0);
    React.useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 10000));
    }, []);
    React.useEffect(() => {
        const previousRowValue = handlePreviousRowSession().get();
        if (previousRowValue)
            setPreviousRow(previousRowValue);
        if (data && data.length) {
            const tableContainer = document.querySelector(`#table-${randomNumber}`);
            if (tableContainer) {
                tableContainer.scroll({
                    top: 0,
                    behavior: "smooth",
                });
            }
        }
    }, [data]);
    const handleTableRowClick = React.useCallback(function (onRow, tableRowKey, item) {
        if (onRow) {
            setPreviousRow(tableRowKey);
            handlePreviousRowSession().set(tableRowKey);
            // Change the execution stack of onRowClick to make the selected animate smoth
            setTimeout(() => onRow(item), 0);
        }
    }, []);
    const generateHref = (item) => {
        let href = "";
        if (!hrefPattern)
            return item.id;
        const id = hrefPattern?.split(":")[1];
        const regex = /\[([^\]]+)\]/;
        const findChild = hrefPattern.match(regex);
        href = `?${hrefPattern
            .replace(`:${id}`, findChild ? item[findChild[1]][id] : item[id])
            .replace(regex, "")}`;
        return href;
    };
    return (jsxRuntime.jsx("div", { id: `table-${randomNumber}`, className: `${className} rtl hidden-scrollbar h-[calc(100vh-167px)] rounded-2xl border
        border-neutral-300 dark:border-neutral-700`, children: jsxRuntime.jsxs("div", { className: "relative h-full w-full", children: [loading && (jsxRuntime.jsx("div", { className: "absolute inset-0 z-50 flex items-center justify-center bg-background/50", children: jsxRuntime.jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }) })), jsxRuntime.jsxs(Table, { children: [caption && jsxRuntime.jsx(TableCaption, { children: caption }), jsxRuntime.jsx(TableHeader, { children: jsxRuntime.jsx(TableRow, { children: columns.map((column, i) => (jsxRuntime.jsx(TableHead, { className: `text-right ${column.className}`, children: column.title }, i))) }) }), jsxRuntime.jsx(TableBody, { children: data?.map((item, rowIndex) => {
                                const tableRowKey = `table-row-${item?.id}-${rowIndex}`;
                                const previousRowClassName = memoizedPreviousRow === tableRowKey ? "bg-red-800/10" : "";
                                return (jsxRuntime.jsx(TableRow, { className: `${previousRowClassName} hover:bg-secondary/40 relative transition-all ${item.link ? "cursor-pointer" : ""} transition-all ${rowClassName}`, onClick: handleTableRowClick.bind(undefined, onRow, tableRowKey, item), children: columns.map((column, columnIndex) => (jsxRuntime.jsx(TableCell, { className: "text-center", children: jsxRuntime.jsx("a", { href: generateHref(item), onClick: (e) => e.preventDefault(), className: `flex h-14 cursor-pointer items-center ${column.align}`, children: column.render
                                                ? column.render(column.dataIndex ? item[column.dataIndex] : null, item, rowIndex, data)
                                                : column.dataIndex && item[column.dataIndex] }) }, `table-column-${columnIndex}`))) }, tableRowKey));
                            }) })] })] }) }));
};

const TableOptions = () => {
    return jsxRuntime.jsx("div", { className: "flex", children: "Hi there" });
};

const Tag = ({ children, tooltipText, className = "" }) => {
    return (jsxRuntime.jsx(TooltipProvider$1, { children: jsxRuntime.jsxs(Tooltip$1, { children: [jsxRuntime.jsx(TooltipTrigger$1, { asChild: true, children: jsxRuntime.jsx("div", { className: `${className} bg-secondary text-white" flex h-[22px] w-[170px] items-center
              justify-center rounded border text-xs dark:border-neutral-700 `, children: children }) }), tooltipText && (jsxRuntime.jsx(TooltipContent$1, { children: jsxRuntime.jsx("p", { children: tooltipText }) }))] }) }));
};

const TooltipGlobal = ({ trigger, content, className }) => {
    return (jsxRuntime.jsx(TooltipProvider$1, { children: jsxRuntime.jsxs(Tooltip$1, { children: [jsxRuntime.jsx(TooltipTrigger$1, { asChild: true, children: trigger }), jsxRuntime.jsx(TooltipContent$1, { className: className, children: content })] }) }));
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
                return (jsxRuntime.jsx("p", { style: style, children: children.map((child, childIndex) => {
                        if (child.type == "a") {
                            return (jsxRuntime.jsxs("a", { href: child.url, target: "_blank", className: "text-primary flex items-center gap-2", children: [jsxRuntime.jsx(lucideReact.Link, { className: "size-4" }), " ", child.children[0].text] }));
                        }
                        return (jsxRuntime.jsx("span", { className: `${child.bold && "font-bold"} ${child.italic && "italic"} ${child.underline &&
                                "underline"}`, children: child.text == "\n" || child.text == "" ? jsxRuntime.jsx("br", {}) : child.text }, childIndex));
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

Object.defineProperty(exports, "toast", {
    enumerable: true,
    get: function () { return sonner.toast; }
});
Object.defineProperty(exports, "DirectionProvider", {
    enumerable: true,
    get: function () { return reactDirection.DirectionProvider; }
});
exports.Accordion = AccordionComponent;
exports.AnimatedGradientText = AnimatedGradientText;
exports.AspectRatio = AspectRatio;
exports.Avatar = PicGroup;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent;
exports.CollapsibleTrigger = CollapsibleTrigger;
exports.Combobox = ComboboxDemo;
exports.Command = Command;
exports.CommandDialog = CommandDialog;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.CommandList = CommandList;
exports.CommandSeparator = CommandSeparator;
exports.CommandShortcut = CommandShortcut;
exports.Copy = Copy;
exports.CustomDropdownMenu = CustomDropdownMenu;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu$1;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent$1;
exports.DropdownMenuGroup = DropdownMenuGroup$1;
exports.DropdownMenuItem = DropdownMenuItem$1;
exports.DropdownMenuLabel = DropdownMenuLabel$1;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup$1;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem$1;
exports.DropdownMenuSeparator = DropdownMenuSeparator$1;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger$1;
exports.Editable = Editable;
exports.Editor = _Editor;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.Input = Input;
exports.InputOTP = InputOTP;
exports.InputOTPGroup = InputOTPGroup;
exports.InputOTPSeparator = InputOTPSeparator;
exports.InputOTPSlot = InputOTPSlot;
exports.Label = Label;
exports.OperatorsSelect = OperatorsSelect;
exports.Pagination = Pagination;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator$1;
exports.ShadCNAvatar = avatar;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetGrid = SheetGrid;
exports.SheetHeader = SheetHeader;
exports.SheetOverlay = SheetOverlay;
exports.SheetPortal = SheetPortal;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Sidebar = Sidebar;
exports.SidebarContent = SidebarContent;
exports.SidebarFooter = SidebarFooter;
exports.SidebarGroup = SidebarGroup;
exports.SidebarGroupAction = SidebarGroupAction;
exports.SidebarGroupContent = SidebarGroupContent;
exports.SidebarGroupLabel = SidebarGroupLabel;
exports.SidebarHeader = SidebarHeader;
exports.SidebarInput = SidebarInput;
exports.SidebarInset = SidebarInset;
exports.SidebarMenu = SidebarMenu;
exports.SidebarMenuAction = SidebarMenuAction;
exports.SidebarMenuBadge = SidebarMenuBadge;
exports.SidebarMenuButton = SidebarMenuButton;
exports.SidebarMenuItem = SidebarMenuItem;
exports.SidebarMenuSkeleton = SidebarMenuSkeleton;
exports.SidebarMenuSub = SidebarMenuSub;
exports.SidebarMenuSubButton = SidebarMenuSubButton;
exports.SidebarMenuSubItem = SidebarMenuSubItem;
exports.SidebarProvider = SidebarProvider;
exports.SidebarRail = SidebarRail;
exports.SidebarSeparator = SidebarSeparator;
exports.SidebarTrigger = SidebarTrigger;
exports.Skeleton = Skeleton;
exports.Switch = Switch;
exports.Table = _Table;
exports.TableOptions = TableOptions;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Tag = Tag;
exports.Textarea = Textarea;
exports.ThemeProvider = ThemeProvider;
exports.Toaster = Toaster;
exports.Tooltip = Tooltip$1;
exports.TooltipContent = TooltipContent$1;
exports.TooltipGlobal = TooltipGlobal;
exports.TooltipProvider = TooltipProvider$1;
exports.TooltipTrigger = TooltipTrigger$1;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants$2;
exports.getDateDifference = getDateDifference;
exports.getToken = getToken;
exports.parseArrayToHTML = parseArrayToHTML;
exports.parseArrayToString = parseArrayToString;
exports.useFormField = useFormField;
exports.useSidebar = useSidebar;
exports.useTheme = useTheme;
exports.useThemeStore = useThemeStore;
