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
import { ListText } from '../components/ListText';
import {
  BackgroundDarkBlue,
  BackgroundOrange,
  BackgroundPurple,
} from '../backgrounds';

const StyledText = styled.p`
  color: white;
  text-align: center;
  font-size: 2rem;
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

const PaddedCol = styled(Col)`
  padding-left: 5vw;
  padding-right: 5vw;
`;

export default function Landing(): ReactElement {
  return (
    <Layout>
      <BackgroundDarkBlue>
        <Container fluid>
          <Row>
            <Col lg="12" xl="6">
              <Title
                text="a FREE rpg EXPERIENCE!"
                color="yellow"
                size="12vmin"
                fontFamily="mephisto"
              />
            </Col>
            <Col lg="12" xl="6">
              <Break height="5vh" />
              <StaticImage
                alt="tavern"
                src="../images/Tavern.jpg"
                layout="fullWidth"
              />
              <Break height="3vh" />
            </Col>
          </Row>
          <Row>
            <Col>
              <ListText
                text={Constants.SELLING_POINTS}
                size="6vmin"
                color="yellow"
                fontFamily="baskerville"
              />
              <FreeForm />
            </Col>
          </Row>
        </Container>
        <Break height="5vh" />
      </BackgroundDarkBlue>
      <BackgroundPurple>
        <Break height="5vh" />
        <Container fluid>
          <StyledTable />
          <Row>
            <Col>
              <Title
                text="Playtester Testimonials"
                color="#ffff00"
                size="12vmin"
                fontFamily="mephisto"
              ></Title>
            </Col>
          </Row>
          <Row>
            <PaddedCol sm="12" md="6" lg="4">
              <StaticImage alt="Eddie" src="../images/Eddie3.jpg" />
              <StyledText>{Constants.PLAYTESTER_TESTIMONIALS.Eddie}</StyledText>
            </PaddedCol>
            <PaddedCol sm="12" md="6" lg="4">
              <StaticImage alt="Brandon" src="../images/Brandon3.jpg" />
              <StyledText>
                {Constants.PLAYTESTER_TESTIMONIALS.Brandon}
              </StyledText>
            </PaddedCol>
            <PaddedCol sm="12" md="6" lg="4">
              <StaticImage alt="Sabrina" src="../images/Sabrina3.jpg" />
              <StyledText>
                {Constants.PLAYTESTER_TESTIMONIALS.Sabrina}
              </StyledText>
            </PaddedCol>
          </Row>
          <Break height="5vh" />
        </Container>
      </BackgroundPurple>
      <BackgroundOrange>
        <Container>
          <Break height="10vh" />
          <Row>
            <Col lg="12" xl="6">
              <StaticImage
                alt="tavern"
                src="../images/Warrior.png"
                layout="fullWidth"
              />
              <Break height="10vh"></Break>
            </Col>
            <Col lg="12" xl="6">
              {freeCard}
            </Col>
          </Row>
          <FreeForm />
          <Break height="5vh" />
        </Container>
      </BackgroundOrange>
    </Layout>
  );
}
