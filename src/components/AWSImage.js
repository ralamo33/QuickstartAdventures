import React from "react"
import styled from "styled-components";
import * as Constants from "../constants.js"

export default function AWSImage(props) {
    const MyImage = styled.img`
    `
    return (
        <MyImage alt="Failed to load" src={Constants.BUCKET_URL + props.image}>
        </MyImage>
    );
}