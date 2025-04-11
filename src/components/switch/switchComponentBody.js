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
        },
      },
    },
    state: { type: 'Integer', default: 0 },
    method: ``,
    body: `
        <Col>
          <Form.Group className="mb-3" controlId={${col['title']}}>
            <Form.Switch
              label={${col['label']}}
              value={''}
              onChange={''}
              disabled={${col['isDisabled']}}
            />
          </Form.Group>
        </Col>;
      `,
  };
};
module.exports = componentBody;
