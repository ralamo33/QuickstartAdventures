import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layouts/layout";
import Header from "../components/Header";
import Break from "../components/Break";
import {Container} from "react-bootstrap";

export default function Home() {

  return  (
    <Layout>
      <Header/>
      <Container>
        <Break height="5"></Break>
      </Container>
    </Layout>
  )
}
