import React from "react";
import "font-awesome/css/font-awesome.css";
import _ from "lodash";

const TableBody = ({ columns, rows, rowID }) => {
  const renderCell = (row, column) => {
    if (column.content) return column.content(row);
    return _.get(row, column.field);
  };
  return (
    <tbody>
      {rows.map((row, rIndex) => (
        <tr key={rIndex}>
          <td>{rowID + rIndex + 1}</td>
          {columns.map((column, cIndex) => (
            <td key={cIndex}>{renderCell(row, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
