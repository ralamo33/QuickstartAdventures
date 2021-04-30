/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import * as Constants from '../../constants';
import PrettyButton from './PrettyButton';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisabledFreeButton(): ReactElement {
  return (
    <div>
      {
        <PrettyButton
          variant="danger"
          fontSize="30px"
          color="white"
          backgroundColor="#800000"
          borderColor="#800000"
          hoverColor="#cc0000"
          opacity="0.7"
          text={Constants.BUY_BUTTON_TEXT}
        ></PrettyButton>
      }
    </div>
  );
}
