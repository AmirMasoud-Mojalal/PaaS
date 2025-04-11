import React, { useState } from 'react';
import { Form, Row, Col, Button, FormCheck } from 'react-bootstrap';

export const RadioItem = ({
  // key,
  name,
  item,
  disabled,
  inline,
  checked,
  onDataChange,
  value
}) => {
  const onChange = (e) => {
    onDataChange(e);
  };
  return (
    <>
      <Form.Check
        id={name}
        // key={key}
        type="radio"
        label={item}
        disabled={disabled}
        inline={inline}
        onChange={onChange}
        checked={checked}
        value={value}
      />
    </>
  );
};

{
  /* <Form.Label>{item}</Form.Label> */
}

// <div>
// </div>
