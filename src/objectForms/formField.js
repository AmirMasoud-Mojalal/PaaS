import React, { useState } from 'react';
// import '../css/bootstrap.rtl.min.css'
// import { Fieldset } from './fieldset';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';
import { ObjectRow } from './objectRow';
import { v4 as uuid } from 'uuid';

export const CreateFormField = ({ props }) => (
  <div>
    {props.map((row) => (
      <div key={uuid()}>
        <Row>
          <ObjectRow key={uuid()} fields={row} />
        </Row>
      </div>
    ))}
  </div>
);
