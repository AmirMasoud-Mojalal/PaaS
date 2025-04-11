import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.css";

const BKOModal = (props) => {
  const { header, body, footer, ...otherProps } = props;
  return (
    <Modal
      {...otherProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        // className="d-flex justify-content-between"
        style={{ backgroundColor: "lightgrey" }}
        closeButton
      >
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">{body}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-end">
        {footer &&
          footer.map((item, i) => (
            <Button key={i} variant={item.color} {...item}>
              {item.label}
            </Button>
          ))}
      </Modal.Footer>
    </Modal>
  );
};

export default BKOModal;
