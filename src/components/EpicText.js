import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function EpicText(props) {
    const text = props.text;
    const Text = styled.p`
        color: red;
    `;
    const header = props.header;
    const Header = styled.h3`
        color: green;
    `;
    return (
        <div>
            <Header>{header}</Header>
            <Text>{text}</Text>
        </div>
    )
}