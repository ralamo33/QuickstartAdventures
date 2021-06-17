import { graphql, useStaticQuery } from 'gatsby';

export default function useWitch(): any {
  return useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "witch.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
}