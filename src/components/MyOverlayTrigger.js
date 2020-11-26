import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {OverlayTrigger} from "react-bootstrap";
import classes from "./OverlayTrigger.module.css";

export default function MyOverlayTrigger(props) {
    const MyRow = styled.div`
        height: 60vh;
        background-position: center;
        background-size: cover;
    `;
    const StyledHeader = styled.p`
        font-size: 5rem;
        text-align: center;
    `;
    const StyledText = styled.p`
        font-size: 2rem;
        width: 60vw;
        max-width: 600px;
        text-align: center;
    `;
    const MyText = <StyledText className={props.textClass}>{props.text}</StyledText>;
    return (
        <MyRow className={props.imageClass}>
            <OverlayTrigger placement="bottom" overlay={MyText}>
                <StyledHeader className={props.colorClass}>
                 {props.header}
                </StyledHeader>
            </OverlayTrigger>
        </MyRow>
    );
} 