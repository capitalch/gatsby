import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'

function BlogTemplate(props) {

    const post = props.data.markdownRemark;
    const { title,date } = post.frontmatter;

    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}


export default BlogTemplate;

export const query = graphql`

query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        excerpt
        frontmatter {
            title
        }
    }
}`
