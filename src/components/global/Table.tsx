import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

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

interface GetPreviousRowValueProps {
  get: () => string | null;
  set: (keyValue: string) => void;
}

const handlePreviousRowSession = (): GetPreviousRowValueProps => {
  const previousRowName = "previous-selected-table-row";
  const previousRowSession = sessionStorage.getItem(previousRowName);
  const parsedRowSession = previousRowSession
    ? JSON.parse(previousRowSession)
    : { [window.location.pathname]: null };

  return {
    get: () => parsedRowSession[window.location.pathname] || null,
    set: (keyValue: string) => {
      const rowSelectedOfPage = {
        ...parsedRowSession,
        [window.location.pathname]: keyValue,
      };
      sessionStorage.setItem(previousRowName, JSON.stringify(rowSelectedOfPage));
    },
  };
};

const _Table = <T extends { id: string | number }>({
  data,
  columns,
  caption,
  onRow,
  className,
  loading = false,
  hrefPattern,
  rowClassName,
}: Props<T>) => {
  const [previousRow, setPreviousRow] = useState("");
  const memoizedPreviousRow = useMemo(() => previousRow, [previousRow]);
  const tableId = useMemo(() => Math.floor(Math.random() * 10000), []);

  useEffect(() => {
    const previousRowValue = handlePreviousRowSession().get();
    if (previousRowValue) setPreviousRow(previousRowValue);

    if (data?.length) {
      const tableContainer = document.querySelector(`#table-${tableId}`);
      tableContainer?.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [data, tableId]);

  const handleTableRowClick = useCallback(
    (onRowHandler: OnRowType<T> | undefined, tableRowKey: string, item: T) => {
      if (onRowHandler) {
        setPreviousRow(tableRowKey);
        handlePreviousRowSession().set(tableRowKey);
        setTimeout(() => onRowHandler(item), 0);
      }
    },
    []
  );

  const generateHref = (item: T): string => {
    if (!hrefPattern) return String(item.id);

    const id = hrefPattern.split(":")[1];
    const regex = /\[([^\]]+)\]/;
    const findChild = hrefPattern.match(regex);

    return `?${hrefPattern
      .replace(`:${id}`, findChild ? item[findChild[1]][id] : item[id])
      .replace(regex, "")}`;
  };

  return (
    <div
      id={`table-${tableId}`}
      className={`${className} rtl hidden-scrollbar h-[calc(100vh-167px)] rounded-2xl border
        border-neutral-300 dark:border-neutral-700`}
    >
      <div className="relative h-full w-full">
        {loading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/50">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        )}
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader>
            <TableRow>
              {columns.map((column, i) => (
                <TableHead className={`text-right ${column.className}`} key={i}>
                  {column.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item, rowIndex) => {
              const tableRowKey = `table-row-${item.id}-${rowIndex}`;
              const previousRowClassName =
                memoizedPreviousRow === tableRowKey ? "bg-red-800/10" : "";

              return (
                <TableRow
                  className={`${previousRowClassName} hover:bg-secondary/40 relative transition-all ${"link" in item ? "cursor-pointer" : ""
                    } ${rowClassName}`}
                  key={tableRowKey}
                  onClick={() => handleTableRowClick(onRow, tableRowKey, item)}
                >
                  {columns.map((column, columnIndex) => (
                    <TableCell
                      key={`table-column-${columnIndex}`}
                      className="text-center"
                    >
                      <a
                        href={generateHref(item)}
                        onClick={(e) => e.preventDefault()}
                        className={`flex h-14 cursor-pointer items-center ${column.align}`}
                      >
                        {column.render
                          ? column.render(
                            column.dataIndex ? item[column.dataIndex] : null,
                            item,
                            rowIndex,
                            data || []
                          )
                          : column.dataIndex && item[column.dataIndex]}
                      </a>
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default _Table;
