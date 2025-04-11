import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import {
  convertIntegerToDateObject,
  convertStringToDateObject,
  getCurrentDate,
  getMilladyCurrentDate,
} from "../../helper/utils/date";
import _ from "lodash";

const BKOCalendar = (props) => {
  const { label, error, value, onChange, ...otherProps } = props;
  const [date, setDate] = useState(
    value === "" || value === 0 || _.isEmpty(value)
      ? getCurrentDate()
      : typeof value === "string"
      ? convertStringToDateObject(value)
      : typeof value === "number"
      ? convertIntegerToDateObject(value)
      : value
  );
  const [locale, setLocale] = useState("fa");
  return (
    <React.Fragment>
      {label && <Form.Label>{label}</Form.Label>}
      <Calendar
        locale={locale}
        shouldHighlightWeekends
        value={date}
        onChange={(e) => e}
        {...otherProps}
        renderFooter={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem 2rem",
            }}
          >
            <Button
              onClick={() => {
                if (locale === "fa") {
                  setLocale("en");
                  setDate(getMilladyCurrentDate());
                } else {
                  setLocale("fa");
                  setDate(getCurrentDate());
                }
              }}
              variant="primary"
            >
              {locale === "fa" ? "تبدیل به میلادی" : "Change to Shamsi"}
            </Button>
          </div>
        )}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </React.Fragment>
  );
};

export default BKOCalendar;
