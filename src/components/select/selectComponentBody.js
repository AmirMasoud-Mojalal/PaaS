const componentBody = (col) => {
  return {
    import: {
      react: {
        default: { React: '' },
        nonDefault: { useState: '' },
      },
      'react-bootstrap': {
        default: {},
        nonDefault: {
          Form: '',
          Col: '',
          FloatingLabel: '',
        },
      },
      uuid: {
        default: {},
        nonDefault: {
          'v4 as uuid': '',
        },
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
  <Col>
    <FloatingLabel
      controlId={${col['title']}}
      label={${col['lable']}}
      className="mb-3"
    >
    <Form.Select
      aria-label="Select"
      onChange={''}
      disabled={${col['isDisabled']}}
    >
    ${col['value']['schema']['enum'].map((item, index) => {
      return `<option value={${item}}>{${item}}</option>;`;
    })}
    </Form.Select>
    </FloatingLabel>
  </Col>
`,
  };
};
module.exports = componentBody;

// console.log(
//   componentBody({ label: 'salam', value: { schema: { enum: ['a', 'b'] } } })
// );
