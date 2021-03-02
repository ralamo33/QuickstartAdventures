import React, { ReactElement } from 'react';
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

export default function Home(): ReactElement {
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

  return (
    <Layout>
      <Header />
      <Break height={5} />
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
