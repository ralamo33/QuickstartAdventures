import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container, Row, Col} from "react-bootstrap";

export default function Title(props) {
    const Title = styled.h1`
        color: red;
        text-align: center;
    `
    const NavWrapper = styled.div`
        border: 5px dashed white;
        text-align: center;
        color: blue;
        font-size: 20px;
        font-weight: bold;
    `
    const navItems = props.navItems.map((navItem) => {
        return (
            <Col>
                <NavWrapper>
                    {navItem}
                </NavWrapper>
            </Col>
        )
    });
    return (<div>
                <Title>
                    {props.title}
                </Title>
                <Container>
                    <Row>
                        {navItems}
                    </Row>
                </Container>
            </div>);
}