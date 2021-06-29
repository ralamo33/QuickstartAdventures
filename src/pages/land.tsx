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
import { BackgroundDarkBlue, BackgroundOrange, BackgroundPurple } from '../backgrounds';

const StyledText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.6rem;
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

const MaxWidth = styled.div`
`;

export default function Landing(): ReactElement {
  return (
    <Layout>
      <BackgroundDarkBlue>
        <Container fluid>
          <Row>
            <Col xs="12" sm="6">
              <Title
                text="the BEST table top RPG is Coming Soon"
                // color="orangered"
                color="#ffff00"
                size="12vmin"
                fontFamily="mephisto"
              />
              <Break height="2vmin" />
            </Col>
            <Col xs="12" sm="6">
              <Break height="5vh" />
              <StaticImage
                alt="tavern"
                src="../images/witch.jpg"
                layout="fullWidth"
              />
              <Break height="3vh" />
            </Col>
          </Row>
            <Title
                text="Free Version"
                color="#ffff00"
                size="10vmin"
                fontFamily="mephisto"
            />
          <FreeForm></FreeForm>
          <Break height="5vh" />
        </Container>
      </BackgroundDarkBlue>
      <BackgroundPurple>
        <Break height="5vh" />
        <Container fluid>
          <Title text="Hook Players" color="#ffff00" size="10vmin"></Title>
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
            <PaddedCol xs="12" sm="6" md="4">
              <StaticImage
                alt="Eddie"
                src="../images/Eddie3.jpg"
              />
              <StyledText>{Constants.PLAYTESTER_TESTIMONIALS.Eddie}</StyledText>
            </PaddedCol>
            <PaddedCol xs="12" sm="6" md="4">
              <MaxWidth>
              <StaticImage
                alt="Brandon"
                src="../images/Brandon3.jpg"
              />
              <StyledText>{Constants.PLAYTESTER_TESTIMONIALS.Brandon}</StyledText>
              </MaxWidth>
            </PaddedCol>
            <PaddedCol xs="12" sm="6" md="4">
              <MaxWidth>
              <StaticImage
                alt="Sabrina"
                src="../images/Sabrina3.jpg"
              />
              <StyledText>{Constants.PLAYTESTER_TESTIMONIALS.Sabrina}</StyledText>
              </MaxWidth>
            </PaddedCol>
          </Row>
          <Break height="5vh" />
        </Container>
      </BackgroundPurple>
      <BackgroundOrange>
        <Container>
          <Title text="Starter Set" color="#cc0000"></Title>
          <Row>
            <Col sm="12" md="6">
              <StaticImage
                alt="tavern"
                src="../images/monster.jpg"
                layout="fullWidth"
              />
              <Break height="10vh"></Break>
            </Col>
            <Col sm="12" md="6">{freeCard}</Col>
          </Row>
          <FreeForm></FreeForm>
          <Break height="5vh" />
        </Container>
      </BackgroundOrange>
    </Layout>
  );
}
