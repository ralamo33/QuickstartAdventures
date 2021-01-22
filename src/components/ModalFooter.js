import React from "react"
import {Button, Row, Col} from "react-bootstrap";

export default function ModalFooter(props) {
    return  <Row>
                <Col xs="1">
                    <Button variant="secondary" onClick={props.close}>Close</Button>
                </Col>
                <Col xs="7" sm="8" md="8" lg="9" xlg="10"></Col>
                <Col xs="1">
                    <Button variant="primary" type="submit">Onwards</Button>
                </Col>
            </Row>
}