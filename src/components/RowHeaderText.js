import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Popover, Row, Col} from "react-bootstrap";

export default function RowHeaderText(props) {
    const MyRow = styled.div`
        height: 50vh;
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
        color: ${props.color};
    `;
    const MyHeader = <StyledHeader>{props.header}</StyledHeader>;
    const MyText = <StyledText>{props.text}</StyledText>;
    return (
        <MyRow>
            <StyledHeader>
                {props.header}
            </StyledHeader>
            <StyledText>
                {props.text}
            </StyledText>
        </MyRow>
    );
}