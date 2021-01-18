import React from "react";
import styled from "styled-components";
import {Card} from "react-bootstrap";
import Break from "../components/Break";
import FreeButton from "../components/FreeButton";

export default function QuickstartCard(props) {

    const MyCard = styled(Card)`
        border: 4px solid ${props.color};
    `

    const MyHeader = styled(Card.Header)`
        color: ${props.color === '#ffcc33' ? 'black' : '#f7efef'};
        background: ${props.color};
        text-align: center;
        font-size: 3vw;
    `

    const MyText = styled.li`
        font-size: 1.5vw;
    `

    const TextList = props.text.map((text) => <div><MyText>{text}</MyText><Break height="2"></Break></div>);


    return  <MyCard variant={props.variant}>
                <MyHeader>{props.header}</MyHeader>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            {TextList}
                        </ul>
                    </Card.Text>
                </Card.Body>
                {props.button}
                <Break height="3"></Break>
            </MyCard>
}