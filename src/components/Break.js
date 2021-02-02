import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function Break({ height }) {
  const MyBreak = styled.div`
        height: ${height}rem;
    `;

  return (
    <MyBreak />
  );
}
