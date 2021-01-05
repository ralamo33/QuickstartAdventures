import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Modal, Form } from "react-bootstrap";
import axios from "axios";



export default function MyModal(props) {
  const show = props.show;
  const setShow = props.setShow;
  const apiUrl = 'https://cors-anywhere.herokuapp.com/https://9oeq1w1vcf.execute-api.us-east-1.amazonaws.com/prod/notify';
  const emailParam = '?TopicArn=arn:aws:sns:us-east-1:451835830300:AddEmail&Message=';
  let [email, setEmail] = useState("");
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = event => {
    event.preventDefault();
    axios.post(
      apiUrl + emailParam + email, {
        headers: {"Access-Control-Allow-Origin": "*"}
      }
    ).then(handleClose()
    ).catch((error) => alert(error));
  }

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
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="EmailSubmit">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                  <Form.Text>
                      This is where we will email you a pdf of Quickstart Adventures. We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                  <Button variant="primary" type="submit">Onwards</Button>
          </Form>
        </Modal.Body>
      </Modal>
      </div>
  );
}