import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Image from 'react-bootstrap/Image'
import OrderButton from "./OrderButton";
import MyNavbar from "../components/MyNavbar";
import Break from "../components/Break";

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
                        <StyledImage alt="Tavern" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2Fb9%2F1d%2Fa0b91dcd5ab54bb509358bbcd797a289.jpg&f=1&nofb=1"></StyledImage>
                        <Title>
                            {props.title}
                        </Title>
                        <OrderButton></OrderButton>
                        <Break height="2"></Break>
                        <MyNavbar navItems={props.navItems}></MyNavbar>
           </SetFontSize>);
}