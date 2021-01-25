import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal} from "react-bootstrap";
import * as Constants from "../constants";


export default function MyModal(props) {
  const show = props.show;
  const setShow = props.setShow;

  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.form}
        </Modal.Body>
      </Modal>
      </div>
  );
}
