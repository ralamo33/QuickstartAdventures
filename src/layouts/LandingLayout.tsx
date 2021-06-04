import React, { ReactElement, ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import belmont from '../fonts/Belmont.otf';
import neverwinter from '../fonts/Neverwinter.otf';
import newrocker from '../fonts/NewRocker-Regular.ttf';
import newsreader from '../fonts/Newsreader/Newsreader-VariableFont_opsz,wght.ttf';
import roboto from '../fonts/Roboto-Regular.ttf';
import playfair from '../fonts/PlayfairDisplay-VariableFont_wght.ttf';
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from "gatsby-plugin-image";

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
  @font-face {
    font-family: newsreader;
    src: url(${newsreader}) format("truetype-variations");
    font-weight: 1 999;
    font-streatch 0% 100%;
    font-optical-sizing: 0 100;
  }
  @font-face {
    font-family: roboto;
    src: url(${roboto});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: playfair;
    src: url(${playfair}) format("truetype-variations");
    font-weight: 1 999;
    font-streatch 0% 100%;
    font-optical-sizing: 0 100;
  }

  body {
    background-color: teal;
    font-family: 'newrocker';
    font-weight: 400;
    width: 100%;
    min-height: 120vh;
    height: 100%;
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
