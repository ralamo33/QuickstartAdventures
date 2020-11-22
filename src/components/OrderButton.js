import React from "react"
import { Button } from "react-bootstrap";
import styled from "styled-components";

export default function OrderButton() {
    const Container = styled.div`
    height: 10vh;
    `

    const OrderButton = styled(Button)`
        left: 45%;
        position: relative;
        height: 80%;
        font-size: 170%;
        color: black;
    `
    return (
        <Container>
            <OrderButton variant="warning">Order Now</OrderButton>
        </Container>
    )
}