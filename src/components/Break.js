import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function Break(props) {
    const Break = styled.div`
        height: ${props.height}rem;
    `;

    return (
        <Break></Break>
    )
}