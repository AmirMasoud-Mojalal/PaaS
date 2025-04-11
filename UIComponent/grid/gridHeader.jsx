import * as React from 'react';

export default function GridHeader({ gridLayout }) {
  return (
    <div
      className="row border border-warning mx-1 my-1 fs-6 fw-semibold text-body-secondary"
      style={{ backgroundColor: '#E7E7E7' }}
    >
      {Object.keys(gridLayout).map((title, index) => {
        return gridLayout[index]['isPrimaryKey'] == false && (
          <div
            className={`col-md-${gridLayout[index]['largeBreakpointWidth']} py-1 border`}
            key={index}
          >
            {gridLayout[index]['label']}
          </div>
        );
      })}
      <div className="col-md-2 py-1 border text-center">عملیات</div>
    </div>
  );
}
