import React, { useState } from 'react';
import CustomModal from '../Modal';
import GridRow from './gridRow';

export default function GridRows({ data, gridLayout, routePath }) {
  const [userId, setUserId] = useState();
  return (
    <>
      <Modal path={userId} lable={Object.keys(routePath)[0]} />
      {data.content.map((row, index) => {
        return (
          <GridRow
            gridLayout={gridLayout}
            row={row}
            onRowClick={setUserId}
            routePath={routePath}
            key={index}
          />
        );
      })}
    </>
  );
}
