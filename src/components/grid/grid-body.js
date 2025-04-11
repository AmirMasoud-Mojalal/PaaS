import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
import { GridColumn } from './gridColumn';
import { GridRow } from './gridRow';

export const GridBody = ({ rows }) => {

  return (
    <>
      {rows.map((level, index) => {
        if (index % 2 == 0) {
          console.log(index);
          return <GridBodyDetail rows={[rows[index], rows[index + 1]]} />;
        }
      })}
    </>
  );
};

const GridBodyDetail = ({ rows }) => {
  {
    console.log(rows);
  }
  return (
    <>
      <GridColumn titles={rows[0]} />
      <GridRow rows={rows[1]} />
    </>
  );
};
