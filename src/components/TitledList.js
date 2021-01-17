import React, {useState} from "react";
import styled from "styled-components";
import {Button, Card, Tooltip, Popover, OverlayTrigger} from "react-bootstrap";

export default function TitledList(props) {

    const [show, setShow] = useState(false);

    const MyButton = styled(Card)`
        background-color: #00b3b3;
        color: white;
        border: none;
        font-size: 2.5vw;
        text-align: center;
        width: 100%;
    `;

    const StyledText = styled.p`
        color: white;
        background-color: #00b3b3;
        font-size: .7em;
        text-align: left;
    `;

    const Items = () => props.items.map((itemText) => {
        return <StyledText className={show ? "show" : "hide"}>{itemText}</StyledText>;
    })

        return  <div>
                    <MyButton onClick={() => setShow(!show)}>
                    {props.title}
                    <Items></Items>
                    </MyButton>
                </div>
}