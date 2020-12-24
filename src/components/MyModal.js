import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import EmailForm from "../components/EmailForm";



export default function MyModal(props) {
  const show = props.show;
  const setShow = props.setShow;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Where Shall we Send the Ravens?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmailForm></EmailForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Onwards</Button>
        </Modal.Footer>
      </Modal>
      </div>
  );
}