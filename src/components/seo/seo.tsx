import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

type SEOProps = {
  title: string
  description?: string
  lang?: string
}

export const SEO = ({ title, description, lang = 'pl' }: SEOProps): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            social {
              twitter
            }
          }
        }
      }
    `,
  )

  const metaKeywords = site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const metaTitle = `${site.siteMetadata?.title} - ${title}`

  return (
    <>
      <Helmet>
        {/* base attributes */}
        <html lang={lang} />
        <title>{metaTitle}</title>

        {/* meta basic */}
        <meta charSet="utf-8" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />

        {/* meta social */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={site.siteMetadata?.social?.twitter || ''} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={metaDescription} />

        <body className="root" />
      </Helmet>
    </>
  )
}
