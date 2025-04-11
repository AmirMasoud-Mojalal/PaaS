import React, { useState } from 'react';
import { Form, Row, Col, Button, FormCheck, Dropdown } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

// import { SelectItem } from './selectItem';

export const Bttn = ({ cols, onDataChange }) => {
  if (
    cols['value']['type'] === 'control' &&
    cols['value']['schema']['type'] === 'button'
  ) {
    console.log(cols);
    return (
      <Col>
        <Form.Group className="mb-3" controlId="formBasicButton">
          <br></br>
          <Button variant="outline-primary" size="sm" type={cols['type']}>
            {cols['label']}
          </Button>
        </Form.Group>
      </Col>
    );
  }
};
