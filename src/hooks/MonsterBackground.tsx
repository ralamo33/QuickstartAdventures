import { graphql, useStaticQuery } from 'gatsby';

export default function useMonster(): any {
  return useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "monstertext.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
}