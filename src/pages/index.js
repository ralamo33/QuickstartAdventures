import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layouts/layout";
import Header from "../components/Header";
import Break from "../components/Break";
import QuickstartCard from "../components/QuickstartCard";
import EvenSpacingRow from "../layouts/EvenSpacingRow";
import OrderButton from "../components/OrderButton";
import FreeButton from "../components/FreeButton";
import SubscribeButton from "../components/SubscribeButton";
import * as Constants from "../constants";
import classes from "../components/QuickstartCard.module.css";

export default function Home() {

  const orderButton = <OrderButton size="1.7vw"/>
  const freeButton = <FreeButton size="1.7vw"/>
  const subscribeButton = <SubscribeButton size="1.7vw"/>

  const powerCard = <QuickstartCard color={classes.red} header="Power Cards" border={classes.redBorder}
                    text={Constants.POWER_CARD_TEXT} button={orderButton}/>
  const hookCard = <QuickstartCard color={classes.yellow} header="Hook Your Friends" border={classes.yellowBorder} 
                    text={Constants.HOOK_CARD_TEXT} button={freeButton}/>
  const choiceCard = <QuickstartCard color={classes.blue} header="Meaningful Choices" border={classes.blueBorder}
                    text={Constants.CHOICES_CARD_TEXT} button={subscribeButton}/>

  const cards = [powerCard, hookCard, choiceCard];

  return  (
    <Layout>
      <Header/>
      <Break height="5"></Break>
      <EvenSpacingRow items={cards}/>
      <Break height="5"></Break>
    </Layout>
  )
}
