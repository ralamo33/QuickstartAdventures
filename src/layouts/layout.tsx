import React, { ReactElement, ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import belmont from '../fonts/Belmont.otf';
import neverwinter from '../fonts/Neverwinter.otf';
import newrocker from '../fonts/NewRocker-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: belmont;
    src: url(${belmont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: newrocker;
    src: url(${newrocker}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: neverwinter;
    src: url(${neverwinter}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    // background: #1a0000;
    background: #ffcc00;
    font-family: 'newrocker';
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
