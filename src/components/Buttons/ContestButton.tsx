import React, { ReactElement, useState } from 'react';
import ClickToOpen from './ClickToOpen';
import buttonClasses from './ClickToOpen.module.css';
import * as Constants from '../../constants';
import ContestForm from '../Forms/ContestForm';

export default function ContestButton(): ReactElement {
  const [show, setShow] = useState(false);

  return (
    <ClickToOpen
      variant="info"
      size={buttonClasses.relativeBlue}
      show={show}
      setShow={setShow}
      text={Constants.CONTEST_BUTTON_TEXT}
      title={Constants.CONTEST_MODAL_TITLE}
      form={<ContestForm close={() => setShow(false)} />}
    />
  );
}
