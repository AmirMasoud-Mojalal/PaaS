import React, { useState } from 'react';
import { Form, Col, FloatingLabel } from 'react-bootstrap';

const TextArea = ({ cols, dataContext, onDataChange }) => {
  const [item, setItem] = useState('');

  if (
    cols['value']['type'] === 'primitive' &&
    cols['value']['schema']['type'] === 'mlString' &&
    cols['value']['schema']['lines'] != undefined &&
    typeof cols['value']['schema']['lines'] == 'number'
  ) {
    // console.log(`${cols['value']['schema']['lines'] * 20 + 'px'}`);
    const onChangeData = (e) => {
      let newValue = ``;
      newValue += e.target.value;
      setItem(newValue);
      // dataContext.setValue(e.target.id, e.target.value);
      onDataChange(e);
    };
    return (
      <Col>
        {/* <Form.Group className="mb-3" controlId="formBasicTextArea"> */}
        <FloatingLabel label={cols['lable']} className="mb-3">
          <Form.Control
            as="textarea"
            // rows={cols['value']['schema']['lines']}
            id={cols['id']}
            required
            placeholder="field"
            // value={dataContext[`${cols['id']}`]}
            value={item}
            onChange={onChangeData}
            disabled={cols['isDisabled']}
            style={{
              height: `${cols['value']['schema']['lines'] * 40 + 'px'}`,
            }}
          />
        </FloatingLabel>
        {/* </Form.Group> */}
      </Col>
    );
  }
};

export default TextArea;
// formId: (data) => data.id,
// countryName: (data) => data.country,
// id: (data)=> data.dataContext.,
// value: (data)=> data.dataContext.value
// onChange:
