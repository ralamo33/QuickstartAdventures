import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Modal, Form, Row, Col} from "react-bootstrap";
import axios from "axios";
import ModalFooter from "../components/ModalFooter";
import styled from "styled-components";



export default function MyModal(props) {
  const show = props.show;
  const setShow = props.setShow;
  const apiUrl = 'https://9oeq1w1vcf.execute-api.us-east-1.amazonaws.com/prod/notify';
  const topicArn = '?TopicArn=' + props.topicArn
  const emailParam = '&Message=';
  let [email, setEmail] = useState("");
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = event => {
    event.preventDefault();
    axios.post(
      apiUrl + topicArn + emailParam + email, {}, {
        headers: {"x-api-key": "3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7"}
      }
    ).then(handleClose()
    ).catch((error) => alert(error));
  }

  const MyLabel = styled(Form.Label)`
    font-size: 1rem;
    margin: 0px;
    padding: 0px;
  `

  const MyText = styled(Form.Text)`
    font-size: 0.7rem;
    margin: 0px;
    padding: 0px;
  `
  
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Where Shall we Send the Ravens?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="EmailSubmit">
                  <MyLabel>Email Address</MyLabel>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                  <MyText>
                      This is where we will email you a pdf of Quickstart Adventures. We'll never share your email with anyone else.
                  </MyText>
                  <ModalFooter close={handleClose}></ModalFooter>
              </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      </div>
  );
}