import { Row, Col, FormLabel, FormControl } from 'react-bootstrap';
import { GridColumn } from './gridColumn';
import { GridRow } from './gridRow';
// import { IContainer } from '../container/GridContainer';

export const GridBody = ({ rows }) => {
  // {
  //   console.log(rows[0]);
  // }

  return (
    <>
      {rows.map((level, index) => {
        if (index % 2 == 0) {
          console.log(index);
          return <GridBodyDetail rows={[rows[index], rows[index + 1]]} />;
        }
      })}
    </>
    // {rows.map((row)=>{
    //   console.log(row);
    // })}
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

{
  /* <Row
  style={{
    // "border-bottom": "groove",
    backgroundColor: '#F5F5F5',
  }}
>
  <Col
    className="border text-center font-weight-bolder"
    style={{ paddingBottom: '0.5rem', border: '1px solid ' }}
  >
    fName
  </Col>
  <Col
    className="border text-center"
    style={{ paddingBottom: '0.5rem', border: '1px solid ' }}
  >
    lName
  </Col>
  <Col>telnumber</Col>
</Row>
<Row>
  <Col style={{ paddingBottom: '0.5rem', border: '1px solid #ECECEC' }}>
    مسعود
  </Col>
  <Col style={{ paddingBottom: '0.5rem', border: '1px solid #ECECEC' }}>
    مجلل
  </Col>
  <Col style={{ paddingBottom: '0.5rem', border: '1px solid #ECECEC' }}>
    09391717968
  </Col>
</Row>
<Row>
  <Col>lName</Col>
</Row>
<Row>
  <Col>lName</Col>
</Row>
<Row>
  <Col>lName</Col>
</Row>
 */
}
