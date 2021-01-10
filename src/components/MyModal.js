import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Modal, Form, Row, Col} from "react-bootstrap";
import axios from "axios";



export default function MyModal(props) {
  const show = props.show;
  const setShow = props.setShow;
  const apiUrl = 'https://9oeq1w1vcf.execute-api.us-east-1.amazonaws.com/prod/notify';
  const emailParam = '?TopicArn=arn:aws:sns:us-east-1:451835830300:AddEmail&Message=';
  let [email, setEmail] = useState("");
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = event => {
    event.preventDefault();
    axios.post(
      apiUrl + emailParam + email, {}, {
        headers: {"x-api-key": "3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7"}
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
                  <Row>
                    <Col xs="1">
                      <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Col>
                    <Col xs="7" sm="8" md="8" lg="9" xlg="10"></Col>
                    <Col xs="1">
                      <Button variant="primary" type="submit">Onwards</Button>
                    </Col>
                  </Row>
          </Form>
        </Modal.Body>
      </Modal>
      </div>
  );
}