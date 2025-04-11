import ListGroup from 'react-bootstrap/ListGroup';

export const ListItem = ( {item} ) => {
  // console.log(`${item[0]} ${item[1]}`);
  // console.log(item);
  const st = {
    color: 'red'
  }
  return (
    <div>
      <div style={{color: 'blue'}}>{item[0]}</div>
      <div>{item[1]}</div>
    </div>
  );

};

    // <div>
    //   <ListGroup.Item as="li">{item[0]}</ListGroup.Item>
    //   <ListGroup.Item as="li">{item[1]}</ListGroup.Item>
    // </div>;