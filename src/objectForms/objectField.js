import React, { useState } from 'react';
// import '../css/bootstrap.rtl.min.css'
// import { Fieldset } from './fieldset';
// import { Form, Row, Col, Button, FormCheck } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';
import { v4 as uuid } from 'uuid';

import Radio from '../components/radio/radio';
// import { Radio } from '../components/radio';
import Checkbox from '../components/check/checkbox';
// import { Checkbox } from '../components/check/checkbox';
import TextArea from '../components/textArea/textArea';
import Text from '../components/text/text-context';
// import { Text } from '../components/text';
import Select from '../components/select/select';
// import { Select } from '../components/select';
import { Datepicker } from '../components/datepicker';
import { Bttn } from '../components/button';
import { EmptyCell } from '../components/emptyCell';
import Switch from '../components/switch/switch';
// import { Switch } from '../components/switch';
import { Grid } from '../components/grid/grid';
import { FileUpload } from '../components/fileUpload';
import { GridNLevel } from '../components/grid/gridNLevel';
// import { Container } from '../components/container';

export const ObjectField = ({ cols, onColDataChange }) => {
  const onDataChange = (e) => {
    onColDataChange(e);
  };
  return (
    <>
      <Radio cols={cols} onDataChange={onDataChange} />
      <Checkbox cols={cols} onDataChange={onDataChange} />
      <Text cols={cols} onDataChange={onDataChange} />
      <TextArea cols={cols} onDataChange={onDataChange} />
      <Select cols={cols} onDataChange={onDataChange} />
      <Switch cols={cols} onDataChange={onDataChange} />
      <Bttn cols={cols} onDataChange={onDataChange} />
      <EmptyCell cols={cols} />
      <Datepicker cols={cols} />
      <Grid cols={cols} />
      <GridNLevel cols={cols} />
      <FileUpload cols={cols} />
    </>
  );
};
// <Container />;
