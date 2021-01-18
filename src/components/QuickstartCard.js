import React from "react";
import styled from "styled-components";
import {Card} from "react-bootstrap";
import Break from "../components/Break";
import "bootstrap/dist/css/bootstrap.min.css";

export default function QuickstartCard(props) {

    const MyHeader = styled(Card.Header)`
        text-align: center;
        font-size: 3vw;
    `

    const MyText = styled.li`
        font-size: 1.5vw;
    `

    const TextList = props.text.map((text) => <div><MyText>{text}</MyText><Break height="2"></Break></div>);


    return  <Card className={props.border}>
                <MyHeader className={props.color}>{props.header}</MyHeader>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            {TextList}
                        </ul>
                    </Card.Text>
                </Card.Body>
                {props.button}
                <Break height="3"></Break>
            </Card>
}