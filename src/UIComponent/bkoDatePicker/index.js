import React from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { Form } from "react-bootstrap";
import {
  convertIntegerToDateObject,
  convertStringToDateObject,
  getCurrentDate,
} from "../../helper/utils/date";
import _ from "lodash";

const BKODatePicker = (props) => {
  const { label, error, value, ...otherProps } = props;
  const date =
    value === "" || value === 0 || _.isEmpty(value)
      ? getCurrentDate()
      : typeof value === "string"
      ? convertStringToDateObject(value)
      : typeof value === "number"
      ? convertIntegerToDateObject(value)
      : value;

  const renderInput = ({ ref }) => (
    <Form.Control
      ref={ref}
      required={error ? true : false}
      isInvalid={error ? true : false}
      value={`${date.year}/${date.month}/${date.day}`}
      onChange={(e) => e}
    ></Form.Control>
  );

  return (
    <React.Fragment>
      <Form.Label>{label}</Form.Label>
      <br />
      <DatePicker
        value={date}
        renderInput={renderInput}
        locale="fa"
        shouldHighlightWeekends
        {...otherProps}
      />
      <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
        {error}
      </Form.Control.Feedback>
    </React.Fragment>
  );
};

export default BKODatePicker;
