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
declare const ComboboxDemo: ({ items, placeholder, hasSearch, className, isMultiSelect, onChange, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ComboboxDemo;
