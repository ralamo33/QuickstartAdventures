import React, {ReactNode, ReactElement} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

interface Props {
  children: ReactNode;
}

export default function Background ({ children }: Props): ReactElement {

  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "landscape.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  return (
    <BgImage image={image}>{children}</BgImage>
  );
}
