import React, { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { BgImage } from 'gbimage-bridge';

interface Props {
  children: ReactNode;
}

export default function Background({ children }: Props): ReactElement {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Monster.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);

  const SBgImage = styled(BgImage)`
    height: 110vh;
    align-items: center;
    justify-content: center;
    display: flex;
  `;

  return <SBgImage image={image}>{children}</SBgImage>;
}
