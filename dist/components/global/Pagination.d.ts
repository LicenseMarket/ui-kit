import React from "react";
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
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
