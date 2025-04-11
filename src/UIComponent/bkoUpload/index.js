import React from "react";
// import { Form } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function BKOUpload(props) {
  const { ...otherProps } = props;
  return (
    <React.Fragment>
      {/* <Form.File
        id="custom-file"
        label="Custom file input"
        custom
        // data-browse="Select File"
        {...otherProps}
      /> */}

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>فایل</Form.Label>

        <Form.Control
          type="file"
          //   custom
          label="Custom file input"
          //   required={error ? true : false}
          //   isInvalid={error ? true : false}
          {...otherProps}
        />
      </Form.Group>

      <Form.Control.Feedback type="invalid">test</Form.Control.Feedback>
    </React.Fragment>
  );
}

BKOUpload.propTypes = {
  name: PropTypes.string.isRequired,
};
export default BKOUpload;
