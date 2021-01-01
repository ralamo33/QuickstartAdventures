import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import MyModal from "../components/MyModal";

export default function OrderButton() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

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
            <OrderButton variant="warning" onClick={handleShow}>Claim For Free</OrderButton>
            <MyModal show={show} setShow={setShow}></MyModal>
        </Container>
    )
}
