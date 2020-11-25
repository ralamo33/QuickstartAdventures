import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {OverlayTrigger} from "react-bootstrap";

export default function MyOverlayTrigger(props) {
    const MyRow = styled.div`
        height: 60vh;
        background-image: url(${props.url});
        background-position: center;
        background-size: cover;
    `;
    const StyledHeader = styled.p`
        font-size: 5rem;
        text-align: center;
        color: ${props.color};
    `;
    const StyledText = styled.p`
        font-size: 2rem;
        width: 60vw;
        max-width: 600px;
        text-align: center;
        background-color: ${props.color};
        color: black;
    `;
    const MyText = <StyledText>{props.text}</StyledText>;
    return (
        <MyRow>
            <OverlayTrigger placement="bottom" overlay={MyText}>
                <StyledHeader>
                 {props.header}
                </StyledHeader>
            </OverlayTrigger>
        </MyRow>
    );
}