import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import MyModal from "./MyModal";
import * as Constants from "../constants";

export default function OrderButton() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    const OrderButton = styled(Button)`
        color: black;
        font-size: .35em;
        margin: auto;
        display: block;
    `

    return (
        <div>
            <OrderButton variant="warning" onClick={handleShow}>{Constants.FREE_BUTTON_TEXT}</OrderButton>
            <MyModal show={show} setShow={setShow}></MyModal>
        </div>
    )
}
