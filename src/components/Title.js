import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {Col} from "react-bootstrap";
import OrderButton from "./OrderButton";
import AWSImage from "../components/AWSImage";

export default function Title(props) {
    const TopWrapper = styled.div`
    `
    const MyImage = styled(AWSImage)`
        width: 100%;
        height: auto;
        opacity: 0.3;
    `
    const Title = styled.h1`
        color: red;
        text-align: center;
        font-size: 10vh;
    `
            return (<div>
                <TopWrapper>
                    {/* <MyImage image="Cannon.jpg"></MyImage> */}
                    <Title>
                        {props.title}
                    </Title>
                    <OrderButton></OrderButton>
                </TopWrapper>
           </div>);
}