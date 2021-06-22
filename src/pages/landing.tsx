import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Layout from '../layouts/layout';
import Title from '../components/Title';
import Break from '../components/Break';
import FreeForm from '../components/Forms/FreeForm';
import { Container, Row, Col } from 'react-bootstrap';
import StyledTable from '../components/StyledTable';
import * as Constants from '../constants';
import QuickstartCard from '../components/QuickstartCard';
import { StaticImage } from 'gatsby-plugin-image';

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
            <Col xs="12" sm="6">
              <Title
                text="Never Struggle to find players Again"
                color={Constants.YELLOW}
                size="12vmin"
                fontFamily="mephisto"
              />
              <Break height="5vmin" />
            </Col>
            <Col xs="12" sm="6">
              <Break height="5vh" />
              <StaticImage
                alt="tavern"
                src="../images/witchtext.jpg"
                layout="fullWidth"
              />
              <Break height="10vh" />
            </Col>
          </Row>
          <FreeForm></FreeForm>
          <Break height="5vh" />
        </Container>
      </Background1>
      <BackgroundRadial>
        <Break height="5vh" />
        <Container fluid>
          <Title text="Hook Players" color="orange" size="10vmin"></Title>
            <StyledTable />
          <Row>
            <Col>
              <Title
                text="Playtester Testimonials"
                color="orange"
                size="12vmin"
                fontFamily="mephisto"
              ></Title>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6" md="4">
              <StaticImage
                alt="tavern"
                src="../images/eddie.jpeg"
                layout="fullWidth"
              />
              <StyledText>{Constants.TESTIMONALS.eddie}</StyledText>
            </Col>
            <Col xs="12" sm="6" md="4">
              <StaticImage
                alt="tavern"
                src="../images/pablo.jpeg"
                layout="fullWidth"
              />
              <StyledText>{Constants.TESTIMONALS.pablo}</StyledText>
            </Col>
            {/* <Col xs="12" sm="6" md="4">
              <StaticImage
                alt="tavern"
                src="../images/monster.jpg"
                layout="fullWidth"
              />
            </Col> */}
          </Row>
          <Break height="5vh" />
        </Container>
      </BackgroundRadial>
      <BackgroundOrange>
        <Container>
          <Title text="Starter Set"></Title>
          <Row>
            <Col sm="12" md="6">
              <StaticImage
                alt="tavern"
                src="../images/monstertext.jpg"
                layout="fullWidth"
              />
              <Break height="10vh"></Break>
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
