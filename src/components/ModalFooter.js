import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
export default function ModalFooter({ close }) {
  return (
    <Row>
      <Col xs="1">
        <Button variant="secondary" onClick={close}>Close</Button>
      </Col>
      <Col xs="7" sm="8" md="8" lg="9" xlg="10" />
      <Col xs="1">
        <Button variant="primary" type="submit">Onwards</Button>
      </Col>
    </Row>
  );
}
