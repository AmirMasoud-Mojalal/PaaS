import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

export const GridColumn = ({ titles }) => {
  return (
    <Row className='grid-column'
    >
      {titles.map((title) => {
        return (
          <Col
            className="border text-center font-weight-bolder"
            style={{ paddingBottom: '0.5rem', border: '1px solid ' }}
            key={uuid()}
          >
            {title}
          </Col>
        );
      })}
    </Row>
  );
};
