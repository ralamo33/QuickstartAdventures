import React from "react";
import styled from "styled-components";
import Break from "../components/Break";
import {Jumbotron} from "react-bootstrap";

export default function TitledList(props) {

    const MyJumbotron = styled(Jumbotron)`
        font-size: 4vw;
    `;

    const Title = styled.p`
        text-align: center;
        font-size: 1em;
    `;

    const Item = styled.li`
        font-size: 0.5em;
    `;

    const Items = () => props.items.map((itemText) => 
        <Item>{itemText}</Item>
    )

    return  <MyJumbotron>
                <Title>{props.title}</Title>
                <Break height="1"></Break>
                <ul>
                    <Items></Items>
                </ul>
            </MyJumbotron>;
}
