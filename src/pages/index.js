import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layouts/layout";
import Title from "../components/Title";
import MyNavbar from "../components/MyNavbar";
import Break from "../components/Break";
import {Container} from "react-bootstrap";
import MyCarousel from "../components/MyCarousel";

export default function Home() {
  const navItems=['Kickstarter', 'Our Journey'];
  return  (
    <Layout>
      <Title title="Simple Tavern"></Title>
      <MyNavbar navItems={navItems}></MyNavbar>
      <Container>
        <Break height="10"></Break>
        <MyCarousel></MyCarousel>
      </Container>
    </Layout>
  )
}
