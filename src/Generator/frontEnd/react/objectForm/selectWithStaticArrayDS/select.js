import React, { useState } from 'react';
import {
  Form,
  Col,
  FloatingLabel,
} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

import { SelectItem } from './selectItem';


export const Select = ({ cols, dataContext, onDataChange, onComponentSelect }) => {
  if (
    cols['value']['type'] === 'primitive' &&
    cols['value']['schema']['type'] === 'String' &&
    cols['value']['schema']['option'] === 'select'
  ) {
    const onChangeData = (e) => {
      onDataChange(e);
    };
    return (
      <Col>
        {/* <>{onComponentSelect(textComponentBody(cols))}</> */}
        {/* <Form.Group className="mb-3" controlId="formBasicSelect"> */}
        <FloatingLabel
          controlId={cols['title']}
          // controlId={'floatingSelect'}
          label={cols['lable']}
          className="mb-3"
        >
          <Form.Select
            aria-label="Select"
            // value={dataContext[`${cols['id']}`]}
            onChange={onChangeData}
            disabled={cols['isDisabled']}
          >
            {cols['value']['schema']['enum'].map((item) => {
              return <SelectItem key={uuid()} title={item} />;
            })}
          </Form.Select>
        </FloatingLabel>
      </Col>
    );
  }
};

// export default withContext(Select, {});
export default Select;

