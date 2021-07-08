import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Break from '../components/Break';

interface Props {
  size: string;
  color: string;
  fontFamily: string;
  text?: string[];
}

const List = styled.ul`
  padding: 0;
  text-align: center;
  font-size: ${(props: Props) => props.size};
  color: ${(props: Props) => props.color};
  font-family: ${(props: Props) => props.fontFamily};
  -webkit-text-stroke: 0.2px black;
  list-style-type: none;
`;

const Item = styled.li`
  &:before {
    content: '\\1F451';
    margin-left: -20px;
    margin-right: 10px;
  }
`;

const Items = (text: any): ReactElement =>
  text.map((txt: string, idx: number) => (
    <div key={txt + idx.toString()}>
      <Item>{txt}</Item>
      <Break height="2vh" />
    </div>
  ));

export function ListText({
  size,
  text,
  color,
  fontFamily,
}: Props): ReactElement {
  return (
    <List size={size} color={color} fontFamily={fontFamily}>
      {Items(text)}
    </List>
  );
}
