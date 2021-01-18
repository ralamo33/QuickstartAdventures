import React from "react";
import styled from "styled-components";
import {Card} from "react-bootstrap";
import Break from "../components/Break";
import "bootstrap/dist/css/bootstrap.min.css";

export default function QuickstartCard(props) {

    const MyCard = styled(Card)`
        margin: 10px 0px;
    `

    const MyHeader = styled(Card.Header)`
        text-align: center;
        font-size: 32px;
    `

    const MyBody = styled(Card.Body)`
        height: 50vh;
    `

    const MyList = styled.ul`
        margin: 0;
        padding: 0;
    `

    const MyText = styled.li`
        font-size: 20px;
    `

    const TextList = props.text.map((text) => <div><MyText>{text}</MyText><Break height="2"></Break></div>);


    return  <MyCard className={props.border}>
                <MyHeader className={props.color}>{props.header}</MyHeader>
                <MyBody>
                    <Card.Text>
                        <MyList>
                            {TextList}
                        </MyList>
                    </Card.Text>
                </MyBody>
                {props.button}
                <Break height="3"></Break>
            </MyCard>
}