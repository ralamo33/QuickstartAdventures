/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export default function MyNavbar({ navItems }) {
  const NavWrapper = styled.p`
        border: 5px solid black;
        text-align: center;
        font-size: .5em;
        color: #ccffff;
        background-color: #595959;
    `;

  const Navigations = navItems.map((navItem) => (
    <Col>
      <NavWrapper>
        {navItem}
      </NavWrapper>
    </Col>
  ));

  return (
    <Container>
      <Row>
        {Navigations}
      </Row>
    </Container>
  );
}
