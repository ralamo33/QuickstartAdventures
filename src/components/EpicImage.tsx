import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function EpicImage({ src }) {
  const StyledImage = styled.img`
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    `;

  return (
    <StyledImage src={src} alt="Failed to load" />
  );
}
