import React, { ReactElement } from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';
import { Container, Row, Col } from 'react-bootstrap';
import Break from '../components/Break';
import LandingLayout from '../layouts/LandingLayout';
import LandingForm from '../components/Forms/LandingForm';

const Title = styled.p`
  color: #cc0000;
  font-family: belmont;
  font-size: 4rem;
  font-weight: 700;
`;

export default function Landing(): ReactElement {
  return (
    <LandingLayout>
      <Container>
        <Row>
          <Col xs="6"></Col>
          <Col>
            <Break height="10vh"></Break>
            <Title>Roleplay Revolution</Title>
            <LandingForm></LandingForm>
          </Col>
        </Row>
      </Container>
    </LandingLayout>
  );
}
