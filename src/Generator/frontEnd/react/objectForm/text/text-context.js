import React, { useState } from 'react';
import { Form, Col, FloatingLabel } from 'react-bootstrap';

const Text = ({ cols, dataContext, onDataChange, onComponentSelect }) => {
  const [item, setItem] = useState('');
  // console.log(cols);

  //  Solution 1)
  //      useEffect(() => {
  //        onComponentSelect(`Hello!`);
  //      },[]);
  if (
    cols['value']['type'] === 'primitive' &&
    cols['value']['schema']['type'] === 'String' &&
    cols['value']['schema']['option'] === undefined
  ) {
    // const dis = cols['isDisabled'] || false;

    const onChangeData = (e) => {
      // let newValue = ``;
      // newValue += e.target.value;
      setItem(e.target.value);
      onDataChange(e);
    };
    return (
      <Col>
        <Form.Group className="mb-3" controlId="formBasicText">
          <FloatingLabel label={cols['lable']} className="mb-3">
            <Form.Control
              id={cols['title']}
              aria-describedby={`${cols['title']}-comment`}
              required
              placeholder="field"
              // value={dataContext[`${cols['id']}`]}
              value={item}
              onChange={onChangeData}
              disabled={cols['isDisabled']}
              size="lg"
            />
            <Form.Text id={`${cols['title']}-comment`}>
              {cols['message']}
            </Form.Text>
          </FloatingLabel>
        </Form.Group>
      </Col>
    );
  }
};

export default Text;
// export default withContext(Text, {
// formId: (data) => data.dataContext.formId,
// setValue: (data) => data.dataContext.setValue,
// value: (data)=> data.dataContext.
// countryName: (data) => data.country,
// id: (data)=> data.dataContext.,
// value: (data)=> data.dataContext.value
// onChange:
// });
