import React, { useState } from 'react';
// import '../css/bootstrap.rtl.min.css'
// import { Fieldset } from './fieldset';
// import { Form, Row, Col, Button, FormCheck } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';
import { v4 as uuid } from 'uuid';

import { Radio } from '../components/radio';
import { Checkbox } from '../components/checkbox/checkbox';
// import  Text  from '../components/text';
import { Text } from '../components/text';
import { Select } from '../components/select';
import { Datepicker } from '../components/datepicker';
import { Bttn } from '../components/button';
import { EmptyCell } from '../components/emptyCell';
import { Switch } from '../components/switch';
import { Grid } from '../components/grid/grid';
import { FileUpload } from '../components/fileUpload';
import { GridNLevel } from '../components/grid/gridNLevel';
// import { Container } from '../components/container';

export const ObjectField = ({ cols }) => {
  // console.log(cols);
  // console.log(cols['value']['schema']['option']);

  return (
    <>
      <Radio cols={cols} />
      <Checkbox cols={cols} />
      <Text cols={cols} />
      <Select cols={cols} />
      <Datepicker cols={cols} />
      <Bttn cols={cols} />
      <EmptyCell cols={cols} />
      <Switch cols={cols} />
      <Grid cols={cols} />
      <GridNLevel cols={cols} />
      <FileUpload cols={cols}/>
    </>
  );
};
      // <Container />;

  