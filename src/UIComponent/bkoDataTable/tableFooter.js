import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";

const TableFooter = ({
  onPaging,
  pageNum,
  count,
  pageCount,
  pageSizes,
  onPageSize,
}) => {
  const items = [];
  const totalCount = Math.ceil(count / pageCount);
  let isPageNumberOutOfRange;
  for (let i = 1; i <= totalCount; i++) {
    if (Math.abs(pageNum - i) <= 3) {
      isPageNumberOutOfRange = false;
      items.push(
        <Pagination.Item
          key={i}
          active={i === pageNum}
          onClick={(e) => onPaging(e, i)}
        >
          {i}
        </Pagination.Item>
      );
    } else if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      items.push(<Pagination.Ellipsis key={i} disabled />);
    }
  }
  return (
    <div className="d-flex justify-content-between">
      <div className="d-inline-flex mt-1">
        <Pagination dir="rtl">
          <Pagination.First
            disabled={pageNum === 1}
            onClick={(e) => onPaging(e, 1)}
          />
          <Pagination.Prev
            disabled={pageNum === 1}
            onClick={(e) => onPaging(e, pageNum - 1)}
          />
          {items}
          <Pagination.Next
            disabled={pageNum === totalCount}
            onClick={(e) => onPaging(e, pageNum + 1)}
          />
          <Pagination.Last
            disabled={pageNum === totalCount}
            onClick={(e) => onPaging(e, totalCount)}
          />
        </Pagination>
      </div>

      <div style={{ width: "10%" }}>
        {pageSizes.length > 1 && (
          <Form.Select
            style={{
              backgroundPosition: "left .75rem center",
              padding: ".375rem .75rem .375rem 2.25rem",
            }}
            value={pageCount}
            onChange={(e) => onPageSize(e)}
          >
            {pageSizes.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        )}
      </div>
    </div>
  );
};

TableFooter.propTypes = {
  count: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  pageNum: PropTypes.number.isRequired,
};

export default TableFooter;
