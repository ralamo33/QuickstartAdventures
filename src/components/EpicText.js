import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function EpicText(props) {
    const text = props.text;
    const Text = styled.p`
        color: red;
    `;
    return (
        <div>
            <Text>{text}</Text>
        </div>
    )
}