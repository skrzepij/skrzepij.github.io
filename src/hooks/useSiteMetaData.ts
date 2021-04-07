import { graphql, useStaticQuery } from 'gatsby'

import { GatsbySiteMetaDataInterface } from '../api/gatsbyData'

export const useSiteMetaData = (): GatsbySiteMetaDataInterface => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            authorUrl
          }
        }
      }
    `,
  )

  return site.siteMetadata
}
