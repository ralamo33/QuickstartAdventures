import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface RowProps<ItemType> {
  items: ItemType[];
}

export default function EvenSpacingRow<ItemType>({
  items,
}: RowProps<ItemType>): ReactElement {
  const cols = items.map((item, idx) => <Col key={idx.toString()}>{item}</Col>);

  return (
    <Container fluid>
      <Row>{cols}</Row>
    </Container>
  );
}
