import * as React from 'react';

export default function GridColumn({ columnLength, columnValue }) {
  return (
    <div className={`col-md-${columnLength} text-body-secondary`}>
      {columnValue}
    </div>
  );
}
