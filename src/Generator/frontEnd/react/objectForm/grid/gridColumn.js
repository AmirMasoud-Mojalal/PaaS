import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
// import { IContainer } from '../container/GridContainer';
import { v4 as uuid } from 'uuid';

export const GridColumn = ({ titles }) => {
  // {
  //   console.log(titles);
  // }
  return (
    <Row className='grid-column'
      // style={{
      //   // "border-bottom": "groove",
      //   backgroundColor: '#F5F5F5',
      // }}
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

{
  /* <div className="grid-container">
      <div
        className="grid-row header"
        style={{ gridTemplateColumns: `repeat(${titles.length}, 20fr)` }}
      >
        {titles.map((title) => {
          return (
            <div className="grid-item header" key={uuid()}>
              {title}
            </div>
          );
        })}
      </div>
    </div> */
}
