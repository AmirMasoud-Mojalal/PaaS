import React, { useState } from 'react';
import {
  Form,
  Row,
  Col,
  Button,
  FormCheck,
  FloatingLabel,
} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListItem } from './listItem';
import { v4 as uuid } from 'uuid';
import { Grid } from './container/grid';

const ListTitle = ({ headers }) => {
  {console.log(headers.length);}
  return (
    <div className="grid-container">
      <div
        className="grid-row header"
        style={{ 'gridTemplateColumns': `repeat(${headers.length}, 20fr)` }}
      >
        {headers.map((header) => {
          return (
            <div className="grid-item header" key={uuid()}>
              {header}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const List = ({ cols }) => {
  const [count, setCount] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [hasNextPage, setHasNextPage] = useState();
  const [hasPrevPage, setHasPrevPage] = useState();
  const [lastPage, setLastPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [rows, setRows] = useState();

  if (
    cols['value']['type'] === 'array' &&
    cols['value']['schema']['type'] === 'array'
  ) {
    return (
      <>
        <ListTitle headers={cols['value']['schema']['option'][0]} />
        {cols['value']['schema']['option'][1].map((item) => {
          return <ListItem key={uuid()} item={item} />;
        })}
        {/* <Grid headerTitle={cols['title']}/> */}
      </>
    );
  }
};

// <>
//   <ListFilter headers={cols['value']['schema']['option'][0]} />
//   <ListGroup as="ul" horizontal>
//     {cols['value']['schema']['option'][1].map((item) => {
//       return <ListItem key={uuid()} item={item} />;
//     })}
//   </ListGroup>
// </>
