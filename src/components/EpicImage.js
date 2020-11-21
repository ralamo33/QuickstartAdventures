import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function EpicImage(props) {
    const image = props.image;
    const urlHeader = 'https://remember-the-ralamo-images.s3.amazonaws.com/';
    const backgroundImage = urlHeader + 'background.jpg'
    const Image = styled.img`
        max-width: 90%;
        height: 50vh;
        text-align: center;
        margin: auto;
        display: block;
    `;
    return (
        <Image src={image} alt="Failed to load"></Image>
    )
}