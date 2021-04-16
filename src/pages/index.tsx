import React, { ReactElement } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layouts/layout';
import Break from '../components/Break';
import * as Constants from '../constants';
import classes from '../components/QuickstartCard.module.css';
import PlaytestButton from '../components/Buttons/PlaytestButton';
import SubscribeButton from '../components/Buttons/SubscribeButton';
import Header from '../components/Header';
import QuickstartCard from '../components/QuickstartCard';
import ContestButton from '../components/Buttons/ContestButton';
import EpicImage from '../components/EpicImage';
import Counter from '../components/Counter';

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

export default function Home(): ReactElement {
  const playtestButton = <PlaytestButton />;
  const contestButton = <ContestButton />;
  const subscribeButton = <SubscribeButton />;

  const Title = styled.h1`
    color: #800000;
    font-family: belmont;
    text-align: center;
    font-size: 6rem;
  `;

  const title = 'Join the Revolution';

  const contestCard = (
    <QuickstartCard
      color={classes.red}
      header="Power Cards"
      border={classes.redBorder}
      text={Constants.CONTEST_CARD_TEXT}
      button={contestButton}
    />
  );
  const playtestCard = (
    <QuickstartCard
      color={classes.yellow}
      header="Hook Your Friends"
      border={classes.yellowBorder}
      text={Constants.PLAYTEST_CARD_TEXT}
      button={playtestButton}
    />
  );
  const subscribeCard = (
    <QuickstartCard
      color={classes.blue}
      header="Choices Matter"
      border={classes.blueBorder}
      text={Constants.SUBSCRIBE_CARD_TEXT}
      button={subscribeButton}
    />
  );

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
            {contestCard}
          </Col>
          <Col lg="4" md="6" sm="12">
            {playtestCard}
          </Col>
          <Col lg="4" md="6" sm="12">
            {subscribeCard}
          </Col>
        </Row>
      </Container>
      <Break height={5} />
    </Layout>
  );
}
