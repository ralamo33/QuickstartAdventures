import React from "react"
import {styled, createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === "medieval" ? "#1a0d00" : "gray")};
    color: ${props => (props.theme === "medieval" ? "black" : "white")};
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