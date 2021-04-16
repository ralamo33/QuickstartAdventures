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

const subscribeButton = <SubscribeButton />;
const buyButton = <BuyButton />;
const freeButton = <FreeButton />;

const subscribeCard = (
  <QuickstartCard
    color={classes.blue}
    header="Choices Matter"
    border={classes.blueBorder}
    text={Constants.SUBSCRIBE_CARD_TEXT}
    button={subscribeButton}
  />
);

const buyCard = (
  <QuickstartCard
    color={classes.yellow}
    header="Hook Your Friends"
    border={classes.yellowBorder}
    text={Constants.BUY_CARD_TEXT}
    button={buyButton}
  />
);

const freeCard = (
  <QuickstartCard
    color={classes.red}
    header="Power Cards"
    border={classes.redBorder}
    text={Constants.FREE_CARD_TEXT}
    button={freeButton}
  />
);

export default function Home(): ReactElement {
  const title = 'Join the Revolution';

  return (
    <Layout>
      <EpicImage src={`${Constants.BUCKET_URL}Tavern.jpg`} />
      <Title>{title}</Title>
      <Break height={1} />
      <Counter></Counter>
      <Break height={1} />
      <Subtitle>It Begins</Subtitle>
      <Break height={1} />
      <Header></Header>
      <Break height={1} />
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
