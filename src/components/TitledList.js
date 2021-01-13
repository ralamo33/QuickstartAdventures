import React from "react";
import styled from "styled-components";
import {Button, Popover, OverlayTrigger} from "react-bootstrap";

export default function TitledList(props) {

    const MyButton = styled(Button)`
        background-color: #00b3b3;
        color: white;
        border: none;
    `

    const MyPopover = styled(Popover)``;

    const MyOverlayTrigger = styled(OverlayTrigger)``;

    return  <MyOverlayTrigger trigger="hover" overlay="MyPopover" placement="bottom">
                <MyButton block>
                    {props.title}
                </MyButton>
            </MyOverlayTrigger>
}
