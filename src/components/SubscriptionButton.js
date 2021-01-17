import React from "react";
import styled from "styled-components";
import {Button} from "react-bootstrap";

export default function SubscriptionButton() {

    const MyButton = styled(Button)`
        font-size: 0.35em;
        margin: auto;
        display: block;
    `

    return <MyButton variant="info">Subscribe</MyButton>
}