import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Layout from '../layouts/layout';
import Title from '../components/Title';
import * as Constants from '../constants';
import QuickstartCard from '../components/QuickstartCard';
import FreeForm from '../components/Forms/FreeForm';
import Break from '../components/Break';

const freeForm = <FreeForm />;

const Background1 = styled.div`
  background: -webkit-radial-gradient(top, #01caff, #01092f);
  background: -moz-radial-gradient(top, #01caff, #01092f);
  background: radial-gradient(to bottom, #01caff, #01092f);
`;

const InstagramButton = styled(Button)`
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
  width: 80%;
  display: block;
  margin: auto;
  font-size: 2rem;
`;

const onClick = () => {
  window.location.href = 'http://www.instagram.com/roleplayrev';
};

const subscribeCard = (
  <QuickstartCard
    color="white"
    header="Join our Community"
    border="4px solid #0088cc"
    background="#0088cc"
    text={Constants.SUBSCRIBE_CARD_TEXT}
    button={<InstagramButton onClick={onClick}>Instagram</InstagramButton>}
  />
);

const buyCard = (
  <QuickstartCard
    color="black"
    header="Roleplay Revolution"
    text={Constants.BUY_CARD_TEXT}
    border="4px solid orange"
    background="orange"
  />
);

const freeCard = (
  <QuickstartCard
    color="white"
    header="Starter Set"
    border="4px solid #800000"
    background="#800000"
    text={Constants.STARTER_CARD_TEXT}
  />
);

export default function Home(): ReactElement {
  const title = 'Join the Revolution';

  return (
    <Background1>
      <Layout>
        <StaticImage
          alt="tavern"
          src="../images/landscape.jpg"
          layout="fullWidth"
        />
        <Title text={title}></Title>
        <FreeForm />
        <Break height="5vh"></Break>
        <Container fluid>
          <Row>
            <Col lg="4" md="6" sm="12">
              {freeCard}
            </Col>
            <Col lg="4" md="6" sm="12">
              {buyCard}
            </Col>
            <Col lg="4" md="6" sm="12">
              {subscribeCard}
            </Col>
          </Row>
        </Container>
      </Layout>
    </Background1>
  );
}
