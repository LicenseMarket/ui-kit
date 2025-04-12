export interface Column<T = any> {
    title: string;
    dataIndex?: keyof T;
    className?: string;
    align?: "justify-start" | "justify-center" | "justify-end";
    render?: (selected: T[keyof T], item: T, index: number, data: T[]) => React.ReactNode;
}
type OnRowType<T> = (selected: T) => void;
interface Props<T = any> {
    data?: T[];
    columns: Column<T>[];
    caption?: string;
    onRow?: OnRowType<T>;
    className?: string;
    loading?: boolean;
    rowClassName?: string;
    hrefPattern?: string;
}
declare const _Table: <T extends {
    id: string | number;
}>({ data, columns, caption, onRow, className, loading, hrefPattern, rowClassName, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export default _Table;
