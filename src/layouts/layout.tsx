import React, { ReactElement, ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #1a0000;
    font-family: 'MedievalSharp', cursive;
    font-weight: 400;
  }
`;

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
