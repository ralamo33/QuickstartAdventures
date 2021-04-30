import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import ClickToOpen from './ClickToOpen';
import * as Constants from '../../constants';
import FreeForm from '../Forms/FreeForm';
import { string } from 'yup/lib/locale';

interface buttonProps {
  fontSize: string;
  color: string;
  backgroundcolor: string;
  bordercolor: string;
}

export default function FreeButton(): ReactElement {
  const [show, setShow] = useState(false);

  return (
    <ClickToOpen
      variant="warning"
      fontSize="30px"
      color="black"
      backgroundcolor="#ff9900"
      bordercolor="#ff9900"
      hovercolor="#ffdd00"
      show={show}
      setShow={setShow}
      text={Constants.FREE_BUTTON_TEXT}
      title={Constants.FREE_MODAL_TITLE}
      form={<FreeForm close={() => setShow(false)} />}
    />
  );
}
