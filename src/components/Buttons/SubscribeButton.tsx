import React, { ReactElement, useState } from 'react';
import ClickToOpen from './ClickToOpen';
import * as Constants from '../../constants';
import SubscribeForm from '../Forms/SubscribeForm';

export default function SubscribeButton(): ReactElement {
  const [show, setShow] = useState(false);

  const subscribeButton = (
    <ClickToOpen
      variant="info"
      fontSize="30px"
      color="white"
      backgroundcolor="#0088cc"
      bordercolor="#0088cc"
      hovercolor="#00aaff"
      show={show}
      setShow={setShow}
      text={Constants.SUBSCRIPE_BUTTON_TEXT}
      title={Constants.SUBSCRIBE_MODAL_TITLE}
      form={<SubscribeForm close={() => setShow(false)} />}
    />
  );

  return subscribeButton;
}
