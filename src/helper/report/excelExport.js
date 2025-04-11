import React from "react";
import { Table } from "react-bootstrap";
import ReportTable from "./Table/table";
import { getCurrentDate } from "../utils/date";
// SpreadJS imports
// import "@grapecity/spread-sheets-react";
/* eslint-disable */
// import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
// import {
//   SpreadSheets,
//   Worksheet,
//   Column,
// } from "@grapecity/spread-sheets-react";
// import ReactExport from "react-data-export";

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExcelExport = React.forwardRef((props, ref) => {
  const { data, composed: ComposedComponent } = props;
  const {
    headParameters: hparam,
    parameters: param,
    reportName: name,
    columns,
  } = data;
  let arr = [];
  for (const [key, value] of Object.entries(param)) {
    arr.push(
      <p key={key}>
        <span className="mx-2">
          <strong>{key} :</strong>
        </span>
        <span className="text-muted">{value}</span>
      </p>
    );
  }

  return (
    <div
      ref={ref}
      className="border border-dark rounded m-2"
      style={{ backgroundColor: "white", direction: "rtl" }}
    >
      <div className="row m-1">
        <table className="mt-2" dir="rtl">
          <tbody>
            <tr>
              <td colSpan={columns.length + 1} style={{ align: "center" }}>
                <h3>
                  <p className="row d-flex justify-content-center">
                    سیستم پشتیبانی بانکداری متمرکز
                  </p>
                </h3>
                <p></p>
                <h4>
                  <p className="row d-flex justify-content-center">{name}</p>
                </h4>
              </td>
            </tr>
            <tr>
              <td colSpan={(columns.length + 1) / 2}>
                <p>
                  <span className="mx-2">
                    <strong>کاربر تهیه کننده گزارش:</strong>
                  </span>
                  <span className="text-muted">{hparam.userName}</span>
                </p>
                <p>
                  <span className="mx-2">
                    <strong>نقش کاربر تهیه کننده :</strong>
                  </span>
                  <span className="text-muted">{hparam.userRole}</span>
                </p>
                <p>
                  <span className="mx-2">
                    <strong>تاریخ تهیه گزارش:</strong>
                  </span>
                  <span className="text-muted">
                    {getCurrentDate(true).format("jYYYY/jMM/jDD")}
                  </span>
                </p>
                <p>
                  <span className="mx-2">
                    <strong>زمان تهیه گزارش :</strong>
                  </span>
                  <span className="text-muted">
                    {getCurrentDate(true).format("HH:mm:ss")}
                  </span>
                </p>
              </td>
              <td colSpan={(columns.length + 1) / 2}>{arr}</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div className="row m-1">
        {ComposedComponent && <ComposedComponent data={data.parameters} />}
      </div>
      <div className="row m-1">
        <ReportTable data={data} pageSizes={[10000]} />
      </div>
    </div>
  );
});
// config = {
//   sheetName: "report",
//   hostClass: " spreadsheet",
//   autoGenerateColumns: false,
//   width: 200,
//   visible: true,
//   resizable: true,
//   priceFormatter: "$ #.00",
//   chartKey: 1,
// };

// return (

// <SpreadSheets
//   hostClass={this.config.hostClass}
//   workbookInitialized={setspread}
//   // valueChanged={handleValueChanged}
// >
//   <Worksheet
//     name={this.config.sheetName}
//     dataSource={data.rows}
//     autoGenerateColumns={this.config.autoGenerateColumns}
//   >
//     {data.columns.map((item, i) => (
//       <Column
//         key={i}
//         headerText={item.title}
//         dataField={item.field}
//         width={item.percent * 10}
//       />
//     ))}
//   </Worksheet>
// </SpreadSheets>
// <ExcelFile element={children} filename={data.reportName}>
//   <ExcelSheet data={data.rows} name="Report">
//     {data.columns.map((item) => (
//       <ExcelColumn
//         label={item.title}
//         value={item.field}
//         width={item.percent}
//       />
//     ))}
//   </ExcelSheet>
// </ExcelFile>
// );
// };

export default ExcelExport;
