import { graphql, useStaticQuery } from 'gatsby';

export default function useLandscape(): any {
  return useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "landscape.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
}