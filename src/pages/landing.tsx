import React, { ReactElement } from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';
import { Container, Row, Col } from 'react-bootstrap';
import Break from '../components/Break';
import LandingLayout from '../layouts/LandingLayout';
import LandingForm from '../components/Forms/LandingForm';
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from '../components/Background';

import { convertToBgImage } from "gbimage-bridge"

const Title = styled.p`
  color: #cc0000;
  font-family: belmont;
  font-size: 4rem;
  font-weight: 500;
  text-shadow: 2px 0 2px black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;

export default function Landing(): ReactElement {
  return (
    <LandingLayout>
      <BackgroundImage >
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
      </BackgroundImage>
    </LandingLayout>
  );
}
