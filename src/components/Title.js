import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Image from 'react-bootstrap/Image'
import OrderButton from "./OrderButton";
import MyNavbar from "../components/MyNavbar";

export default function Title(props) {

      const Title = styled.h1`
        color: red;
        text-align: center;
        font-size: 10vh;
        `
    
    
    const StyledImage = styled(Image)`
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100vw;
    `

    const Background = styled.div`
        background-color: #ffffcc;
        width: 60vw;
        margin-left: auto;
        margin-right: auto;
    `
    
    const TopWrapper = styled.div`
        background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2Fb9%2F1d%2Fa0b91dcd5ab54bb509358bbcd797a289.jpg&f=1&nofb=1);
        background-position: center;
        background-color: black;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        
    `
            return (<div>
                    <StyledImage alt="Tavern" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2Fb9%2F1d%2Fa0b91dcd5ab54bb509358bbcd797a289.jpg&f=1&nofb=1"></StyledImage>
                        <Background>
                            <Title>
                                {props.title}
                            </Title>
                            <OrderButton></OrderButton>
                            <MyNavbar navItems={props.navItems}></MyNavbar>
                        </Background>
           </div>);
}