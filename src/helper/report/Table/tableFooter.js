import React from "react";
import Paging from "./paging";

const TableFooter = ({
  onPaging,
  pageNum,
  count,
  pageCount,
  pageSizes,
  onPageSize,
}) => {
  return (
    <Paging
      totalCount={Math.ceil(count / pageCount)}
      pageCount={pageCount}
      onPageChange={onPaging}
      pageNum={pageNum}
      pageSizes={pageSizes}
      onPageSize={onPageSize}
    />
  );
};

export default TableFooter;
