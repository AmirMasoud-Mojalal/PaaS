import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
import { GridContainerObj } from '../container/gridContainer';
import { GridHeader } from './grid-header';
import { GridFooter } from './grid-footer';
import { GridBody } from './grid-body';

export const GridNLevel = ({ cols }) => {
  // console.log(cols['value']['schema']['option']);
  if (
    cols['value']['type'] === 'arrayNLevel'
  ) {
    // for (i=0 ; cols['value']['schema']['option'].length / 2; i++){

    // }
    return (
      <div>
        {/* <Form.Group className="mb-3" controlId="formBasicGridNLevel"> */}
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
