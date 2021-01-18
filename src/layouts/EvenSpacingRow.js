import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default function EvenSpacingRow(props) {

    const items = props.items.map((item) => <Col>{item}</Col>);



    return <Container fluid>
                <Row>
                    {items}
                </Row>
           </Container>
}
