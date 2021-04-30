import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  color?: string;
}

const StyledTitle = styled.h1`
  color: ${(props: Props) => props.color || '#800000'};
  font-family: belmont;
  text-align: center;
  font-size: 15vmin;
  width: 100%;
`;

export default function Title({ text, color }: Props): ReactElement {
  return <StyledTitle color={color}>{text}</StyledTitle>;
}
