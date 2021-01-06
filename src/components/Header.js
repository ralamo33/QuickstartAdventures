import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import OrderButton from "./OrderButton";
import MyNavbar from "./MyNavbar";
import Break from "./Break";
import EpicImage from "./EpicImage";
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
       
    return (
        <SetFontSize>
            <EpicImage src={Constants.BUCKET_URL + "Tavern.jpg"}></EpicImage>
            <Title>
                {props.title}
            </Title>
            <OrderButton></OrderButton>
            <Break height="2"></Break>
            <MyNavbar navItems={props.navItems}></MyNavbar>
        </SetFontSize>);
}