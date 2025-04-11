import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
import { GridPagination } from './gridPagination';
// import { IContainer } from '../container/GridContainer';

export const GridFooter = ({ title }) => {
  return (
    <Row className="grid-footer">
      <Col className="border text-center font-weight-bolder">
        <GridPagination />
      </Col>
    </Row>
  );
};
