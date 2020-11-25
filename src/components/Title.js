import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import OrderButton from "./OrderButton";

export default function Title(props) {
    const TopWrapper = styled.div`
        background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2Fb9%2F1d%2Fa0b91dcd5ab54bb509358bbcd797a289.jpg&f=1&nofb=1);
        background-position: center;
        background-size: cover;
        background-color: black;
    `
   const Title = styled.h1`
        color: red;
        // color: #e60000;
        text-align: center;
        font-size: 20vh;
    `
            return (<div>
                <TopWrapper>
                    <Title>
                        {props.title}
                    </Title>
                    <OrderButton></OrderButton>
                </TopWrapper>
           </div>);
}