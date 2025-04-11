import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
import { GridContainerObj } from '../container/gridContainer';
import { GridHeader } from './grid-header';
import { GridFooter } from './grid-footer';
import { GridBody } from './grid-body';

export const Grid = ({ cols }) => {
  if (
    cols['value']['type'] === 'array'
  ) {
    return (
      <div>
        {/* <Form.Group className="mb-3" controlId="formBasicGrid"> */}
          {/* {console.log(cols['value']['schema']['option'])} */}
          <GridContainerObj>
            <GridHeader title={cols['title']} />
            <GridBody rows={cols['value']['schema']['option']} />
            <GridFooter title={cols['title']} />
          </GridContainerObj>
        {/* </Form.Group> */}
      </div>
    );
  }
};
