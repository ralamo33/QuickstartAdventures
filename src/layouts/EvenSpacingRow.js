/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function EvenSpacingRow({ items }) {
  const cols = { items }.map((item) => <Col>{item}</Col>);

  return (
    <Container fluid>
      <Row>
        {cols}
      </Row>
    </Container>
  );
}
