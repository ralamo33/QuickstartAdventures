import React from 'react';
import {ErrorMessage, Formik, Field, Form } from 'formik';
import {Button, Row, Col} from 'react-bootstrap';
import styled from "styled-components";
import * as Yup from 'yup';
import Break from "../components/Break";
import axios from "axios";
 


export default function MyForm(props) {

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    test: Yup.number('Invalid').min(4, 'Incorrect').max(4, 'Incorrect').required('You must pass the test'),
  });


  const MyLabel = styled.p`
    font-size: 20px;
    display: block;
  `

  const MyField = styled(Field)`
    margin-bottom: 25px;
  `

  const FullField = styled(MyField)`
    width: 100%;
  `

  const TestQuestion = styled.p`
    margin-left: 10px;
  `


  return  <div>
            <Formik
              initialValues={{
                email: '',
                test: '',
              }}
              validationSchema={ValidationSchema}
              onSubmit={async (values) => {
                axios.post(
                  props.apiUrlFunction(values.email), {}, {
                    headers: {"x-api-key": props.apiKey}
                  }
                ).catch((error) => alert(error))
                .then(props.close)
              }
            }
            >
            <Form>
                <MyLabel>Email</MyLabel>
                <Row>
                  <Col>
                    <FullField id="email" name="email" placeholder="Your email address" />
                    <ErrorMessage name="email" />
                  </Col>
                </Row>
                <Break height="3"/>
                <MyLabel>Are you undead?</MyLabel>
                <Row>
                  <TestQuestion>2 + 2 =</TestQuestion>
                  <Col>
                    <FullField
                      id="test"
                      name="test"
                      placeholder="What is the answer?"
                      type="text"
                    />
                    <ErrorMessage name="test"/>
                  </Col>
                </Row>
              <Row>
                <Col xs="1">
                    <Button variant="secondary" onClick={props.close}>Close</Button>
                </Col>
                <Col xs="7" sm="8" md="8" lg="9" xlg="10"></Col>
                <Col xs="1">
                    <Button variant="primary" type="submit">Onwards</Button>
                </Col>
              </Row>
              </Form>
            </Formik>
          </div>
};