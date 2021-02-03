import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #1a0000;
    font-family: 'MedievalSharp', cursive;
    font-weight: 400;
  }
`;
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
