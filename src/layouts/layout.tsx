import React, { ReactElement, ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import belmont from '../fonts/Belmont.otf';
import neverwinter from '../fonts/Neverwinter.otf';
import newrocker from '../fonts/NewRocker-Regular.ttf';
import newsreader from '../fonts/Newsreader/Newsreader-VariableFont_opsz,wght.ttf';
import roboto from '../fonts/Roboto-Regular.ttf';
import playfair from '../fonts/PlayfairDisplay-VariableFont_wght.ttf';
import evanescent from '../fonts/evanescent.ttf';
import hardcorium from '../fonts/hardcorium.ttf';
import immortal from '../fonts/IMMORTAL.ttf';
import revorioum from '../fonts/Revorioum.ttf';
import mephisto from '../fonts/Mephisto.ttf';
import baskerville from '../fonts/BaskervilleBT.ttf';
import * as Constants from '../constants';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: baskerville;
    src: url(${baskerville}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: mephisto;
    src: url(${mephisto}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  // @font-face {
  //   font-family: revorioum;
  //   src: url(${revorioum}) format('truetype');
  //   font-weight: normal;
  //   font-style: normal;
  // }
  // @font-face {
  //   font-family: immortal;
  //   src: url(${immortal}) format('truetype');
  //   font-weight: normal;
  //   font-style: normal;
  // }
  // @font-face {
  //   font-family: hardcorium;
  //   src: url(${hardcorium}) format('truetype');
  //   font-weight: normal;
  //   font-style: normal;
  // }
  @font-face {
    font-family: belmont;
    src: url(${belmont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: evanescent;
    src: url(${evanescent}) format('truetype');
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
    // background: #FFC201;
    // background: -webkit-radial-gradient(top, #FFC201, #F62A03);
    // background: -moz-radial-gradient(top, #FFC201, #F62A03);
    // background: radial-gradient(to bottom, #FFC201, #F62A03);
    font-family: 'newrocker';
    font-weight: 400;
    width: 100%;
    height: 100%;
  }
`;

interface LayoutProps {
  children: ReactNode;
  color?: string;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
