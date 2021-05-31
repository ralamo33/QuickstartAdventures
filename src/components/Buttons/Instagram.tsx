import React, { ReactNode, ReactElement } from 'react';
import PrettyButton from './PrettyButton';
import styled from 'styled-components';

const onClick = () => {
  alert('Hello there');
};

export default function Instagram(): ReactElement {
  return (
    <PrettyButton
      variant="primary"
      text="Instagram"
      fontSize="30px"
      color="white"
      backgroundcolor="purple"
      bordercolor="purple"
      onClick={onClick}
    />
  );
}
