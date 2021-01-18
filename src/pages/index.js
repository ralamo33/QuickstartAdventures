import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layouts/layout";
import Header from "../components/Header";
import Break from "../components/Break";
import QuickstartCard from "../components/QuickstartCard";
import EvenSpacingRow from "../layouts/EvenSpacingRow";
import * as Constants from "../constants";
import classes from "../components/QuickstartCard.module.css";
import buttonClasses from "../components/ClickToOpen.module.css";
import ClickToOpen from "../components/ClickToOpen";
import {Container, Row, Col} from "react-bootstrap";

export default function Home() {

  const orderButton = <ClickToOpen variant="danger" size={buttonClasses.small} text={Constants.ORDER_BUTTON_TEXT}/>
  const freeButton = <ClickToOpen variant="warning" size={buttonClasses.small} text={Constants.FREE_BUTTON_TEXT}/>
  const subscribeButton = <ClickToOpen variant="info" size={buttonClasses.small} text={Constants.SUBSCRIPE_BUTTON_TEXT} />

  const powerCard = <QuickstartCard color={classes.red} header="Power Cards" border={classes.redBorder}
                    text={Constants.POWER_CARD_TEXT} button={orderButton}/>
  const hookCard = <QuickstartCard color={classes.yellow} header="Hook Your Friends" border={classes.yellowBorder} 
                    text={Constants.HOOK_CARD_TEXT} button={freeButton}/>
  const choiceCard = <QuickstartCard color={classes.blue} header="Choices Matter" border={classes.blueBorder}
                    text={Constants.CHOICES_CARD_TEXT} button={subscribeButton}/>

  const cards = [powerCard, hookCard, choiceCard];

  return  (
    <Layout>
      <Header/>
      <Break height="5"></Break>
      <Container fluid>
        <Row>
          <Col md="4" sm="12">{powerCard}</Col>
          <Col md="4" sm="12">{hookCard}</Col>
          <Col md="4" sm="12">{choiceCard}</Col>
        </Row>
      </Container>
      <Break height="5"></Break>
    </Layout>
  )
}
