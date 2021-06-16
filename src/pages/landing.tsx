import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../layouts/layout';
import Title from '../components/Title';
import BackgroundImageContainer from '../components/BackgroundImageContainer';
import Break from '../components/Break';
import FreeForm from '../components/Forms/FreeForm';
import { Container, Row, Col } from 'react-bootstrap';
import * as Constants from '../constants';
import useMonster from '../hooks/MonsterBackground';
import useTavern from '../hooks/TavernBackground';
import useLandscape from '../hooks/LandscapeBackground';

const StyledList = styled.ul`
  margin-left: 6px;
  padding: 0;
  min-height: 30px;
`;

export default function Landing(): ReactElement {
  return (
    <Layout>
      {/* Layer 1 they see when they first open link */}
      <BackgroundImageContainer hook={useLandscape} height="90vh">
        <Container>
          <Row>
            <Title
              text="Build a Revolutionary Community"
              color={Constants.YELLOW}
              size="10vmin"
            />
          </Row>
          <Row>
            <Title
              text="RPGs are about People"
              color={Constants.OLD_BLUE}
              size="5vmin"
            ></Title>
          </Row>
          <Row>
            <FreeForm></FreeForm>
          </Row>
        </Container>
        <Break height="5vh" />
      </BackgroundImageContainer>
      {/* Layer 2 they see when they scroll down */}
      <Break height="10vh" />
      <Container>
        <Row>
          <Col>
            <BackgroundImageContainer height="45vh" hook={useTavern} />
          </Col>
          <Col>
            <Title
              text="Hook New Players"
              color={Constants.YELLOW}
              size="5vmin"
            />
            <StyledList>
              <li>Teach the game in 20 minutes or less.</li>
              <li>Create your character in 5 minutes.</li>
              <li>Almost no reading required!</li>
            </StyledList>
          </Col>
        </Row>
        <Row>
          <Col>
            <Title
              text="Excite Veterans"
              color={Constants.YELLOW}
              size="5vmin"
            />
            <StyledList>
              <li>
                Build unique and memorable characters with thousands of
                possibilites.
              </li>
              <li>Experience a unique card based character sytem.</li>
              <li>Control every step of your character's destiny.</li>
            </StyledList>
          </Col>
          <Col>
            <BackgroundImageContainer height="45vh" hook={useTavern} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title
              text="Playtester Testimonials"
              color="blue"
              size="10vmin"
            ></Title>
          </Col>
        </Row>
        {/* List of image and text pairings inside columns. At large screens show all in one row. Smaller have them offset. */}
        <Row>
          <Col>
            <BackgroundImageContainer
              height="30vh"
              hook={useMonster}
            ></BackgroundImageContainer>
            <p>Hello this is the best game ever.</p>
          </Col>
          <Col>
            <BackgroundImageContainer
              height="30vh"
              hook={useMonster}
            ></BackgroundImageContainer>
            <p>Hello this is the best game ever.</p>
          </Col>
          <Col>
            <BackgroundImageContainer
              height="30vh"
              hook={useMonster}
            ></BackgroundImageContainer>
            <p>Hello this is the best game ever.</p>
          </Col>
        </Row>
        <Break height="5vh" />
        {/* Now advertise the Starter Set itself */}
        <Title text="Starter Set"></Title>
        <BackgroundImageContainer hook={useMonster}>
          <StyledList>
            <li>
              A 2 hour RPG experience to convert your friends into roleplay
              fanatics.
            </li>
            <li>
              Includes everything you need to test out the Revolutionary System
            </li>
            <li>FREE</li>
          </StyledList>
        </BackgroundImageContainer>
        <FreeForm></FreeForm>
        <Break height="5vh" />
      </Container>
    </Layout>
  );
}
