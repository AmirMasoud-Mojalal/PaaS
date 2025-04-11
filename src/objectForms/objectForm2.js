import React, { useState } from 'react';
// import '../css/bootstrap.rtl.min.css'
import { Fieldset } from '../components/fieldset';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';

import { CreateFormField } from './formField';
import { ObjectForm } from './objectForm';
import { v4 as uuid } from 'uuid';

export const ObjectForm2 = ({ title, fields }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return fields.map((field)=>{
    console.log(field);
    // return <ObjectForm key={uuid()} title={title} fields={field}/>
  })

//   if (fields[0][0]['value']['type'] !== 'array'){
//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       {}
//       <Fieldset title={title} fields={fields}>
//         <CreateFormField props={fields} />
//       </Fieldset>
//     </Form>
//   );
// } else {
// return <CreateFormField props={fields} />;
// }

};

// );

// {
//     console.log(field[0]['field'])
//   }

//   {
//     props.formFields.map((field) => {
//       console.log(field);
//       <CreateRow rowFields={field} />;
//     });
//   }

// <Row>
//   <Col>
//     <Form.Label></Form.Label>
//     <Form.Control required placeholder={'sd'}></Form.Control>
//   </Col>
//   <Col>
//     <Form.Label></Form.Label>
//     <Form.Control placeholder={'adf'}></Form.Control>
//   </Col>
// </Row>

//   <br />
//   <Fieldset>
//     <Row>
//       <Col></Col>
//       <Col></Col>
//       <Col>
//         <Button type="submit" variant="outline-secondary">
//           Submit
//         </Button>
//       </Col>
//     </Row>
//   </Fieldset>

// console.log(props.formFields[0][0]['field']);

// props.formFields.map((field) => {
//   console.log(Object.keys(field));
// });

// {Object.keys(props.formFields).map((ll)=>{console.log(ll)})}
