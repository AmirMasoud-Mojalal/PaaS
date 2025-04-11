import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
// import { IContainer } from '../container/GridContainer';

export const GridHeader = ({title}) => {
  return (
    <Row
      className="grid-header">
      <Col className="border text-center font-weight-bolder">{title}</Col>
    </Row>
  )
};
