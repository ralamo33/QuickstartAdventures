import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Break from "./Break";
import OrderButton from "./OrderButton";
import EpicImage from "./EpicImage";
import Textbox from "./Textbox";
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
       
    return (
        <SetFontSize>
            <EpicImage src={Constants.BUCKET_URL + "Tavern.jpg"}></EpicImage>
            <Title>
                {title}
            </Title>
            <Textbox></Textbox>
            <Break height="2"></Break>
            <OrderButton></OrderButton>
            <Break height="2"></Break>
        </SetFontSize>);
}