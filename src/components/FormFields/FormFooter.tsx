import React, { ReactElement, MouseEvent } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface FormProps {
  close: (event: MouseEvent<HTMLInputElement>) => void;
}

export default function FormFooter({ close }: FormProps): ReactElement {
  return (
    <Row>
      <Col xs="7" sm="8" md="8" lg="9" />
      <Col xs="1">
        <Button variant="primary" type="submit">
          Onwards
        </Button>
      </Col>
    </Row>
  );
}
