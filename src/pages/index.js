import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layouts/layout";
import Header from "../components/Header";
import Break from "../components/Break";
import {Container} from "react-bootstrap";
import MyCarousel from "../components/MyCarousel";

export default function Home() {
  const navItems=['Kickstarter', 'Our Journey'];

  return  (
    <Layout>
      <Header title="Quickstart Adventures" navItems={navItems}></Header>
      <Container>
        <Break height="5"></Break>
        <MyCarousel></MyCarousel>
      </Container>
    </Layout>
  )
}
