import React from "react";
import ReportHeader from "./reportHeader";
import ReportTable from "./Table/table";

const PDFExport = React.forwardRef((props, ref) => {
  const { data, composed: ComposedComponent } = props;

  return (
    <div
      ref={ref}
      className="border border-dark rounded m-2"
      style={{ backgroundColor: "white", direction: "rtl" }}
    >
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
        <ReportTable data={data} pageSizes={[10000]} />
      </div>
    </div>
  );
});

export default PDFExport;
