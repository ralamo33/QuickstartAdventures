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
import EpicImage from '../components/EpicImage';
import Counter from '../components/Counter';
import DisabledBuyButton from '../components/Buttons/DisabledBuyButton';
import EvenSpacingRow from '../layouts/EvenSpacingRow';
import Instagram from '../components/Buttons/Instagram';
import FreeForm from '../components/Forms/FreeForm';

const Subtitle = styled.div`
  color: #000080;
  font-size: 13vmin;
  max-width: 80vw;
  margin: auto;
  text-align: center;
  font-family: belmont;
`;

const freeForm = <FreeForm />;
const instagram = <Instagram />;

const subscribeCard = (
  <QuickstartCard
    color="white"
    header="Join our Community"
    border="4px solid #0088cc"
    background="#0088cc"
    text={Constants.SUBSCRIBE_CARD_TEXT}
    // button={freeForm}
    social={true}
  />
);

const buyCard = (
  <QuickstartCard
    color="black"
    header="Roleplay Revolution"
    text={Constants.BUY_CARD_TEXT}
    border="4px solid orange"
    background="orange"
    // button={freeForm}
    social={false}
  />
);

const freeCard = (
  <QuickstartCard
    color="white"
    header="Starter Set"
    border="4px solid #800000"
    background="#800000"
    text={Constants.STARTER_CARD_TEXT}
    // button={freeForm}
    social={false}
  />
);

export default function Home(): ReactElement {
  const title = 'Join the Revolution';

  return (
    <Layout>
      <StaticImage alt="tavern" src='../images/tavern.jpg' layout="fullWidth"/>
      <Title text={title}></Title>
      <FreeForm />
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
  );
}
