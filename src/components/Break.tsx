import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

interface Props {
  height: number;
}

export default function Break({ height }: Props): ReactElement {
  const MyBreak = styled.div`
    height: ${height}rem;
  `;

  return <MyBreak />;
}
