import { graphql, useStaticQuery } from 'gatsby';

function useMetaData(props: any) {
  const gqlSiteMetadata = graphql`
    {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
    }`
  const data = useStaticQuery(gqlSiteMetadata);

  return {
    metaData: data.site.siteMetadata
  }
}

export { useMetaData };