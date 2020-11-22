import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Popover, Row, Col} from "react-bootstrap";

export default function RowHeaderText(props) {
    const MyRow = styled(Row)`
        height: 50vh;
        background-image: url(${props.url});
        background-position: center;
        background-size: cover;
        // border: 5px white ;
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
    const first = props.headerFirst ? MyHeader : MyText;
    const second = props.headerFirst ? MyText : MyHeader;
    return (
        <MyRow>
                {first}
            <Col>
                {second}
            </Col>
        </MyRow>
    );
}