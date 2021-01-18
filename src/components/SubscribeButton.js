import React from "react";
import styled from "styled-components";
import {Button} from "react-bootstrap";

export default function SubscriptionButton(props) {

    const MyButton = styled(Button)`
        font-size: ${props.size};
        margin: auto;
        display: block;
    `

    return <MyButton variant="info">Subscribe</MyButton>
}