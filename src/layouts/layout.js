import React from "react"
import { createGlobalStyle } from "styled-components"
import * as Constants from "../constants";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === "medieval" ? "#E8D8A6" : "gray")};
    color: ${props => (props.theme === "medieval" ? "black" : "white")};
    // background-image: url(${Constants.BUCKET_URL + "Scroll.jpg"});
    // background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2Fb9%2F1d%2Fa0b91dcd5ab54bb509358bbcd797a289.jpg&f=1&nofb=1);
    font-family: 'MedievalSharp', cursive;
    font-weight: 400;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="medieval"/>
      {children}
    </React.Fragment>
  )
}