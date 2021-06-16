import React, { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';

import { BgImage } from 'gbimage-bridge';

interface Props {
  children?: ReactNode;
  height?: string;
  hook: () => any;
}

export default function Background({
  children,
  height,
  hook,
}: Props): ReactElement {
  const { placeholderImage } = hook();

  const image = getImage(placeholderImage);

  const SBgImage = styled(BgImage)`
    height: ${(props: Props) => props.height || '110vh'};
    align-items: center;
    justify-content: center;
    display: flex;
  `;

  return (
    <SBgImage height={height} image={image}>
      {children}
    </SBgImage>
  );
}
