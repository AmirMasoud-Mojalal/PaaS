import React, { useState } from 'react';
import { Fieldset } from '../components/fieldset';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';

import { CreateFormField } from './formField';
import { FormProvider } from './context';

export const ObjectForm = ({ title, fields }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    // console.log(form);
    if (form.checkValidity() === false) {
      e.preventDefault();
      // e.stopPropagation();
      console.log('^^^^^ 1 ^^^^^^^');
    }
    setValidated(true);
    e.preventDefault();
    console.log('^^^^^ 2 ^^^^^^^');
  };
  if (fields[0][0]['value']['type'] !== 'array') {
    const actions = [[
      {
        label: 'تایید',
        id: 'ok',
        type: 'submit',
        isDisabled: false,
        inline: true,
        value: {
          type: 'control',
          schema: {
            type: 'button',
          },
        },
      },
      {
        label: 'انصراف',
        id: 'cancel',
        type: 'cancel',
        isDisabled: false,
        inline: true,
        value: {
          type: 'control',
          schema: {
            type: 'button',
          },
        },
      },
    ]];
    return (
      // <FormProvider ctx={{name: 'ali'}}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Fieldset title={title} fields={fields}>
          <CreateFormField props={fields} />
        </Fieldset>
        <br></br>
      </Form>
      // </FormProvider>
    );
  } else {
    return <CreateFormField props={fields} />;
  }
};