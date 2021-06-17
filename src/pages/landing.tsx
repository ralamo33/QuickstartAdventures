import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../layouts/layout';
import Title from '../components/Title';
import BackgroundImageContainer from '../components/BackgroundImageContainer';
import Break from '../components/Break';
import FreeForm from '../components/Forms/FreeForm';
import { Container, Row, Col } from 'react-bootstrap';
import StyledTable from '../components/StyledTable';
import * as Constants from '../constants';
import useMonster from '../hooks/MonsterBackground';
import QuickstartCard from '../components/QuickstartCard';
import useTavern from '../hooks/TavernBackground';
import PrettyButton from '../components/Buttons/PrettyButton';
import useLandscape from '../hooks/LandscapeBackground';
import useWitch from '../hooks/WitchBackground';

const StyledList = styled.ul`
  margin-left: 5vw;
  padding: 0;
  min-height: 30px;
  color: white;
  font-size: 1.7rem;
  font-family: baskerville;
  font-weight: 600;
`;

const StyledText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.4rem;
`;

const Background1 = styled.div`
  background: #0be2d4;
  background: -webkit-linear-gradient(top, #0be2d4, #0b44cc);
  background: -moz-linear-gradient(top, #0be2d4, #0b44cc);
  background: linear-gradient(to bottom, #0be2d4, #0b44cc);
`;

const BackgroundOrange = styled.div`
  background: #ffc201;
  background: -webkit-radial-gradient(top, #ffc201, #f62a03);
  background: -moz-radial-gradient(top, #ffc201, #f62a03);
  background: radial-gradient(to bottom, #ffc201, #f62a03);
`;

const BackgroundRadial = styled.div`
  background: #8e3bf7;
  background: -webkit-linear-gradient(top, #8e3bf7, #f701a0);
  background: -moz-linear-gradient(top, #8e3bf7, #f701a0);
  background: linear-gradient(to bottom, #8e3bf7, #f701a0);
`;

const freeCard = (
  <QuickstartCard
    color="white"
    header="Starter Set"
    border="4px solid #800000"
    background="#800000"
    text={Constants.LANDING_CARD_TEXT}
  />
);

export default function Landing(): ReactElement {
  return (
    <Layout>
      <Background1>
        <Container>
          <Row>
            <Col>
              <Title
                text="Never Struggle to find players Again"
                color={Constants.YELLOW}
                size="4rem"
                fontFamily="mephisto"
              />
              <Break height="20vh" />
              <Title
                text="Build a roleplaying Community"
                color="white"
                size="2rem"
                fontFamily="mephisto"
              ></Title>
              <FreeForm></FreeForm>
              <Break height="5vh" />
            </Col>
            <Col>
              <Break height="10vh" />
              <BackgroundImageContainer height="80vh" hook={useWitch} />
              <Break height="10vh" />
            </Col>
          </Row>
        </Container>
      </Background1>
      <BackgroundRadial>
        <Break height="5vh" />
        <Container fluid>
          {/* <Row>
            <Col>
              <BackgroundImageContainer height="45vh" hook={useTavern} />
            </Col>
            <Col>
              <Title
                text="Hook New Players"
                color={Constants.YELLOW}
                size="8vmin"
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
                size="8vmin"
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
          </Row> */}
          <Title text="Hook new players" color="orange" size="10vmin"></Title>
          <Title text="Excite Veterans" color="orange" size="10vmin"></Title>
          <StyledTable />
          <Row>
            <Col>
              <Title
                text="Playtester Testimonials"
                color="orange"
                size="10vmin"
                fontFamily="mephisto"
              ></Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <BackgroundImageContainer
                height="30vh"
                hook={useMonster}
              ></BackgroundImageContainer>
              <StyledText>"Hello this is the best game ever."</StyledText>
            </Col>
            <Col>
              <BackgroundImageContainer
                height="30vh"
                hook={useMonster}
              ></BackgroundImageContainer>
              <StyledText>Hello this is the best game ever.</StyledText>
            </Col>
            <Col>
              <BackgroundImageContainer
                height="30vh"
                hook={useMonster}
              ></BackgroundImageContainer>
              <StyledText>Hello this is the best game ever.</StyledText>
            </Col>
          </Row>
          <Break height="5vh" />
        </Container>
      </BackgroundRadial>
      <BackgroundOrange>
        <Container>
          {/* Now advertise the Starter Set itself */}
          <Title text="Starter Set"></Title>
          <Row>
            <Col>
              <BackgroundImageContainer hook={useMonster} height="100%" />
            </Col>
            <Col>{freeCard}</Col>
          </Row>
          <FreeForm></FreeForm>
          <Break height="5vh" />
        </Container>
      </BackgroundOrange>
    </Layout>
  );
}
