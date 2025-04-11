import { Form, Row, Col, Button, FormCheck, Dropdown } from 'react-bootstrap';

export const FileUpload = ({ cols }) => {
  //  string
  if (cols['value']['type'] === 'blob') {
    // {console.log(cols['name']);}
    return (
      // <Col>
      <Form.Group controlId="formBasicFileMultipleUpload" className="mb-3">
        <Form.Label>{cols['lable']}</Form.Label>
        <Form.Control type="file" className="" />
      </Form.Group>
      // </Col>
    );
  }
};
