const componentBody = (col) => {
  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      'react-bootstrap': {
        default: {},
        nonDefault: { Form: '', Col: '' },
      },
      uuid: {
        default: {},
        nonDefault: { 'v4 as uuid': '' },
      },
      '../fieldset': {
        default: { Fieldset: '' },
        nonDefault: {},
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
  <Col>
    <Fieldset title={col['label']}>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <br></br>
        ${Object.keys(col['value']['schema']['enum']).map((enumItem, index) => {
          return `
      <Form.Label></Form.Label>
      <Form.Check
        // id={key}
        name={${index}}
        type="checkbox"
        label={${col['value']['schema']['enum'][index]}}
        disabled={${col['isDisabled']}}
        inline={${col['inline']}}
        onChange={''}
        checked={''}
        value={''}
      ></Form.Check>`;
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
