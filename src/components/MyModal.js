import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal} from "react-bootstrap";
import * as Constants from "../constants";
import MyForm from "../components/MyForm";


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
          <Modal.Title>Where Shall we Send the Ravens?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm close={handleClose} apiKey={Constants.PLAYTEST_API_KEY} 
          apiUrlFunction={(email) => Constants.PLAYTEST_API + "&Message=" + email}></MyForm>
        </Modal.Body>
      </Modal>
      </div>
  );
}
