import React, { useState } from 'react';
import { Form, Col, } from 'react-bootstrap';

export const Switch = ({ cols, dataContext, onDataChange }) => {
  const [item, setItem] = useState(false);
  // const [checked, setChecked] = useState(true);

  if (
    cols['value']['type'] === 'primitive' &&
    cols['value']['schema']['type'] === 'boolean' &&
    cols['value']['schema']['option'] === 'switch'
  ) {
    const onChangeData = (e) => {
      // checked == false ? setChecked(true) : setChecked(false);
      item == false ? setItem(true) : setItem(false);
      onDataChange(e);
    };
    return (
      <Col>
        <Form.Group className="mb-3" controlId={cols['title']}>
          {/* <Form.Label>{cols['label']}</Form.Label> */}
          <Form.Switch
            // id={cols['id']}
            label={cols['lable']}
            // value={dataContext[`${cols['id']}`]}
            value={item}
            onChange={onChangeData}
            disabled={cols['isDisabled']}
          />
        </Form.Group>
      </Col>
    );
  } else {
    return;
  }
};

export default Switch;
