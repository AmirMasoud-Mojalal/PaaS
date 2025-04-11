import React, { useState } from 'react';
import { Form, Row, Col, Button, FormCheck, Dropdown } from 'react-bootstrap';

export const SelectItem = ({ title }) => {
  return <option value={title}>{title}</option>;
};
