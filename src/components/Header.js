import React from 'react';
import styled from 'styled-components';
import EvenSpacingRow from '../layouts/EvenSpacingRow';
import Break from './Break';
import EpicImage from './EpicImage';
import Textbox from './Textbox';
import * as Constants from '../constants';
import PlaytestButton from './Buttons/PlaytestButton';
import ContestButton from './Buttons/ContestButton';
import SubscribeButton from './Buttons/SubscribeButton';

export default function Header() {
  const SetFontSize = styled.div`
        font-size: 8.5vw;
    `;

  const Title = styled.h1`
    color: red;
    text-align: center;
    font-size: 1.2em;
    `;

  const title = 'Quickstart Adventures';

  const buttons = [<ContestButton />, <PlaytestButton />, <SubscribeButton />];

  return (
    <SetFontSize>
      <EpicImage src={`${Constants.BUCKET_URL}Tavern.jpg`} />
      <Title>
        {title}
      </Title>
      <Textbox />
      <Break height="2" />
      <EvenSpacingRow items={buttons} oneOnSmall />
      <Break height="2" />
    </SetFontSize>
  );
}
