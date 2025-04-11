import React from "react";
import PropTypes from "prop-types";
import { Form, Pagination } from "react-bootstrap";

const Paging = ({
  totalCount,
  pageCount,
  pageNum,
  onPageChange,
  pageSizes,
  onPageSize,
}) => {
  const items = [];
  let isPageNumberOutOfRange;
  for (let i = 1; i <= totalCount; i++) {
    if (Math.abs(pageNum - i) <= 3) {
      isPageNumberOutOfRange = false;
      items.push(
        <Pagination.Item
          key={i}
          active={i === pageNum + 1}
          onClick={(e) => onPageChange(e, i)}
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
        {totalCount > 1 && (
          <Pagination dir="rtl">
            <Pagination.First
              disabled={pageNum === 0}
              onClick={(e) => onPageChange(e, 1)}
            />
            <Pagination.Prev
              disabled={pageNum === 0}
              onClick={(e) => onPageChange(e, pageNum)}
            />
            {items}
            <Pagination.Next
              disabled={pageNum === totalCount - 1}
              onClick={(e) => onPageChange(e, pageNum + 2)}
            />
            <Pagination.Last
              disabled={pageNum === totalCount - 1}
              onClick={(e) => onPageChange(e, totalCount)}
            />
          </Pagination>
        )}
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

Paging.propTypes = {
  totalCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  pageNum: PropTypes.number.isRequired,
};

export default Paging;
