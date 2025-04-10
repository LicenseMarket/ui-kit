export interface Column {
    title: string;
    dataIndex?: string;
    className?: string;
    align?: "justify-start" | "justify-center" | "justify-end";
    render?: (selected: any, item: any, index: number, data: any) => any;
}
type OnRowType = (selected: any) => void;
interface Props {
    data?: any[];
    columns: Column[];
    caption?: string;
    onRow?: OnRowType;
    className?: string;
    loading?: boolean;
    rowClassName?: string;
    hrefPattern?: string;
}
declare const _Table: ({ data, columns, caption, onRow, className, loading, hrefPattern, rowClassName, }: Props) => import("react/jsx-runtime").JSX.Element;
export default _Table;
