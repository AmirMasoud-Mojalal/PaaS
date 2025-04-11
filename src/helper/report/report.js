import React, { useRef } from "react";
import ReportHeader from "./reportHeader";
import ReportTable from "./Table/table";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faFileExcel,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import ReactToPrint from "react-to-print";
import PDFExport from "./pdfExport";
import ExcelExport from "./excelExport";
import CSVExport from "./csvExport";
import { DownloadTableExcel } from "react-export-table-to-excel";

const ReportComponent = ({ composed: ComposedComponent, data, pageSizes }) => {
  const pdfRef = useRef(null);
  const excelRef = useRef(null);
  // generatePDF = async () => {
  //   let orientation = "landscape";
  //   let paperSize = "a4";
  //   if (this.props.orientation) {
  //     orientation = this.props.orientation;
  //   }
  //   if (this.props.paperSize) {
  //     paperSize = this.props.paperSize;
  //   }
  //   const pdf = new jsPDF(orientation, "px", paperSize);
  //   let html = document.getElementById("pdfReport");
  //   html.style.display = "inline";
  //   const data = await html2canvas(document.querySelector("#pdfReport"));
  //   html.style.display = "none";
  //   const img = data.toDataURL("image/png");
  //   const imgProperties = pdf.getImageProperties(img);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  //   pdf.addImage(img, "PNG", 10, 10, pdfWidth - 10, pdfHeight - 10);
  //   pdf.save("report.pdf");
  // };

  return (
    <>
      <div className="mx-2">
        <ReactToPrint
          content={() => pdfRef.current}
          trigger={() => (
            <FontAwesomeIcon
              icon={faFilePdf}
              // onClick={this.generatePDF}
              className="mx-2 fa-2x"
              style={{ color: "red", cursor: "pointer" }}
            />
          )}
        />
        <DownloadTableExcel
          filename={data.reportName}
          sheet="report"
          currentTableRef={excelRef.current}
        >
          <FontAwesomeIcon
            icon={faFileExcel}
            className="mx-2 fa-2x"
            style={{ color: "green", cursor: "pointer" }}
          />
        </DownloadTableExcel>
        <CSVExport data={data}>
          <FontAwesomeIcon
            icon={faFileCsv}
            className="mx-2 fa-2x"
            style={{ color: "green", cursor: "pointer" }}
          />
        </CSVExport>
      </div>

      <div className="border border-dark rounded m-2">
        <div className="row m-1">
          <ReportHeader
            hparam={data.headParameters}
            param={data.parameters}
            name={data.reportName}
          />
        </div>
        <div className="row m-1">
          {ComposedComponent && <ComposedComponent data={data.parameters} />}
        </div>
        <div className="row m-1">
          <ReportTable data={data} pageSizes={pageSizes} />
        </div>
      </div>

      {/* pdf panel */}
      <div style={{ display: "none" }}>
        <PDFExport data={data} composed={ComposedComponent} ref={pdfRef} />
        <ExcelExport data={data} composed={ComposedComponent} ref={excelRef} />
      </div>

      {/* end of pdf panel */}
    </>
  );
};

export default ReportComponent;
