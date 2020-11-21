import React from "react"
import { createGlobalStyle } from "styled-components"
import * as Constants from "../constants";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === "medieval" ? "#E8D8A6" : "#3d3d5c")};
    color: ${props => (props.theme === "medieval" ? "black" : "white")};
    background-image: url(${Constants.BUCKET_URL + "Scroll.jpg"});
    font-family: 'MedievalSharp', cursive;
    font-weight: 400;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="medieva"/>
      {children}
    </React.Fragment>
  )
}