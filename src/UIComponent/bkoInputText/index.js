import React from "react";
import PropTypes from "prop-types";
import { Form, FloatingLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BKOInputText = (props) => {
  const { inline, ...otherProps } = props;
  const formLabel = <Form.Label>{props.label}</Form.Label>;

  const formComponent = (
    <>
      <Form.Control
        required={props.error ? true : false}
        isInvalid={props.error ? true : false}
        // isValid={props.error ? false : true}
        {...otherProps}
      ></Form.Control>
      <Form.Control.Feedback type="invalid">
        {props.error}
      </Form.Control.Feedback>
    </>
  );
  const com = () => {
    if (inline) {
      return (
        <Row>
          <Col md={3} sm={3}>
            {formLabel}
          </Col>
          <Col md={9} sm={9}>
            {formComponent}
          </Col>
        </Row>
      );
    } else {
      return (
        <React.Fragment>
          {formLabel} {formComponent}
        </React.Fragment>
      );
    }
  };
  return com();
};

BKOInputText.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BKOInputText;
