import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
// import { Calendar } from 'react-modern-calendar-datepicker';
import { withContext } from '../context/withContext';

export const Datepicker = ({ cols, dataContext }) => {
  // const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDay, setSelectedDay] = useState({
    from: null,
    to: null,
  });

  if (
    cols['value']['type'] === 'primitive' &&
    cols['value']['schema']['type'] === 'date'
  ) {
    return (
      <Col>
        <Form.Group className="mb-3" controlId="formBasicDatepicker">
          <Form.Label>{cols['label']}</Form.Label>
          <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            inputPlaceholder="انتخاب کنید"
            shouldHighlightWeekends
            locale="fa"
          />
        </Form.Group>
      </Col>
    );
  } else {
    return;
  }
};

export default withContext(Datepicker, {});

/* <Form.datepicker type="radio"></Form.Check> */

// <Form.Label>{cols['name']}</Form.Label>
// <Form.Control type="date" name="dueDate" placeholder="Due Date" />
