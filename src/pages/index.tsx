import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layouts/layout';
import Title from '../components/Title';
import * as Constants from '../constants';
import SubscribeButton from '../components/Buttons/SubscribeButton';
import QuickstartCard from '../components/QuickstartCard';
import FreeButton from '../components/Buttons/FreeButton';
import EpicImage from '../components/EpicImage';
import Counter from '../components/Counter';
import DisabledBuyButton from '../components/Buttons/DisabledBuyButton';
import EvenSpacingRow from '../layouts/EvenSpacingRow';
import Instagram from '../components/Buttons/Instagram';

const Subtitle = styled.div`
  color: #000080;
  font-size: 13vmin;
  max-width: 80vw;
  margin: auto;
  text-align: center;
  font-family: belmont;
`;

const subscribeButton = <SubscribeButton key="1" />;
const buyButton = <DisabledBuyButton key="2" />;
const freeButton = <FreeButton key="3" />;
const instagram = <Instagram />;

const subscribeCard = (
  <QuickstartCard
    color="white"
    header="Join our Community"
    border="4px solid #0088cc"
    background="#0088cc"
    text={Constants.SUBSCRIBE_CARD_TEXT}
    button={subscribeButton}
    social={true}
  />
);

const buyCard = (
  <QuickstartCard
    color="white"
    header="Roleplay Revolution"
    border="4px solid #800000"
    background="#800000"
    text={Constants.BUY_CARD_TEXT}
    button={buyButton}
    social={false}
  />
);

const freeCard = (
  <QuickstartCard
    color="black"
    header="Starter Set"
    border="4px solid orange"
    background="orange"
    text={Constants.STARTER_CARD_TEXT}
    button={freeButton}
    social={false}
  />
);

export default function Home(): ReactElement {
  const title = 'Join the Revolution';

  const buttons = [buyButton, freeButton, subscribeButton];

  return (
    <Layout>
      <StaticImage alt="tavern" src='../images/tavern.jpg' layout="fullWidth"/>
      <Title text={title}></Title>
      {/* <Counter></Counter> */}
      {/* <Subtitle>It Begins</Subtitle> */}
      <EvenSpacingRow items={buttons} />
      <Container fluid>
        <Row>
          <Col lg="4" md="6" sm="12">
            {buyCard}
          </Col>
          <Col lg="4" md="6" sm="12">
            {freeCard}
          </Col>
          <Col lg="4" md="6" sm="12">
            {subscribeCard}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
