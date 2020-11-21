import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import AlternateSides from "../layouts/AlternateSides";
import Layout from "../layouts/layout";
import Title from "../components/Title";
import MyNavbar from "../components/MyNavbar";

export default function Home() {
  const navItems=['Kickstarter', 'Our Journey'];
  return  (
    <Layout>
      <Title title="Simple Tavern"></Title>
      <MyNavbar navItems={navItems}></MyNavbar>
      <AlternateSides>
        <h1>Simple</h1>
        <p>This is super simple</p>
        <p>This is super simple</p>
        <h1>Modular</h1>
      </AlternateSides>
    </Layout>
  )
}
