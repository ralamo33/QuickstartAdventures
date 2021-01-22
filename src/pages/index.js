import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layouts/layout";
import Header from "../components/Header";
import Break from "../components/Break";
import QuickstartCard from "../components/QuickstartCard";
import * as Constants from "../constants";
import classes from "../components/QuickstartCard.module.css";
import buttonClasses from "../components/Buttons/ClickToOpen.module.css";
import ClickToOpen from "../components/Buttons/ClickToOpen";
import {Container, Row, Col} from "react-bootstrap";
import PlaytestButton from "../components/Buttons/PlaytestButton";

export default function Home() {

  const playtestButton = <PlaytestButton/>
  const contestButton = <ClickToOpen variant="danger" size={buttonClasses.independent} text={Constants.CONTEST_BUTTON_TEXT}/>
  const subscribeButton = <ClickToOpen variant="info" size={buttonClasses.independent} text={Constants.SUBSCRIPE_BUTTON_TEXT} />

  const contestCard = <QuickstartCard color={classes.red} header="Power Cards" border={classes.redBorder}
                    text={Constants.CONTEST_CARD_TEXT} button={contestButton}/>
  const playtestCard = <QuickstartCard color={classes.yellow} header="Hook Your Friends" border={classes.yellowBorder} 
                    text={Constants.PLAYTEST_CARD_TEXT} button={playtestButton}/>
  const subscribeCard = <QuickstartCard color={classes.blue} header="Choices Matter" border={classes.blueBorder}
                    text={Constants.SUBSCRIBE_CARD_TEXT} button={subscribeButton}/>

  return  (
    <Layout>
      <Header/>
      <Break height="5"></Break>
      <Container fluid>
        <Row>
          <Col md="4" sm="12">{contestCard}</Col>
          <Col md="4" sm="12">{playtestCard}</Col>
          <Col md="4" sm="12">{subscribeCard}</Col>
        </Row>
      </Container>
      <Break height="5"></Break>
    </Layout>
  )
}
