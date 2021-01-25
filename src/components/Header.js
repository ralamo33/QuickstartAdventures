import React from "react"
import EvenSpacingRow from "../layouts/EvenSpacingRow";
import styled from "styled-components";
import Break from "./Break";
import EpicImage from "./EpicImage";
import Textbox from "./Textbox";
import * as Constants from "../constants";
import PlaytestButton from "./Buttons/PlaytestButton";
import ContestButton from "./Buttons/ContestButton";
import SubscribeButton from "./Buttons/SubscribeButton";

export default function Title(props) {

     const SetFontSize = styled.div`
        font-size: 8.5vw;
    `

    const Title = styled.h1`
    color: red;
    text-align: center;
    font-size: 1.2em;
    `

    const title = "Quickstart Adventures"

    const buttons = [<ContestButton/>, <PlaytestButton/>, <SubscribeButton/>];

    return (
        <SetFontSize>
            <EpicImage src={Constants.BUCKET_URL + "Tavern.jpg"}></EpicImage>
            <Title>
                {title}
            </Title>
            <Textbox></Textbox>
            <Break height="2"></Break>
            <EvenSpacingRow items={buttons} oneOnSmall={true}></EvenSpacingRow>
            <Break height="2"></Break>
        </SetFontSize>);
}