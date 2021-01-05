import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layouts/layout";
import Title from "../components/Title";
import Break from "../components/Break";
import {Container} from "react-bootstrap";
import MyCarousel from "../components/MyCarousel";
import styled from "styled-components";

export default function Home() {
  const navItems=['Kickstarter', 'Our Journey'];

  return  (
    <Layout>
      <Title title="Quickstart Adventures" navItems={navItems}></Title>
      <Container>
        <Break height="10"></Break>
        <MyCarousel></MyCarousel>
      </Container>
    </Layout>
  )
}
