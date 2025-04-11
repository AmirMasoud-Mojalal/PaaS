import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import "./index.css";

const BKOCard = (props) => {
  return (
    <Card className="my-4">
      <Card.Header className="d-flex justify-content-between">
        {props.header}
        {props.onClose ? (
          <CloseButton variant="white" onClick={props.onClose} />
        ) : (
          <></>
        )}
      </Card.Header>
      <Card.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit();
          }}
        >
          {props.children}
        </Form>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-around">
        {props.footer.map((item, i) => (
          <Button key={i} variant={item.color} {...item}>
            {item.label}
          </Button>
        ))}
      </Card.Footer>
    </Card>
  );
};

export default BKOCard;
