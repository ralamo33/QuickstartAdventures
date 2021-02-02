import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PageProps } from "gatsby";

export default function EvenSpacingRow({ items }) {
  const cols = items.map((item) => <Col>{item}</Col>);

  return (
    <Container fluid>
      <Row>
        {cols}
      </Row>
    </Container>
  );
}
