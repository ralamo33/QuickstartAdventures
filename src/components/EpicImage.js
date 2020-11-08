import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function EpicImage(props) {
    const image = props.image;
    const header = props.header;
    const Header = styled.h3`
        color: green;
    `;
    const Image = styled.img`
        max-width: 90%;
    `;
    return (
        <div>
         <Header>{header}</Header>
         <Image src={image} alt="Failed to load"></Image>
        </div>
    )
}