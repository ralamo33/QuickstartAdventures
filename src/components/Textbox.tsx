import React, { ReactElement } from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';

export default function Textbox(): ReactElement {
  const Text = styled.div`
    color: #0088cc;
    font-size: 0.6em;
    max-width: 80vw;
    margin: auto;
    text-align: center;
  `;

  return <Text>{Constants.DESCRIPTION}</Text>;
}
