import React from "react";
import styled from "styled-components";
import {ErrorMessage, Formik, Field, Form } from 'formik';
import {Row, Col} from "react-bootstrap"

export default function NewName() {

  const MyLabel = styled.p`
    font-size: 20px;
    display: block;
  `

  const FullField = styled(Field)`
    margin-bottom: 25px;
    width: 100%;
  `

    return  <div>
                <MyLabel>New Name</MyLabel>
                <Row>
                    <Col>
                        <FullField id="newName" name="newName" placeholder="Winner gets $50" />
                        <ErrorMessage name="email" />
                    </Col>
                </Row>
            </div>
}