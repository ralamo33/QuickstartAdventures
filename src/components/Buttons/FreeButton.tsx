import React, { ReactElement, useState } from 'react';
import ClickToOpen from './ClickToOpen';
import buttonClasses from './ClickToOpen.module.css';
import * as Constants from '../../constants';
import FreeForm from '../Forms/FreeForm';

export default function ContestButton(): ReactElement {
  const [show, setShow] = useState(false);

  return (
    <ClickToOpen
      variant="warning"
      size={buttonClasses.relativeYellow}
      show={show}
      setShow={setShow}
      text={Constants.FREE_BUTTON_TEXT}
      title={Constants.FREE_MODAL_TITLE}
      form={<FreeForm close={() => setShow(false)} />}
    />
  );
}
