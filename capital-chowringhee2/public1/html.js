import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {

  const socialMediaPages = `
  <script type="application/ld+json">
  {
    "@context" : "http://schema.org",
    "@type" : "Organization",
    "name" : "capital-cowringhee",
    "url" : "https://www.capital-chowringhee.com",
    "sameAs" : [
      "https://www.facebook.com/CapitalChowringheePvtLtd/",
      https://twitter.com/SusantAgrawal,
      https://www.linkedin.com/in/sushant1234
      ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12, J. L. Nehru Road",
      "addressRegion": "West Bengal, Kolkata",
      "postalCode": "700013",
      "addressCountry": "India"
    }
  }</script>`

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body + socialMediaPages }}/>
        {/* <dangerouslySetInnerHTML={{ __html: socialMediaPages }}>  <> */}
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
