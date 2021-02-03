import React, { ReactElement, MouseEvent } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

interface ModalProps {
  close: (event: MouseEvent<HTMLInputElement>) => void;
}

export default function ModalFooter({ close }: ModalProps): ReactElement {
  return (
    <Row>
      <Col xs="1">
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </Col>
      <Col xs="7" sm="8" md="8" lg="9" xlg="10" />
      <Col xs="1">
        <Button variant="primary" type="submit">
          Onwards
        </Button>
      </Col>
    </Row>
  );
}
