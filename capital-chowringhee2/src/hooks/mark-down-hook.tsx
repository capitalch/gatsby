import { graphql, useStaticQuery } from 'gatsby';
function useMarkDownHtml(source: string) {
    const gql = graphql`
    {
        about:  
            allMarkdownRemark(filter:{frontmatter:{name:{eq:"about"}}})
            {edges{node{
            html
            }}}
  
        history:
            allMarkdownRemark(filter:{frontmatter:{name:{eq:"history"}}})
            {edges{node{
            html
            }}}
    }`;

    const allHtml = useStaticQuery(gql);
    const html = allHtml[source].edges[0].node.html;
    return html;
}

export { useMarkDownHtml };