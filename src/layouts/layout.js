import React from "react"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === "dark" ? "black" : "white")};
    color: ${props => (props.theme === "dark" ? "white" : "black")};
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="dark" />
      {children}
    </React.Fragment>
  )
}