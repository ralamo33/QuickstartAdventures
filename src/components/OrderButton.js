import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import MyModal from "../components/MyModal";

export default function OrderButton() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    const OrderButton = styled(Button)`
        display: block;
        margin: auto;
        color: black;
        font-size: .4em;
    `

    return (
        <div>
            <OrderButton variant="warning" onClick={handleShow}>Claim For Free!</OrderButton>
            <MyModal show={show} setShow={setShow}></MyModal>
        </div>
    )
}
