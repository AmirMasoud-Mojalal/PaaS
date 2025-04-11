import React, { useState } from 'react';
// import '../css/bootstrap.rtl.min.css'
// import { Fieldset } from './fieldset';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';
import { v4 as uuid } from 'uuid';
import { ObjectCol } from './objectCol';
var dataObject = {};
const colData = (e) => {
  // console.log(e.target.id, e.target.value);
  dataObject[e.target.id] = e.target.value;
  console.log(dataObject);
};

export const ObjectRow = ({ fields }) =>
  fields.map((field) => {
    return <ObjectCol key={uuid()} cols={field} colData={colData} />;
  });
