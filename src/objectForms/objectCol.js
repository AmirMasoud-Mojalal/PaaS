import React, { useState } from 'react';
// import '../css/bootstrap.rtl.min.css'
// import { Fieldset } from './fieldset';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';
import { v4 as uuid } from 'uuid';
import { ObjectField } from './objectField';

export const ObjectCol = ({ cols, colData }) => {
  const onColDataChange = (e) => {
    // console.log(e.target.id, e.target.value);
    colData(e)
  };
  return <ObjectField cols={cols} onColDataChange={onColDataChange} />;
};
