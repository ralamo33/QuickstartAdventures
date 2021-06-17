import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  color?: string;
  size?: string;
  fontFamily?: string;
}

const StyledTitle = styled.h1`
  color: ${(props: Props) => props.color || '#800000'};
  font-family: mephisto;
  text-align: center;
  font-size: ${(props: Props) => props.size || '15vmin'};
  font-family: ${(props: Props) => props.fontFamily || 'belmont'};
  width: 100%;
  -webkit-text-stroke: 1px black;
`;

export default function Title({
  text,
  color,
  size,
  fontFamily,
}: Props): ReactElement {
  return (
    <StyledTitle color={color} size={size} fontFamily={fontFamily}>
      {text}
    </StyledTitle>
  );
}
