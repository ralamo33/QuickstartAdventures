import React, { ReactElement } from 'react';
import styled from 'styled-components';
import EvenSpacingRow from '../layouts/EvenSpacingRow';
import Break from './Break';
import Textbox from './Textbox';
import PlaytestButton from './Buttons/PlaytestButton';
import SubscribeButton from './Buttons/SubscribeButton';
import ContestButton from './Buttons/ContestButton';

export default function Header(): ReactElement {
  const SetFontSize = styled.div`
    font-size: 8.5vw;
  `;

  const buttons = [
    <ContestButton key="1" />,
    <PlaytestButton key="2" />,
    <SubscribeButton key="3" />,
  ];

  return (
    <SetFontSize>
      {/* <Textbox /> */}
      <Break height={2} />
      <EvenSpacingRow items={buttons} />
      <Break height={2} />
    </SetFontSize>
  );
}
