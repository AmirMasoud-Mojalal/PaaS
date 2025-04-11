import React from "react";

const TableHeader = ({ columns, onSort, onSortIcon }) => {
  return (
    <thead style={{ backgroundColor: "lightgray" }}>
      <tr>
        <th>#</th>
        {columns.map((column, index) => (
          <th
            onClick={() => onSort(column)}
            key={index}
            style={{
              width: column.percent ? column.percent + "%" : "auto",
              cursor: column.content ? "" : "pointer",
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
