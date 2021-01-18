import React from "react"
import {Navbar,Container, Row, Col} from "react-bootstrap";
import EvenSpacingRow from "../layouts/EvenSpacingRow";
import styled from "styled-components";
import Break from "./Break";
import EpicImage from "./EpicImage";
import Textbox from "./Textbox";
import * as Constants from "../constants";
import ClickToOpen from "../components/ClickToOpen";
import buttonClasses from "../components/ClickToOpen.module.css";

export default function Title(props) {

    const Title = styled.h1`
    color: red;
    text-align: center;
    font-size: 1.2em;
    `

    const title = "Quickstart Adventures"


    const orderButton = <ClickToOpen variant="danger" size={buttonClasses.relative} text={Constants.ORDER_BUTTON_TEXT}/>
    const freeButton = <ClickToOpen variant="warning" size={buttonClasses.relativeBlack} text={Constants.FREE_BUTTON_TEXT}/>
    const subscribeButton = <ClickToOpen variant="info" size={buttonClasses.relative} text={Constants.SUBSCRIPE_BUTTON_TEXT} />

    const buttons = [orderButton, freeButton, subscribeButton];

    const MyDiv = styled.div`
        display: fixed;
    `
       
    return (
        <Navbar>
            <EpicImage src={Constants.BUCKET_URL + "Tavern.jpg"}></EpicImage>
            <Title>
                {title}
            </Title>
            <Textbox></Textbox>
            <Break height="2"></Break>
            <EvenSpacingRow items={buttons} oneOnSmall={true}></EvenSpacingRow>
            <Break height="2"></Break>
        </Navbar>);
}