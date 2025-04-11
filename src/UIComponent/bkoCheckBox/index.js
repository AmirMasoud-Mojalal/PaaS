import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "./index.css";

function BKOCheckBox(props) {
  const { error, ...otherProps } = props;
  return (
    <React.Fragment>
      <Form.Check
        type="checkbox"
        required={error ? true : false}
        isInvalid={error ? true : false}
        {...otherProps}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </React.Fragment>
  );
}

BKOCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BKOCheckBox;
