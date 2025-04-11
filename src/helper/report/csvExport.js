import React from "react";
import { CSVLink } from "react-csv";

const CSVExport = ({ children, data }) => {
  return <CSVLink data={data.rows}>{children}</CSVLink>;
};

export default CSVExport;
