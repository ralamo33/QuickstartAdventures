import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

interface Props {
  height: string;
}

const MyBreak = styled.div`
  height: ${(props: Props) => props.height || '5vh'};
`;

export default function Break({ height }: Props): ReactElement {
  return <MyBreak height={height} />;
}
