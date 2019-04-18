import { graphql, useStaticQuery } from 'gatsby';

function useOffers() {
  const gql = graphql`{
    qr1:
    allFile(filter:{sourceInstanceName: {eq:"offers"}, extension:{ne:"json"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    qr2:
    allFile(filter:{sourceInstanceName: {eq:"offers"}, extension:{ne:"json"}}) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width:436, height: 364) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }`;
  const offersData = useStaticQuery(gql);
  const offersAllImagesFluid = {}, offersAllImagesFixed = {};
  offersData.qr1.edges.forEach((x: any) => {
    offersAllImagesFluid[x.node.name] = x.node.childImageSharp.fluid;
  })

  offersData.qr2.edges.forEach((x: any) => {
    offersAllImagesFixed[x.node.name] = x.node.childImageSharp.fixed;
  })

  return {
    offersAllImagesFluid: offersAllImagesFluid,
    offersAllImagesFixed: offersAllImagesFixed
  }
}

export { useOffers };