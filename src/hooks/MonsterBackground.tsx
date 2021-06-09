import { graphql, useStaticQuery } from 'gatsby';

// Does not work.
export const MonsterBackground = (): any => {
  const { monsterBackground } = useStaticQuery(
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
  return monsterBackground;
};
