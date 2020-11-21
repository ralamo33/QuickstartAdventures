import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {Col} from "react-bootstrap";
import OrderButton from "./OrderButton";
import AWSImage from "../components/AWSImage";
import * as Constants from "../constants.js"

export default function Title(props) {
    const TopWrapper = styled.div`
        background-color: black;
    `
    const MyImage = styled(AWSImage)`
        width: 100%;
        height: auto;
        opacity: 0.3;
    `
    const Title = styled.h1`
        color: #e60000;
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