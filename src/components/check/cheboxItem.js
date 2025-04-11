import React, { useState } from 'react';
import { Form, Row, Col, Button, FormCheck } from 'react-bootstrap';

export const CheckboxItem = ({
  name,
  item,
  disabled,
  inline,
  checked,
  onDataChange,
  value,
}) => {
  const onChange = (e) => {
    onDataChange(e);
  };
  return (
    <>
      <Form.Label></Form.Label>
      <Form.Check
        // id={key}
        name={name}
        type="checkbox"
        label={item}
        disabled={disabled}
        inline={inline}
        onChange={onChange}
        checked={checked}
        value={value}
      ></Form.Check>
    </>
  );
};
