import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
// import { IContainer } from '../container/GridContainer';
import { v4 as uuid } from 'uuid';
import { GridRowItem } from './gridRowItem';

export const GridRow = ({ rows }) => {
  return (
    <>
      {rows.map((row) => {
        return <GridRowItem rowCells={row} key={uuid()} />;
      })}
    </>
  );
};

        // console.log(row);
