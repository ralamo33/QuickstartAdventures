import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import EpicImage from "../components/EpicImage";
import EpicText from "../components/EpicText";
import AlternateSides from "../layouts/AlternateSides";
import Layout from "../layouts/layout";
import Title from "../components/Title";

export default function Home() {
  const navItems=['Home', 'Games', 'Projects', 'Blog'];
  const urlHeader = 'https://remember-the-ralamo-images.s3.amazonaws.com/';
  const cannon = urlHeader + 'Cannon.jpg'
  const got = urlHeader + 'GOT.jpg'
  const plane = urlHeader + 'Plane.jpg'
  const colorClass='text-danger';
  const header='Bow before your lord';
  return  (
    <Layout>
      <Title navItems={navItems} title="Simplified Dungeons"></Title>
      <AlternateSides>
        <EpicImage image={got} colorClass={colorClass}></EpicImage>
        <EpicText text="This is dummy text" header={header}></EpicText>
        <EpicImage image={plane} colorClass={colorClass} header={header}></EpicImage>
        <EpicText text="This is dummy text"></EpicText>
        <EpicImage image={cannon} colorClass={colorClass} header={header}></EpicImage>
        <EpicText text="This is dummy text"></EpicText>
      </AlternateSides>
    </Layout>
  )
}
