// import React, { useState } from 'react';
// import { Form, Row, Col, Button, FormCheck, Dropdown } from 'react-bootstrap';
// import { v4 as uuid } from 'uuid';

const { checkGridSize, checkFontSize, getClazz } = require("./objectFormCommons");

// export const EmptyCell = ({ cols }) => {
// if (cols['value']['type'] === 'emptyCell') {
// return <Col></Col>;
// }
// }
const componentBody = (col, mode, space) => {

  const clazz = getClazz(col)

  dataListOptions = `
${space}<div className="${clazz}"></div>`
  return {
    import: {},
    state: { type: String, default: `` },
    method: {},
    body: `${dataListOptions}`,
  };
};
module.exports = componentBody;
