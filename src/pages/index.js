import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import AlternateSides from "../layouts/AlternateSides";
import Layout from "../layouts/layout";
import Title from "../components/Title";
import MyNavbar from "../components/MyNavbar";
import RowHeaderText from "../components/RowHeaderText";
import Break from "../components/Break";
import { Container, Row, Col} from "react-bootstrap";
import * as Constants from "../constants";

export default function Home() {
  const navItems=['Kickstarter', 'Our Journey'];
  return  (
    <Layout>
      <Title title="Simple Tavern"></Title>
      <MyNavbar navItems={navItems}></MyNavbar>
      <Container>
        <Break height="10"></Break>
        <RowHeaderText header="Fast-Paced" color="#ffcc00" text={Constants.SIMPLE_TEXT} headerFirst={true} 
          // url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2Fb9%2F1d%2Fa0b91dcd5ab54bb509358bbcd797a289.jpg&f=1&nofb=1"></RowHeaderText>
          // url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fpathfinder%2Fimages%2F3%2F33%2FRooftop_chase.jpg%2Frevision%2Flatest%3Fcb%3D20090924195200&f=1&nofb=1"></RowHeaderText>
          url="https://cdnb.artstation.com/p/assets/images/images/031/609/487/4k/romain-jouandeau-concept-medieval-chase-scene-4k-detail-01.jpg?1604093445"></RowHeaderText>
        <Break height="10"></Break>
        <RowHeaderText header="Modular" color="red" text="This is pretty simple" headerFirst={false}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheinnergamer.net%2Fwp-content%2Fuploads%2F2017%2F03%2Fwhat-is-dungeons-dragons-1024x521.jpg&f=1&nofb=1"></RowHeaderText>
        <Break height="10"></Break>
        <RowHeaderText header="Customizable" color="#00ccff" text="This is pretty simple" headerFirst={true}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.artstation.com%2Fp%2Fassets%2Fimages%2Fimages%2F016%2F574%2F322%2Flarge%2Fyang-sohyeon-2-1.jpg%3F1552713509&f=1&nofb=1"></RowHeaderText>
        <Break height="10"></Break>
      </Container>
    </Layout>
  )
}

