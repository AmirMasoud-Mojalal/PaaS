const componentBody = (col) => {
  return {
    import: {
      react: { default: { React: '' }, nonDefault: { useState: '' } },
      'react-bootstrap': {
        default: {},
        nonDefault: { Form: '', Col: '', FloatingLabel: '' },
      },
    },
    state: { type: String, default: `` },
    method: {},
    body: `
  <Col>
    <Form.Group className="mb-3" controlId="formBasicText">
      <FloatingLabel label={${col['lable']}} className="mb-3">
        <Form.Control
          id={${col['title']}-id}
          aria-describedby={${col['title']}-comment}
          required
          placeholder="field"
          value={item}
          onChange={onChangeData}
          disabled={${col['isDisabled']}}
          size="lg"
        />
        <Form.Text id={${col['title']}-comment}>
          {${col['message']}}
        </Form.Text>
      </FloatingLabel>
    </Form.Group>
  </Col>
`,
  };
};
module.exports = componentBody;

// console.log(
//   componentBody({
//     id: 'albc',
//     isDisabled: true,
//     message: 'salam',
//   })
// );
