import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';
import TextField from '../FormFields/TextField';

interface CheckProps {
  question: string;
}

export default function CheckHuman({ question }: CheckProps): ReactElement {
  const MyLabel = styled.p`
    font-size: 20px;
    display: block;
  `;

  const MyField = styled(Field)`
    margin-bottom: 25px;
  `;

  const FullField = styled(MyField)`
    width: 100%;
  `;

  const TestQuestion = styled.p`
    margin-left: 10px;
  `;

  return (
    <div>
      <MyLabel>Are you undead?</MyLabel>
      <Row>
        <TestQuestion>{question}</TestQuestion>
        <Col>
          <TextField
            name="test"
            placeholder="What is the answer?"
            minWidth="40vw"
          />
        </Col>
      </Row>
    </div>
  );
}
