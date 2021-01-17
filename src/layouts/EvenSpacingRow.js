import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default function EvenSpacingRow(props) {

    const doubled = props.items.map((number) => <Col>{number}</Col>);

    const Items = props.items.map((item) => {
        <Col>Hello</Col>
    })

    return <Container fluid>
                <Row>
                    {doubled}
                </Row>
           </Container>
}
