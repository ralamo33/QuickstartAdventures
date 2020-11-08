import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/CustomNavbar";
import EpicImage from "../components/EpicImage";
import EpicText from "../components/EpicText";
import AlternateSides from "../layouts/AlternateSides";

export default function Home() {
  const navItems=['Home', 'Games', 'Projects', 'Blog'];
  const image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.desktopanimated.com%2Fwp-content%2Fuploads%2F2014%2F12%2FEpic_Lands_1.jpg&f=1&nofb=1';
  const colorClass='text-danger';
  const header='Bow before your lord';
  return  (
    <div>
      <CustomNavbar navItems={navItems}></CustomNavbar>
      <AlternateSides>
        <EpicImage image={image} colorClass={colorClass} header={header}></EpicImage>
        <EpicText text="This is dummy text"></EpicText>
      </AlternateSides>
    </div>
  )
}
