import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function EpicImage(props) {
 
    const StyledImage = styled.img`
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    `

    return (
        <StyledImage src={props.src} alt="Failed to load"></StyledImage>
    )
}