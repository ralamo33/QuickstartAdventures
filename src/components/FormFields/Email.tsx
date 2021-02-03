import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';
import { Row, Col } from 'react-bootstrap';

export default function Email(): ReactElement {
  const MyLabel = styled.p`
    font-size: 20px;
    display: block;
  `;

  const FullField = styled(Field)`
    margin-bottom: 25px;
    width: 100%;
  `;

  return (
    <div>
      <MyLabel>Email</MyLabel>
      <Row>
        <Col>
          <FullField id="email" name="email" placeholder="Your email address" />
          <ErrorMessage name="email" />
        </Col>
      </Row>
    </div>
  );
}
