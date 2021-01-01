import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Form } from "react-bootstrap";

export default function() {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="EmailSubmit">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text>
                    This is where we will email you a pdf of Quickstart Adventures. We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}
