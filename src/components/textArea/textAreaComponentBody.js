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
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
      <Col>
        <FloatingLabel label={${col['lable']}} className="mb-3">
          <Form.Control
            as="textarea"
            id={${col['title']}}
            required
            placeholder="field"
            value={''}
            onChange={''}
            disabled={${col['isDisabled']}}
            style={{
              height: \`${col['value']['schema']['lines'] * 40 + 'px'}\`,
            }}
          />
        </FloatingLabel>
        {/* </Form.Group> */}
      </Col>
    `,
  };
};
module.exports = componentBody;
