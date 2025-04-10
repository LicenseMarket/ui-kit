// src/index.ts
export * from "./components/ui/button";
export * from "./components/ui/separator";
export * from "./components/ui/sidebar";
export * from "./components/ui/sheet";
export * from "./components/ui/tooltip";
export * from "./components/ui/skeleton";
export * from "./components/ui/scroll-area"; // Removed duplicate export
export * from "./components/ui/input";
export * from "./components/ui/input-otp";
export * from "./components/ui/collapsible";
export * from "./components/ui/dropdown-menu";
export * from "./components/ui/breadcrumb";
export * from "./components/ui/tabs";
export * from "./components/ui/dialog";
export * from "./components/ui/textarea";
export * from "./components/ui/command";
export * from "./components/ui/select";
export * from "./components/ui/popover";
export * from "./components/ui/badge";
export * from "./components/ui/switch";
export * from "./components/common/ThemeProvider";
export * from "./components/ui/card";
export * from "./components/ui/form";
export * from "./components/ui/radio-group";
export * from "./components/ui/label";
export * from "./components/ui/sonner";
export * from "./components/ui/checkbox";
export * from "./components/global/operators-select";
export * from "./components/ui/calendar";
export * from "./components/ui/aspect-ratio";
export * as ShadCNAvatar from "./components/ui/avatar";
export * from "./components/magicui/animated-gradient-text";

export { DirectionProvider } from "@radix-ui/react-direction";

export * from "./lib/dateDifference";

// Named exports for global components
export { default as SheetGrid } from "./components/global/SheetGrid";
export { default as Combobox } from "./components/global/Combobox";
export { default as CustomDropdownMenu } from "./components/global/DropdownMenu";
export { default as Table, Column } from "./components/global/Table";
export { default as TableOptions } from "./components/global/TableOptions";
export { default as Tag } from "./components/global/Tag";
export { default as Avatar } from "./components/global/Avatar";
export { default as Accordion } from "./components/global/Accordion";
export { default as Editable } from "./components/global/Editable";
export { default as TooltipGlobal } from "./components/global/Tooltip";
export { default as Copy } from "./components/global/Copy";
export { default as Editor } from "./components/global/Editor";
export * from "./lib/arrayParser";

// Optional: Export API_URL as a function or constant if needed
// export const API_URL = "https://default-api-url.com"; // Replace with a default or runtime solution
