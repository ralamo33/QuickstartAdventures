import React from "react"
import {Container, Row, Col} from "react-bootstrap";
import EvenSpacingRow from "../layouts/EvenSpacingRow";
import styled from "styled-components";
import Break from "./Break";
import FreeButton from "./FreeButton";
import EpicImage from "./EpicImage";
import Textbox from "./Textbox";
import SubscribeButton from "./SubscribeButton";
import OrderButton from "./OrderButton";
import * as Constants from "../constants";

export default function Title(props) {

    const SetFontSize = styled.div`
        font-size: 8vw;
    `

    const Title = styled.h1`
    color: red;
    text-align: center;
    font-size: 1em;
    `

    const title = "Quickstart Adventures"

    const buttons = [<OrderButton size=".35em"/>, <FreeButton size=".35em"/>, <SubscribeButton size=".35em"/>]
       
    return (
        <SetFontSize>
            <EpicImage src={Constants.BUCKET_URL + "Tavern.jpg"}></EpicImage>
            <Title>
                {title}
            </Title>
            <Textbox></Textbox>
            <Break height="2"></Break>
            <EvenSpacingRow items={buttons}></EvenSpacingRow>
            <Break height="2"></Break>
        </SetFontSize>);
}