import React, { ReactElement, useState } from 'react';
import ClickToOpen from './ClickToOpen';
import buttonClasses from './ClickToOpen.module.css';
import * as Constants from '../../constants';
import BuyForm from '../Forms/BuyForm';

const [show, setShow] = useState(false);

const myButton = (
  <ClickToOpen
    variant="danger"
    size={buttonClasses.relativeRed}
    show={show}
    setShow={setShow}
    text={Constants.BUY_BUTTON_TEXT}
    title={Constants.BUY_MODAL_TITLE}
    form={<BuyForm close={() => setShow(false)} />}
  />
);

export default function BuyButton(): ReactElement {
  return myButton;
}
