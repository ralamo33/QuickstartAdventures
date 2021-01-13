import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layouts/layout";
import Header from "../components/Header";
import Break from "../components/Break";
import {Container, Col, Row} from "react-bootstrap";
import * as Constants from "../constants";
import MyCarousel from "../components/MyCarousel";
import TitledList from "../components/TitledList";

export default function Home() {

  return  (
    <Layout>
      <Header/>
      <Container fluid>
        <Break height="5"></Break>
        <Row>
          <Col>
            <TitledList title={Constants.FIRST_TITLE} items={Constants.FIRST_ITEMS}></TitledList>
          </Col>
          <Col>
            <TitledList title={Constants.SECOND_TITLE} items={Constants.SECOND_ITEMS}></TitledList>
          </Col>
          <Col>
            <TitledList title={Constants.THIRD_TITLE} items={Constants.THIRD_ITEMS}></TitledList>
          </Col>
        </Row>
      </Container>
      <Break height="5"></Break>
    </Layout>
  )
}
