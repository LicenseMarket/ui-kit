import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@lm/shared";
import { useQueryState } from "nuqs";

interface PaginationProps {
  meta: {
    page?: number;
    limit?: number;
    itemCount?: number;
    hasNextPage?: boolean;
    totalPage?: number;
    currentPage?: number;
  };
}

const Pagination: React.FC<PaginationProps> = ({ meta }) => {
  const [page, setPage] = useQueryState("page");
  const nextTimeout = useRef<any>(null);
  const hasNextPage =
    meta?.hasNextPage ||
    (meta?.totalPage ? meta?.totalPage > meta?.currentPage : false);

  const [currentPage, setCurrentPage] = useState<number>(
    meta?.page + 1 || Number(page) || 1
  );
  const totalPages = Math.ceil(meta?.itemCount / meta?.limit);

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
    if (nextTimeout.current) clearTimeout(nextTimeout.current);

    nextTimeout.current = setTimeout(() => {
      if (page != currentPage.toString()) setCurrentPage(Number(page) || 1);
    }, 200);
  }, [page]);

  return (
    <div className="flex items-center justify-end gap-2">
      {/*<div className="flex items-center gap-x-6 text-sm text-muted-foreground">*/}
      {/*  <p>*/}
      {/*    نمایش {meta.itemCount} از {meta.itemCount} نتیجه*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    صفحه {currentPage} از {totalPages}*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div className="flex items-center gap-x-2">
        <Button
          className="h-8 text-xs"
          variant="outline"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          صفحه قبلی
        </Button>
        <Input
          type="number"
          disabled={!hasNextPage}
          className="no-spinner h-8 w-10 px-1 text-center"
          value={currentPage.toString()}
          onInput={(e) => setCurrentPage(e.target.value)}
          onKeyDown={(e) =>
            e.keyCode == 13 ? setPage(currentPage.toString()) : null
          }
        />
        <Button
          className="h-8 text-xs"
          variant="outline"
          onClick={handleNext}
          disabled={!hasNextPage}
        >
          صفحه بعدی
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
