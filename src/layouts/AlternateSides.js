import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container, Row, Col} from "react-bootstrap";

export default function AlternateSides({ children }) {
    const rows = [];
    for (let i = 0; i < children.length - 1; i += 2) {
        rows.push(
            <Row>
                <Col>
                    {children[i]}
                </Col>
                <Col>
                    {children[i + 1]}
                </Col>
            </Row>
        )
    }
    return (
        <div>
            <Container fluid>
                {rows}
            </Container>
        </div>
    )
}