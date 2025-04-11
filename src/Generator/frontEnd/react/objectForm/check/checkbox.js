import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import { CheckboxItem } from './cheboxItem';
import { v4 as uuid } from 'uuid';
import { Fieldset } from '../fieldset';

const Checkbox = ({ cols, dataContext, onDataChange }) => {
  const [item, setItem] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  const onChangeData = (e) => {
    const a = e.target.value;
    const op = {
      ...item,
      [a]: item[a] === false || item[a] == undefined ? true : false,
    };
    setItem(op);
  };
  if (
    (cols['value']['type'] === 'primitive' &&
      cols['value']['schema']['type'] === 'boolean' &&
      cols['value']['schema']['option'] === 'checkbox') ||
    (cols['value']['schema']['type'] === 'boolean' &&
      cols['value']['schema']['option'] === undefined) ||
    (cols['value']['schema']['type'] === 'String' &&
      cols['value']['schema']['option'] === 'check')
  ) {
    return (
      <Col>
        <Fieldset title={cols['lable']}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Label>{cols['name']}</Form.Label> */}
            <br></br>
            {/* {cols['value']['schema']['enum'].map((item) => { */}
            {Object.keys(cols['value']['schema']['enum']).map((enumItem) => {
              return (
                <CheckboxItem
                  key={enumItem}
                  name={enumItem}
                  item={cols['value']['schema']['enum'][enumItem]}
                  disabled={cols['isDisabled']}
                  inline={cols['inline']}
                  // checked={item[enumItem] === 1 ? true : false}
                  checked={item[enumItem]}
                  onDataChange={onChangeData}
                  value={enumItem}
                  // value={item[enumItem] == enumItem ? `` : enumItem}
                />
              );
            })}
          </Form.Group>
          {/* {item[0] == true ? 1 : 0}
          {item[1] == true ? 1 : 0}
          {item[2] == true ? 1 : 0}
          {item[3] == true ? 1 : 0} */}
        </Fieldset>
      </Col>
    );
  } else {
    return;
  }
};

export default Checkbox;
