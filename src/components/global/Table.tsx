import React, { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

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

interface GetPreviousRowValueProps {
  get: () => string | null;
  set: (keyValue: string) => void;
}

const handlePreviousRowSession = function (): GetPreviousRowValueProps {
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

      sessionStorage.setItem(
        previousRowName,
        JSON.stringify(rowSelectedOfPage)
      );
    },
  };
};

const _Table = ({
  data,
  columns,
  caption,
  onRow,
  className,
  loading = false,
  hrefPattern,
  rowClassName,
}: Props) => {
  const [previousRow, setPreviousRow] = useState("");
  const memoizedPreviousRow = useMemo(() => previousRow, [previousRow]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 10000));
  }, []);

  useEffect(() => {
    const previousRowValue = handlePreviousRowSession().get();
    if (previousRowValue) setPreviousRow(previousRowValue);

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

  const handleTableRowClick = React.useCallback(function (
    onRow: OnRowType | undefined,
    tableRowKey: string,
    item: any
  ) {
    if (onRow) {
      setPreviousRow(tableRowKey);

      handlePreviousRowSession().set(tableRowKey);
      // Change the execution stack of onRowClick to make the selected animate smoth
      setTimeout(() => onRow(item), 0);
    }
  },
  []);

  const generateHref = (item: any): string => {
    let href = "";

    if (!hrefPattern) return item.id;

    const id = hrefPattern?.split(":")[1];

    const regex = /\[([^\]]+)\]/;
    const findChild = hrefPattern.match(regex);

    href = `?${hrefPattern
      .replace(`:${id}`, findChild ? item[findChild[1]][id] : item[id])
      .replace(regex, "")}`;

    return href;
  };

  return (
    <div
      id={`table-${randomNumber}`}
      className={`${className} rtl hidden-scrollbar h-[calc(100vh-167px)] rounded-2xl border
        border-neutral-300 dark:border-neutral-700`}
    >
      <Spin
        indicator={<LoadingOutlined className="text-primary" spin />}
        spinning={loading}
        className="h-full w-full"
      >
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
              const tableRowKey = `table-row-${item?.id}-${rowIndex}`;
              const previousRowClassName =
                memoizedPreviousRow === tableRowKey ? "bg-red-800/10" : "";

              return (
                <TableRow
                  className={`${previousRowClassName} hover:bg-secondary/40 relative transition-all ${
                  item.link ? "cursor-pointer" : "" } transition-all ${rowClassName}`}
                  key={tableRowKey}
                  onClick={handleTableRowClick.bind(
                    this,
                    onRow,
                    tableRowKey,
                    item
                  )}
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
                              data
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
      </Spin>
    </div>
  );
};
export default _Table;
