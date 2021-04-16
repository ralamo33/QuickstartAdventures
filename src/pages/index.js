import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layouts/layout';
import Header from '../components/Header';
import Break from '../components/Break';
import QuickstartCard from '../components/QuickstartCard';
import * as Constants from '../constants';
import classes from '../components/QuickstartCard.module.css';
import PlaytestButton from '../components/Buttons/PlaytestButton';
import ContestButton from '../components/Buttons/ContestButton';
import SubscribeButton from '../components/Buttons/SubscribeButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export default function Home() {
  const playtestButton = <PlaytestButton />;
  const contestButton = <ContestButton />;
  const subscribeButton = <SubscribeButton />;

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

  const Background = styled.div`
        background-image: url(${Constants.BUCKET_URL}Tavern.jpg);
        background-size: contain;
        background-position: 0px -200px; 
    `;

  return (
    <Background>
    <Layout>
      <Header />
      <Break height="5" />
      <Container fluid>
        <Row>
          <Col md="4" sm="12">{contestCard}</Col>
          <Col md="4" sm="12">{playtestCard}</Col>
          <Col md="4" sm="12">{subscribeCard}</Col>
        </Row>
      </Container>
      <Break height="5" />
    </Layout>
    </Background>
  );
}
