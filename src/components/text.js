import React, { useContext, useState } from 'react';
import {
  Form,
  Row,
  Col,
  Button,
  FormCheck,
  FloatingLabel,
} from 'react-bootstrap';

export const Text = ({ cols }) => {
  if (
    cols['value']['type'] === 'primitive' &&
    cols['value']['schema']['type'] === 'string' &&
    cols['value']['schema']['option'] === undefined
  ) {
    // const onChangeData = (e) => {
    //   dataContext.setValue(e.target.id, e.target.value);
    // };
    return (
      <Col>
        <Form.Group>
          <FloatingLabel label={cols['lable']} className="mb-3">
            <Form.Control
              id={cols['name']}
              required
              placeholder="field"
              // value={dataContext[`${cols['name']}`]}
              // onChange={onChangeData}
            />
          </FloatingLabel>
        </Form.Group>
      </Col>
    );
  }
};

// export default withContext(Text);
