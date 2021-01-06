import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Image from 'react-bootstrap/Image'
import OrderButton from "./OrderButton";
import MyNavbar from "../components/MyNavbar";
import Break from "../components/Break";
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
    
    const StyledImage = styled(Image)`
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    `

    const Background = styled.div`
        background-color: #ffffcc;
        min-width: 400px;
        width: 60vw;
        margin-left: auto;
        margin-right: auto;
    `
        
            return (<SetFontSize>
                        <StyledImage alt="Tavern" src={Constants.BUCKET_URL + "Tavern.jpg"}></StyledImage>
                        <Title>
                            {props.title}
                        </Title>
                        <OrderButton></OrderButton>
                        <Break height="2"></Break>
                        <MyNavbar navItems={props.navItems}></MyNavbar>
           </SetFontSize>);
}