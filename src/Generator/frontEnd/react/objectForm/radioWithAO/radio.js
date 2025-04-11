import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import { RadioItem } from './radioItem';
import { v4 as uuid } from 'uuid';
import { Fieldset } from '../fieldset';

const Radio = ({ cols, dataContext, onDataChange }) => {
  const [item, setItem] = useState(0);

  const onChangeData = (e) => {
    setItem(e.target.value);
    onDataChange(e);
  };
  if (
    (cols['value']['type'] === 'primitive' &&
      cols['value']['schema']['type'] === 'boolean' &&
      cols['value']['schema']['option'] === 'radio') ||
    (cols['value']['schema']['type'] === 'String' &&
      cols['value']['schema']['option'] === 'radio')
  ) {
    return (
      <Col>
        <Fieldset title={cols['lable']}>
          <Form.Group className="mb-3" controlId="formBasicRadio">
            {Object.keys(cols['value']['schema']['enum']).map((enumItem) => {
              return (
                <RadioItem
                  key={enumItem}
                  name={enumItem}
                  item={cols['value']['schema']['enum'][enumItem]}
                  disabled={cols['isDisabled']}
                  inline={cols['inline']}
                  checked={enumItem == item ? true : false}
                  onDataChange={onChangeData}
                  value={enumItem}
                />
              );
            })}
          </Form.Group>
        </Fieldset>
      </Col>
    );
  } else {
    return;
  }
};
export default Radio;
