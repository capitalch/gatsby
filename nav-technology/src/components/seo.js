import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from './schema-org'

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
            social {
              twitter
              fbAppID
            }
          }
        }
      }
    `
  )
  
  // const metaDescription = description || site.siteMetadata.description
const {title, description, url, image, author, organization, social } = site.siteMetadata;  
return (
    <>
      <Helmet>
        {/* General tags */}
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content={social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
              isBlogPost={false}
              url={url}
              title={title}
              image={image}
              description={description}
              // datePublished={datePublished}
              author={author}
              organization={organization}
              defaultTitle={title} />
    </>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

/*
// <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   title={title}
    //   titleTemplate={`%s | ${site.siteMetadata.title}`}
    //   meta={[
    //     {
    //       name: `description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       name: `twitter:card`,
    //       content: `summary`,
    //     },
    //     {
    //       name: `twitter:creator`,
    //       content: site.siteMetadata.author,
    //     },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },
    //     {
    //       name: `twitter:description`,
    //       content: metaDescription,
    //     },
    //   ].concat(meta)}
    // />
*/
