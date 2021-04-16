import React, { ReactElement } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layouts/layout';
import Break from '../components/Break';
import * as Constants from '../constants';
import classes from '../components/QuickstartCard.module.css';
import SubscribeButton from '../components/Buttons/SubscribeButton';
import Header from '../components/Header';
import QuickstartCard from '../components/QuickstartCard';
import FreeButton from '../components/Buttons/FreeButton';
import EpicImage from '../components/EpicImage';
import Counter from '../components/Counter';
import BuyButton from '../components/Buttons/BuyButton';
import DisabledBuyButton from '../components/Buttons/DisabledBuyButton';
import EvenSpacingRow from '../layouts/EvenSpacingRow';

const Subtitle = styled.div`
  // color: ${Constants.BLUE};
  // color: #00b3b3;
  // color: #f2f2f2;
  // color: #e6e6e6;
  color: #000080;
  font-size: 4rem;
  max-width: 80vw;
  margin: auto;
  text-align: center;
  font-family: belmont;
`;

const Title = styled.h1`
  color: #800000;
  font-family: belmont;
  text-align: center;
  font-size: 6rem;
`;

const subscribeButton = <SubscribeButton key="1" />;
const buyButton = <DisabledBuyButton key="2" />;
const freeButton = <FreeButton key="3" />;

const subscribeCard = (
  <QuickstartCard
    color={classes.blue}
    header="Our Principles"
    border={classes.blueBorder}
    text={Constants.SUBSCRIBE_CARD_TEXT}
    button={subscribeButton}
  />
);

const buyCard = (
  <QuickstartCard
    color={classes.yellow}
    header="Roleplay Revolution"
    border={classes.yellowBorder}
    text={Constants.BUY_CARD_TEXT}
    button={buyButton}
  />
);

const freeCard = (
  <QuickstartCard
    color={classes.red}
    header="Future Features"
    border={classes.redBorder}
    text={Constants.FREE_CARD_TEXT}
    button={freeButton}
  />
);

export default function Home(): ReactElement {
  const title = 'Join the Revolution';

  const buttons = [subscribeButton, buyButton, freeButton];

  return (
    <Layout>
      <EpicImage src={`${Constants.BUCKET_URL}Tavern.jpg`} />
      <Title>{title}</Title>
      <Counter></Counter>
      <Subtitle>It Begins</Subtitle>
      <EvenSpacingRow items={buttons} />
      <Header></Header>
      <Container fluid>
        <Row>
          <Col lg="4" md="6" sm="12">
            {subscribeCard}
          </Col>
          <Col lg="4" md="6" sm="12">
            {buyCard}
          </Col>
          <Col lg="4" md="6" sm="12">
            {freeCard}
          </Col>
        </Row>
      </Container>
      <Break height={5} />
    </Layout>
  );
}
