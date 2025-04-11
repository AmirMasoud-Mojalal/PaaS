const componentBody = (col) => {
  console.log(col);
  return {
    import: {
      react: `React, { useState }`,
      'react-bootstrap': `{ Form, Col }`,
      uuid: `{ v4 as uuid } `,
      '../fieldset': `{ Fieldset }`,
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
  <Col>
    <Fieldset title={${col['lable']}}>
      <Form.Group className="mb-3" controlId="formBasicRadio">
        ${Object.keys(col['value']['schema']['enum']).map((enumItem, index) => {
          return `
          <Form.Check
            id={${index}}
            // key={key}
            type="radio"
            label={${col['value']['schema']['enum'][index]}}
            disabled={${col['isDisabled']}}
            inline={${col['inline']}}
            onChange={''}
            checked={''}
            value={''}
          />;`;
        })}
      </Form.Group>
    </Fieldset>
  </Col>
`,
  };
};
module.exports = componentBody;

// console.log(
//   componentBody({ label: 'salam', value: { schema: { enum: ['a', 'b'] } } })
// );
