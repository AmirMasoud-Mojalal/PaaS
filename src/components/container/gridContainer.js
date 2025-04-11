import { Children } from 'react';
import { Container } from 'react-bootstrap';

export const GridContainerObj = (props) => {
  // if (
  //   Cols['value']['type'] === 'array' &&
  //   Cols['value']['schema']['type'] === 'array'
  // ) {
  return <Container className="grid-container">{props.children}</Container>;
};
