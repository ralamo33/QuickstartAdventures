import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Break from './Break';
import Textbox from './Textbox';
import BuyButton from './Buttons/BuyButton';
import SubscribeButton from './Buttons/SubscribeButton';
import FreeButton from './Buttons/FreeButton';

export default function Header(): ReactElement {
  const SetFontSize = styled.div`
    font-size: 8.5vw;
  `;

  const buttons = [
    <SubscribeButton key="3" />,
    <BuyButton key="2" />,
    <FreeButton key="1" />,
  ];

  return (
    <SetFontSize>
      <Break height={2} />
      <Break height={2} />
    </SetFontSize>
  );
}
