import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const TableHeader = ({ columns, onSort, onSortIcon }) => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        {columns.map((column, index) => (
          <th
            onClick={() => onSort(column)}
            scope="col"
            key={index}
            style={{
              width: column.percent + "%",
              cursor: column.content !== null ? "" : "pointer",
            }}
          >
            {column.title}
            {onSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
