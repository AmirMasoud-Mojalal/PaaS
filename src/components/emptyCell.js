import React, { useState } from 'react';
import { Form, Row, Col, Button, FormCheck, Dropdown } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

export const EmptyCell = ({ cols }) => {
  if (cols['value']['type'] === 'emptyCell') {
    return <Col></Col>;
  }
};
