import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import AlternateSides from "../layouts/AlternateSides";
import Layout from "../layouts/layout";
import Title from "../components/Title";
import MyNavbar from "../components/MyNavbar";
import RowHeaderText from "../components/RowHeaderText";
import { Container, Row, Col} from "react-bootstrap";
import * as Constants from "../constants";

export default function Home() {
  const navItems=['Kickstarter', 'Our Journey'];
  return  (
    <Layout>
      <Title title="Simple Tavern"></Title>
      <MyNavbar navItems={navItems}></MyNavbar>
      <Container fluid>
        <RowHeaderText header="Simple" color="yellow" text={Constants.SIMPLE_TEXT} headerFirst={true}></RowHeaderText>
        <RowHeaderText header="Modular" color="blue" text="This is pretty simple" headerFirst={false}></RowHeaderText>
        <RowHeaderText header="Customizable" color="red" text="This is pretty simple" headerFirst={true}></RowHeaderText>
      </Container>
    </Layout>
  )
}
