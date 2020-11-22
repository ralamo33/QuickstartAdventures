import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import AlternateSides from "../layouts/AlternateSides";
import Layout from "../layouts/layout";
import Title from "../components/Title";
import MyNavbar from "../components/MyNavbar";
import RowHeaderText from "../components/RowHeaderText";
import { Container, Row, Col} from "react-bootstrap";
import * as Constants from "../constants";

export default function Break(props) {
    const Break = styled.div`
        height: ${props.height}rem;
        background-image: url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc07.deviantart.net%2Ffs70%2Ff%2F2013%2F040%2F7%2Ff%2Fdissidia_final_fantasy_cosmos_and_chaos_logos_by_eldi13-d5ufi7f.png&f=1&nofb=1);
        background-size: cover;
        background-position: center;
    `;
    return (
        <Break></Break>
    )
}