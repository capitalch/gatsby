import React from 'react';
import Helmet from 'react-helmet';

export default React.memo(
    ({ author, url,
        defaultTitle,
        description,
        image,
        isBlogPost,
        organization,
        title
    }: any) => {
        const baseSchema = [
            {
                '@context': 'http://schema.org',
                '@type': 'Organization',
                url: url,
                name: title,
                alternateName: defaultTitle,
                sameAs : [
                    "https://twitter.com/PvtCapital",
                    "https://www.facebook.com/CapitalChowringheePvtLtd"
                   ],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "12, J. L. nehru Road, Esplanade",
                    "addressRegion": "Kolkata",
                    "postalCode": "700013",
                    "addressCountry": "India"
                  }
            },
        ];

        const schema = isBlogPost
            ? [
                ...baseSchema,
                {
                    '@context': 'http://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            item: {
                                '@id': url,
                                name: title,
                                image,
                            },
                        },
                    ],
                },
                {
                    '@context': 'http://schema.org',
                    '@type': 'BlogPosting',
                    url,
                    name: title,
                    alternateName: defaultTitle,
                    headline: title,
                    image: {
                        '@type': 'ImageObject',
                        url: image,
                    },
                    description,
                    author: {
                        '@type': 'Person',
                        name: author.name,
                    },
                    publisher: {
                        '@type': 'Organization',
                        url: organization.url,
                        logo: organization.logo,
                        name: organization.name,
                    },
                    mainEntityOfPage: {
                        '@type': 'WebSite',
                        '@id': url,
                    }
                },
            ]
            : baseSchema;

        return (<Helmet>
            {/* Schema.org tags */}
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>);
    },
);